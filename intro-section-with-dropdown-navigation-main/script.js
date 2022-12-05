document.addEventListener("click", (evt) => {
  const nearest = evt.target.closest(".dropdown");
  if (!nearest) {
    uncheckDropdowns();
  } else {
    console.log(nearest);
    console.log(nearest.attributes["aria-expanded"]?.value);

    if (nearest.hasAttribute("aria-expanded")) {
      const isExpanded = nearest.attributes["aria-expanded"].value === "true";
      if (isExpanded) {
        nearest.attributes["aria-expanded"].value = "false";
      } else {
        nearest.attributes["aria-expanded"].value = "true";
      }
      evt.preventDefault();
      evt.stopPropagation();
      uncheckDropdowns(nearest);
    }
  }
});

function uncheckDropdowns(target) {
  const dropdowns = Array.from(document.getElementsByClassName("dropdown"));
  dropdowns.forEach((el) => {
    if (el !== target) {
      el.attributes["aria-expanded"].value = "false";
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
