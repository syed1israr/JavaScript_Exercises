const scroll = new LocomotiveScroll({
    el: document.querySelector('.book'),
    smooth: true
});

const stat = document.querySelector("h5");
const add = document.querySelector(".ADD");
let flag = 0;

add.addEventListener("click", function() {
    if (flag === 0) {
        stat.innerHTML = "Friends!";
        stat.style.color = "green";
        add.innerHTML = "Remove Friend";
        flag = 1;
    } else {
        stat.innerHTML = "Strangers";
        stat.style.color = "red";
        flag = 0;
        add.innerHTML = "Add Friends";
    }
});

const con = document.querySelector(".container");
const love = document.querySelector("ion-icon");

con.addEventListener("dblclick", function() {
    love.style.color = "yellow";
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(function() {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 2000);
});

