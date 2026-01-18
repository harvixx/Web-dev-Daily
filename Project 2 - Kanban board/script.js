const completed = document.querySelector('#completed');
const taskColumns = document.querySelectorAll('.task-column');
const modal = document.querySelector('.modal')
const newTaskbtn = document.querySelector('.new-task-btn')
const closeModal = document.querySelectorAll('.modal-close')
const addTask = document.querySelector('#addtask')
const priorityOption = document.querySelectorAll('.priority-option')
const emptyTitle = document.querySelector('.empty-title')

function addCard(t, d, p, c) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('draggable', 'true');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('card-remove');
    removeBtn.setAttribute('title', 'Remove task');
    removeBtn.textContent = '✕';

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = t;

    const desc = document.createElement('p');
    desc.classList.add('card-desc');
    desc.textContent = d;

    const meta = document.createElement('div');
    meta.classList.add('card-meta');

    const dot = document.createElement('span');
    dot.classList.add('priority-dot', p);

    const text = document.createElement('span');
    text.classList.add('priority-text');
    text.textContent = p;

    meta.append(dot, text);
    card.append(removeBtn, title, desc, meta);
    c.appendChild(card);
    card.addEventListener('dragstart', () => {
        dragelem = card;
    })
    card.addEventListener('dragend', () => {
        dragelem = null;
        clearHover()
    })
    const deletebutton = card.querySelector('button')
    deletebutton.addEventListener('click', () => {
        card.remove()
        syncBoard();
    })
}
function syncBoard() {
    taskColumns.forEach(column => {
        const cardsBox = column.querySelector('.cards');

        const oldEmpty = cardsBox.querySelector('.no-task');
        if (oldEmpty) oldEmpty.remove();

        const cards = cardsBox.querySelectorAll('.card');

        if (cards.length === 0) {
            const empty = document.createElement('div');
            empty.classList.add('no-task');

            if (column.id === 'back') {
                empty.textContent = 'No Backlog';
            }

            if (column.id === 'progress') {
                empty.textContent = 'Work in progress will appear here';
            }

            if (column.id === 'completed') {
                empty.textContent = 'Completed tasks will show here';
            }

            if (column.id === 'todo') {
                const text = document.createElement('p');
                text.textContent = 'No tasks yet';

                const btn = document.createElement('button');
                btn.classList.add('empty-add-btn');
                btn.textContent = '+ Add Task';

                btn.addEventListener('click', () => {
                    newTaskbtn.click();
                });

                empty.append(text, btn);
            }

            cardsBox.appendChild(empty);
        }

        column.querySelector('.right').textContent = cards.length;

        taskData[column.id] = Array.from(cards).map(c => ({
            title: c.querySelector('h5').innerHTML,
            desc: c.querySelector('p').innerHTML,
            prio: c.querySelector('.priority-text').innerHTML
        }));
    });

    localStorage.setItem("carddata", JSON.stringify(taskData));
}



let taskData = {}
if (localStorage.getItem('carddata')) {
    const data = JSON.parse(localStorage.getItem('carddata'))
    for (const col in data) {
        const column = document.querySelector(`#${col} .cards`);
        data[col].forEach(task => {
            addCard(task.title, task.desc, task.prio, column)
        })
    }
    syncBoard();
}
else{
     syncBoard();
}
let priority = 'Low';
let dragelem = null;

taskColumns.forEach(column => {

    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        clearHover()
        column.classList.add('over-hover');
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();

        const cardsContainer = column.querySelector('.cards');
        if (dragelem) {
            cardsContainer.appendChild(dragelem);
        }

        syncBoard();
        clearHover();
    });

});
function clearHover() {
    taskColumns.forEach(col => col.classList.remove('over-hover'));
}

newTaskbtn.addEventListener('click', () => {
    modal.classList.add('activemodal');
})
closeModal.forEach((close) => {
    close.addEventListener('click', () => {
        modal.classList.remove('activemodal');
    })
})
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('activemodal')
    }
})
priorityOption.forEach((option) => {
    option.addEventListener('click', () => {
        priorityOption.forEach((option) => {
            option.classList.remove('active')
        })
        option.classList.add('active')
        if (option.classList.contains('low')) {
            priority = 'Low';
        }
        else if (option.classList.contains('mid')) {
            priority = 'Mid';
        }
        else if (option.classList.contains('high')) {
            priority = 'High';
        }

    })
})
addTask.addEventListener('click', () => {
    let taskTitle = document.querySelector('#task-title-name').value
    let taskDesc = document.querySelector('#task-title-desc').value
    if (taskTitle == '') {
        emptyTitle.style.display = "block";
    }
    else {
        let column = document.querySelector('#todo .cards');
        addCard(taskTitle, taskDesc, priority, column);
        syncBoard();
        document.querySelector('#task-title-name').value = '';
        document.querySelector('#task-title-desc').value = '';
        priority = 'Low'
        priorityOption.forEach((option) => {
            option.classList.remove('active')
        })
        document.querySelector('.low').classList.add('active')
        modal.classList.remove('activemodal')
        emptyTitle.style.display = "none";
    }
})