document.addEventListener("click", (evt) => {
  console.log(evt);
  const nearest = evt.target.closest(".dropdown");
  console.log(nearest);
  if (!nearest) {
    uncheckDropdowns();
  }
});

function uncheckDropdowns(target) {
  const dropdowns = Array.from(
    document.getElementsByClassName("dropdown__toggle")
  );
  dropdowns.forEach((el) => {
    if (el !== target) {
      el.checked = false;
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
