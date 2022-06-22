const container = document.querySelector(".container");
const text = document.querySelector(".text");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
let flag = true;


function clockJs() {
    if(flag) {
  const date = new Date();
  const all = date.toLocaleTimeString();
  // const hours = date.getHours();

  // const minutes = date.getMinutes();
  // if(minutes < 10) {

  // }
  // const seconds = date.getSeconds();
  // text.innerText  = `${hours}:${minutes}:${seconds}`;
  text.innerText = all;
}}
setInterval(clockJs, 1000);
btn1.addEventListener("click", () => {
    flag = false;
     clockJs();
 });

 btn2.addEventListener("click", () => {
    flag = true;
     clockJs();
 });