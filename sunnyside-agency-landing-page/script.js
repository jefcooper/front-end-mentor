const toggleModal = (el) => {
  const inputEl = document.getElementById("header-nav__toggle");
  if (!!el) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
    inputEl.checked = false;
  }
};
