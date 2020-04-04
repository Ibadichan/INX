"use strict";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function isInViewport(element) {
  // fix this method if section is overflowed
  var box = element.getBoundingClientRect();

  return (
    box.top >= 0 &&
    box.left >= 0 &&
    box.bottom <= document.documentElement.clientHeight &&
    box.right <= document.documentElement.clientWidth
  );
}

function getWindowSize() {
  var height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  var width = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );

  return {
    height: height,
    width: width
  };
}

function emToPx(em) {
  var fontSize = window
    .getComputedStyle(document.body, null)
    .getPropertyValue("font-size");
  var px = parseFloat(fontSize) * em;
  return px;
}
