const toggleModal = (el) => {
  if (el.checked) {
    document.body.classList.add("modal");
  } else {
    document.body.classList.remove("modal");
  }
};
