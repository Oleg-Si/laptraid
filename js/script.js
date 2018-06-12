'use strict';

/* -------------------Filter--------------------- */

var filterButtonMore = document.querySelector('.filter__more');
var filterHideItems = document.querySelectorAll('.filter__item--additional');

if (filterButtonMore !== null) {
  filterButtonMore.addEventListener('click', function () {
    if (filterButtonMore.textContent === 'Показать все') {
      filterButtonMore.textContent = 'Скрыть';
    } else {
      filterButtonMore.textContent = 'Показать все ';
    }
    filterHideItems.forEach(function (item) {
      item.classList.toggle('filter__item--additional-open');
    });
  });
}

/* -------------------CategoryButton--------------------- */

var buttonCategoryList = document.querySelector('.buttonCategoryList');
var buttonCategoryItem = document.querySelector('.buttonCategoryItem');
var buttonCategoryAriaContent = document.querySelector('.page-category__content-items');

if (buttonCategoryItem !== null) {
  buttonCategoryItem.addEventListener('click', function () {
    if (buttonCategoryItem.classList.contains('open')) {} else {
      buttonCategoryItem.classList.add('open');
      buttonCategoryList.classList.remove('open');
      buttonCategoryAriaContent.classList.remove('page-category__content-items--list');
    }
  });

  buttonCategoryList.addEventListener('click', function () {
    if (buttonCategoryList.classList.contains('open')) {} else {
      buttonCategoryList.classList.add('open');
      buttonCategoryItem.classList.remove('open');
      buttonCategoryAriaContent.classList.add('page-category__content-items--list');
    }
  });
}

/* -------------------Menu--------------------- */

var openMenu = document.querySelector('.openMenu');
var closeMenu = document.querySelector('.closeMenu');
var closeNavigation = document.querySelector('.closeNavigation');
var menu = document.querySelector('.mobile-top-menu');
var mainNavigation = document.querySelector('.mobile-main-navigation');
var mainMenu = document.querySelector('.main-menu');
var overlay = document.querySelector('.overlay');
var mainWrapper = document.querySelector('.page-main__wrapper');

openMenu.addEventListener('click', function () {
  mainWrapper.classList.add('page-main__wrapper--open-menu');
  menu.classList.add('mobile-top-menu--open');
  setTimeout(function () {
    overlay.style.display = 'block';
    overlay.style.left = '300px';
  }, 320);
});

closeMenu.addEventListener('click', function () {
  mainWrapper.classList.remove('page-main__wrapper--open-menu');
  menu.classList.remove('mobile-top-menu--open');
  overlay.style.display = 'none';
});

mainMenu.addEventListener('click', function () {
  mainWrapper.classList.add('page-main__wrapper--open-menu');
  mainNavigation.classList.add('mobile-main-navigation--open');
  setTimeout(function () {
    overlay.style.display = 'block';
    overlay.style.left = '300px';
  }, 320);
});

closeNavigation.addEventListener('click', function () {
  mainWrapper.classList.remove('page-main__wrapper--open-menu');
  mainNavigation.classList.remove('mobile-main-navigation--open');
  overlay.style.display = 'none';
});

/* -------------------Slider--------------------- */

$('.single-item').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});

$('.big-banner').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});

$('.small-banner').slick({
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});

$('.slider1').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  margin: 55,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});

$('.slider2').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  margin: 55,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3,
      margin: 20
    },
    1200: {
      items: 4,
      margin: 55
    }
  }
});
