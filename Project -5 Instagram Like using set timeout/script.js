let video = document.querySelector("video");
let like = document.querySelector("#like");


video.addEventListener("dblclick", function () {

    like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    like.style.opacity = "1";

    setTimeout(() => {
        like.style.transform = "translate(-50%, -450%) scale(1) rotate(0deg)";
        like.style.opacity = "0";
    }, 900);

    setTimeout(() => {
        like.style.transform = "translate(-50%, -50%) scale(0) rotate(-90deg)";
    }, 1200);

});
