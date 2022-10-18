'use strict'

const allChar ="0123456789ABCDEF";
let firstElem = document.getElementById('full_name');
let secondElem = document.querySelector('.my_date');

let addBtn = document.querySelector('.bt1');
let zoomBtn = document.querySelector('.bt2');
let decrBtn = document.querySelector('.bt3');
let delBtn = document.querySelector('.bt4');

let img1 = document.getElementById('block');

let i = 0;
let j = 10;

addBtn.addEventListener('click',(event) => {
  img1.style.display = "block";
});
zoomBtn.addEventListener('click',(event) => {
  i++;
  img1.style.transform = "scale(1."+ i +")";
});
decrBtn.addEventListener('click',(event) => {
  j--;
  img1.style.transform = "scale(0."+ j +")";
});
delBtn.addEventListener('click',(event) => {
  img1.style.display = "none";
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
