'use strict';

// Tabs from "Code Example"

let tabButtons = document.querySelectorAll('.js-tab-btn');
let tabContents = document.querySelectorAll('.js-tab-content');

function toggleTabs(arr, currentTab) {
  arr.forEach(item => {
    item.forEach(i => { i.classList.remove('active') });
    item[currentTab].classList.add('active');
  });
}

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener('click', () => {
    toggleTabs([tabButtons, tabContents], i);
  })
}

// Mobile Menu

let hamb = document.querySelector('.js-hamb');
let menu = document.querySelector('.js-menu');

function toggleWindow(btn, window) {
  btn.classList.toggle('active');
  window.classList.toggle('active');
}

hamb.addEventListener('click', () => {
  toggleWindow(hamb, menu);
});

menu.addEventListener('click', (event) => {
  let link = event.target.closest('.js-menu-link');

  if (event.currentTarget.classList.contains('active') && link) {
    toggleWindow(hamb, menu);
  };
})

// Modal window with video

let videoBtn = document.querySelector('.js-video');
let videoWindow = document.querySelector('.js-window-video');


videoBtn.addEventListener('click', () => {
  toggleWindow(videoBtn, videoWindow);
})

videoWindow.addEventListener('click', () => {
  toggleWindow(videoBtn, videoWindow);
})