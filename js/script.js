'use strict';

var openMenu = document.querySelector('.openMenu');
var closeMenu = document.querySelector('.closeMenu');
var closeNavigation = document.querySelector('.closeNavigation');
var menu = document.querySelector('.mobile-top-menu');
var mainNavigation = document.querySelector('.mobile-main-navigation');
var mainMenu = document.querySelector('.main-menu');
var overlay = document.querySelector('.overlay');
var mainWrapper = document.querySelector('.page-main__wrapper');

openMenu.addEventListener('click', function() {
  mainWrapper.classList.add('page-main__wrapper--open-menu');
  menu.classList.add('mobile-top-menu--open');
  setTimeout(function() {
    overlay.style.display = 'block';
    overlay.style.left = '300px';
  }, 320);
});

closeMenu.addEventListener('click', function() {
  mainWrapper.classList.remove('page-main__wrapper--open-menu');
  menu.classList.remove('mobile-top-menu--open');
  overlay.style.display = 'none';
});

mainMenu.addEventListener('click', function() {
  mainWrapper.classList.add('page-main__wrapper--open-menu');
  mainNavigation.classList.add('mobile-main-navigation--open');
  setTimeout(function() {
    overlay.style.display = 'block';
    overlay.style.left = '300px';
  }, 320);
});

closeNavigation.addEventListener('click', function() {
  mainWrapper.classList.remove('page-main__wrapper--open-menu');
  mainNavigation.classList.remove('mobile-main-navigation--open');
  overlay.style.display = 'none';
});

$('.single-item').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
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
