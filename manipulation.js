document.getElementById('container');
document.querySelector('#container');
document.getElementsByClassName("second");
document.querySelector("ol .third");
let cont = document.querySelector('#container');
cont.innerText = "Hello";

const foot = document.querySelector(".footer");
foot.classList.add("main");

foot.classList.remove("main");

let li = document.createElement("li");
li.innerText = "four";
 
let list = document.querySelector("ul");
list.append(li);

let ol = document.querySelectorAll("ol");
for(let li of ol) {
    li.style.backgroundColor = "green";
}

const f = document.querySelector(".footer");
f.remove;