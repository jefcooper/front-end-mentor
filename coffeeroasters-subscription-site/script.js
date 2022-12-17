let coffeeOptions = {};

function headerNavMenuClicked(evt) {
  console.log("headerNavMenuClicked");
  const menuButton = evt.target.closest(".menu__toggle");
  const menu = evt.target.closest(".menu");

  const isOpen = menuButton.getAttribute("data-state") === "open";

  if (isOpen) {
    closeMenu(evt);
  } else {
    // add modal to body
    document.body.classList.add("modal");

    // set data-state to open
    menuButton.setAttribute("data-state", "open");

    // set aria-expanded to true
    menuButton.setAttribute("aira-expanded", "true");
  }
  evt.preventDefault();
  evt.stopPropagation();
}

function closeMenu(evt) {
  let menuButton;

  if (evt && evt.target.classList.contains(".menu__toggle")) {
    menuButton = evt.target.closest(".menu__toggle");
  } else {
    menuButton = document.querySelector(".menu__toggle");
  }

  // remove modal from body
  document.body.classList.remove("modal");

  // set data-state to closing
  menuButton.setAttribute("data-state", "closing");

  // set aria-expanded to false
  menuButton.setAttribute("aria-expanded", "false");

  // register event handler for animationend
  // TODO - when animation added
}

function coffeeOption(evt, category, selection) {
  const option = evt.target.closest(".accordion__option");
  const accordion = evt.target.closest(".accordion");

  if (option.classList.contains("accordion__option--selected")) {
    // if we're de-selecting, then remove from dictionary
    delete coffeeOptions[category];
    option.classList.remove("accordion__option--selected");
  } else {
    // if we're selecting, set selected and add to dictionary
    coffeeOptions[category] = selection;
    option.classList.add("accordion__option--selected");
  }
  // for all other options under this accordion, de-select them
  Array.from(accordion.children).forEach((element) => {
    if (element !== option) {
      element.classList.remove("accordion__option--selected");
    }
  });
}

function accordionClick(evt) {
  const accordion = evt.target.closest(".accordion");

  if (accordion) {
    if (accordion.getAttribute("aria-expanded") === "true") {
      accordion.setAttribute("aria-expanded", "false");
    } else {
      accordion.setAttribute("aria-expanded", "true");
    }
  }
}
