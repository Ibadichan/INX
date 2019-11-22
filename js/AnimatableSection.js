function AnimatableSection(props) {
  var self = this;
  self.node = props.node;
  self.elementsToAnimate = props.elementsToAnimate;

  self.tryToAnimate = function() {
    if (isInViewport(self.node)) {
      var node, animationClass;

      self.elementsToAnimate.forEach(function(element) {
        node = element.node;
        animationClass = element.animationClass;

        if (node.forEach) {
          var innerElements = node;

          innerElements.forEach(function(innerElement) {
            innerElement.classList.add(animationClass);
          });
        } else {
          node.classList.add(animationClass);
        }
      });

      window.removeEventListener("scroll", self.tryToAnimate);
    }
  };

  window.addEventListener("scroll", self.tryToAnimate);
}
