//
// Global click handler to show/dismiss dropdowns and mobile menu
//
document.addEventListener("click", (evt) => {
  // does the clicked element have a dropdown as a parent
  const nearest = evt.target.closest(".dropdown");

  if (!nearest) {
    // if not, then simply make sure any open dropdowns get dismissed if opened
    uncheckDropdowns();
  } else {
    // otherwise, we need to toggle the dropdown menu
    const isExpanded = nearest.attributes["aria-expanded"]?.value === "true";

    if (isExpanded) {
      //nearest.attributes["aria-expanded"].value = "false";
      nearest.setAttribute("aria-expanded", false);
    } else {
      nearest.setAttribute("aria-expanded", true);
      //nearest.attributes["aria-expanded"].value = "true";
    }
    evt.preventDefault();
    evt.stopPropagation();
    uncheckDropdowns(nearest);
  }
});

function uncheckDropdowns(target) {
  const dropdowns = Array.from(document.getElementsByClassName("dropdown"));
  dropdowns.forEach((el) => {
    if (el !== target) {
      el.setAttribute("aria-expanded", false);
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
