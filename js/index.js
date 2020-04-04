"use strict";

var newRegulatedStandard = new AnimatableSection({
  node: document.querySelector(".new-regulated-standard"),
  elementsToAnimate: [
    {
      node: document.querySelectorAll(".head_words-fade-in__text"),
      animationClass: "head_words-fade-in__text_animated"
    },
    {
      node: document.querySelector(".new-regulated-standard__head"),
      animationClass: "new-regulated-standard__head_animated"
    },
    {
      node: document.querySelector(".new-regulated-standard__list"),
      animationClass: "new-regulated-standard__list_animated"
    },
    {
      node: document.querySelector(".new-regulated-standard"),
      animationClass: "new-regulated-standard_animated_bg"
    }
  ]
});

newRegulatedStandard.tryToAnimate();
