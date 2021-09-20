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
  let menuIsOpen = event.currentTarget.classList.contains('active');
  let overlay = !event.target.closest('.page-menu');

  if ((menuIsOpen && link) || (menuIsOpen && overlay)) {
    toggleWindow(hamb, event.currentTarget);
  };
})

console.log(`1. верстка валидная (+10)
2. верстка семантическая, больше 10 тегов (+20)
3. для оформления СV используются css-стили (+10)
4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы (+10)
5. вёрстка адаптивная до 320px (+10)
6. адаптивное бургер-меню (+10)
7. есть аватарка, alt тоже (+10)
8. контакты для связи и перечень навыков в виде ul>li (+10)
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (+10)
10. CV содержит пример кода с подсветкой (+10)
11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий (+10)
12. CV выполнено на английском языке (+10)
13. выполнены требования к Pull Request: https://github.com/astarta-mumu/rsschool-cv/pull/3 (+10)
14. видеорезюме (0)
15. оформление (+10)

Итого: 150/160`);