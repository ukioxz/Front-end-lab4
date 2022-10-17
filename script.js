'use strict'

const allChar ="0123456789ABCDEF";
let firstElem = document.getElementById('full_name');
let secondElem = document.querySelector('.my_date');

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
