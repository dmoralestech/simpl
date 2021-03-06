'use strict';

var img = document.querySelector('img');
var imgSrc = document.querySelector('#imgSrc');
var imgNaturalWidth = document.querySelector('#imgNaturalWidth');
var imgWidth = document.querySelector('#imgWidth');

var dpr = document.querySelector('#devicePixelRatio');
var minimumWidth = document.querySelector('#minimumWidth');
var viewportWidth = document.querySelector('#viewportWidth');
var availableWidth = document.querySelector('#availableWidth');

function displayData() {
  imgSrc.innerHTML = '<a href="' + img.currentSrc + '">' +
    img.currentSrc.replace(/^.*[\\\/]/, '') + '</a>';
  imgNaturalWidth.textContent = img.naturalWidth;
  imgWidth.textContent = img.width;
  if (window.devicePixelRatio) {
    dpr.textContent = window.devicePixelRatio;
    minimumWidth.textContent = img.width * window.devicePixelRatio;
  } else {
    dpr.textContent = minimumWidth.textContent = 'undefined';
  }

  viewportWidth.textContent = document.documentElement.clientWidth;
  availableWidth.textContent = window.screen.availWidth;
}

img.onload = window.onresize = displayData;

// in case image already loaded -- is there a better way?
displayData();
