'use strict'

const allChar ="0123456789ABCDEF";
let firstElem = document.getElementById('full_name');
let secondElem = document.querySelector('.my_date');

let addBtn = document.querySelector('.bt1');
let zoomBtn = document.querySelector('.bt2');
let decrBtn = document.querySelector('.bt3');
let delBtn = document.querySelector('.bt4');

let img1 = document.getElementById('block');
let fileI = document.getElementById('file1');

function save(){
  let f = fileI.files[0];
  if (f) {
      img1.src = URL.createObjectURL(f);
      localStorage.setItem('myImage', img1.src);
  }
}
img1.src = localStorage.getItem('myImage');

let i = 0;
let j = 10;
zoomBtn.addEventListener('click',(event) => {
  i++;
  img1.style.transform = "scale(1."+ i +")";
});
decrBtn.addEventListener('click',(event) => {
  j--;
  img1.style.transform = "scale(0."+ j +")";
});
delBtn.addEventListener('click',(event) => {
  img1.style.width ="400px";
  img1.style.height = "200px";
});
const randomSetColorFont = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  firstElem.style.color = "#"+randomColor;
}
const randomSetColorBack = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  firstElem.style.background = "#"+randomColor;
}

const randomSetColorFontClass = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  secondElem.style.color = "#"+randomColor;
}
const randomSetColorBackClass = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  secondElem.style.background = "#"+randomColor;
}
firstElem.addEventListener('click',randomSetColorFont);
firstElem.addEventListener('click',randomSetColorBack);
secondElem.addEventListener('click',randomSetColorFontClass);
secondElem.addEventListener('click',randomSetColorBackClass);
