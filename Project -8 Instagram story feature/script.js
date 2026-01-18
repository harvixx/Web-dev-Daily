let stories = document.querySelector(".stories");
let story = document.querySelector(".story");
let users = [
    {
        img: "https://i.pinimg.com/1200x/26/43/a8/2643a8c56f6a879acfc79e74f7f113e2.jpg",
    },

    {
        img: "https://i.pinimg.com/736x/82/8c/e2/828ce216ab4e7a69df9ff99e38bed031.jpg",
    },
    {
        img: "https://i.pinimg.com/736x/6b/b9/ed/6bb9eddacfd2e11eca1b986b274749a5.jpg",
    },
    {
        img: "https://i.pinimg.com/1200x/a2/bb/e1/a2bbe12e10d71da3dc6e268c125c5240.jpg",
    },
    {
        img: "https://i.pinimg.com/736x/90/93/07/9093070ea9d94b2fad758b0f7e7de8ab.jpg",
    },
    {
        img: "https://i.pinimg.com/1200x/0d/78/f3/0d78f359d821b586262f518b7155e1c5.jpg",
    },
    {
        img: "https://i.pinimg.com/736x/8f/cc/cf/8fcccf53095867543e6a53655022f2e4.jpg",
    },
]

users.forEach(function(i,index){
    stories.innerHTML+= `
                <div class="story-area">
                    <div class="story">
                        <img id="${index}" src="${i.img}" alt="">
                    </div>
                </div>`
});

stories.addEventListener("click",function(det){
        document.querySelector(".full").style.display="block"
        document.querySelector(".full").style.backgroundImage=`url( ${users[det.target.id].img})`
           
});
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".full").style.display="none"
});


