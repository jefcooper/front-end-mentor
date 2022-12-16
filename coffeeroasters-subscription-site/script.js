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
