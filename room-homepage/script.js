const carousel1 = document.getElementById("carousel--1");

let scrollTimeout;

carousel1.addEventListener("scroll", (evt) => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
    delete scrollTimeout;
  }
  scrollTimeout = setTimeout(() => {
    console.log("scrolling happened");
  }, 250);
});
