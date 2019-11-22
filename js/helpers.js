if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function isInViewport(element) {
  var box = element.getBoundingClientRect();

  return (
    box.top >= 0 &&
    box.left >= 0 &&
    box.bottom <= document.documentElement.clientHeight &&
    box.right <= document.documentElement.clientWidth
  );
}
