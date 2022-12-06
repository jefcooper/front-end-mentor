//
// Global click handler to show/dismiss dropdowns and mobile menu
//
document.addEventListener("click", (evt) => {
  // does the clicked element have a dropdown as a parent
  const parentDropdown = evt.target.closest(".dropdown");

  if (!parentDropdown) {
    // if not, then simply make sure any open dropdowns get dismissed if opened
    uncheckDropdowns();
  }
});

function dropdownClicked(evt) {
  const isExpanded = evt.target.getAttribute("aria-expanded") === "true";
  const dropdownList = evt.target.nextElementSibling;
  console.log(dropdownList);

  if (isExpanded) {
    evt.target.setAttribute("data-state", "closing");
    dropdownList.addEventListener(
      "animationend",
      () => {
        evt.target.setAttribute("aria-expanded", "false");
        evt.target.removeAttribute("data-state");
      },
      { once: true }
    );
  } else {
    evt.target.setAttribute("aria-expanded", "true");
    evt.target.setAttribute("data-state", "open");
  }
  uncheckDropdowns(evt.target);
}

function uncheckDropdowns(target) {
  const allDropdowns = Array.from(document.getElementsByClassName("dropdown"));
  allDropdowns.forEach((el) => {
    if (el !== target) {
      if (el.getAttribute("aria-expanded") === "true") {
        el.setAttribute("data-state", "closing");
        const nextDropdownList = el.nextElementSibling;
        nextDropdownList.addEventListener(
          "animationend",
          () => {
            el.setAttribute("aria-expanded", "false");
            el.removeAttribute("data-state");
          },
          { once: true }
        );
      }
    }
  });
}

function dismissModal(event, el) {
  if (event.target === el) {
    document.getElementById("header-nav__toggle").checked = false;

    // also close all the submenus so it looks good on next open
    uncheckDropdowns();
    hideModal();
  }
}

function showModal() {
  document.body.classList.add("modal");
}

function hideModal() {
  document.body.classList.remove("modal");
  uncheckDropdowns();
}

function selectDropdown(event) {
  uncheckDropdowns(event.target);
}
