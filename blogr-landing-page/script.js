const dropdownToggle = (e) => {
  let target = e || {};
  const currentId = target.id;

  if (target.checked || !e) {
    const elements = Array.from(document.querySelectorAll(".dropdown__toggle"));
    elements.forEach((em) => {
      if (em.id !== currentId) {
        em.checked = false;
      }
    });
  }
};
