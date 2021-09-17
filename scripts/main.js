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
  document.body.classList.toggle('no-scroll');
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
let video = videoWindow.querySelector('.player__video');
let videoSource = 'https://www.youtube.com/embed/HwQs8Jdv1LA';


videoBtn.addEventListener('click', (event) => {
  video.setAttribute('src', videoSource);
  toggleWindow(event.currentTarget, videoWindow);
})

videoWindow.addEventListener('click', (event) => {
  video.removeAttribute('src');
  toggleWindow(videoBtn, event.currentTarget);
})