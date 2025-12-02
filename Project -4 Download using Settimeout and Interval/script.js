let prog=document.querySelector("#prog");
let per=document.querySelector("#per");
let dbtn=document.querySelector("#dbtn");
let grow=0;
dbtn.addEventListener("click",function(){
    dbtn.style.pointerEvents=`none`;
    dbtn.style.backgroundColor="gray"
    dbtn.innerHTML="Downloading.."
    let time=+50+(Math.floor(Math.random()*50));
    let i=setInterval(() => {
        grow++;
        per.innerHTML=grow+`%`;
        prog.style.width=grow+`%`;
    }, time);
    
    setTimeout(() => {
        clearInterval(i);
        dbtn.innerHTML="Downloaded"
        console.log("Downloaded in "+time/10+"s")
    }, time*100);  
});