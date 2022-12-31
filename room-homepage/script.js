const carousel1 = document.getElementById("carousel--1");
const carousel2 = document.getElementById("carousel--2");

const carouselLeft = document.getElementById("carousel__left");
const carouselRight = document.getElementById("carousel__right");

carousel1.addEventListener("scroll", scrollTimeoutListener());
carousel2.addEventListener("scroll", scrollTimeoutListener());

carouselLeft.addEventListener("click", (evt) => {
  carousel1.scrollBy(-400, 0);
});

carouselRight.addEventListener("click", (evt) => {
  carousel1.scrollBy(400, 0);
});

function scrollTimeoutListener() {
  let scrollTimeout;

  return (evt) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
      delete scrollTimeout;
    }
    scrollTimeout = setTimeout(() => {
      console.log("scrolling happened");
      console.log(evt.target.scrollLeft + ":" + evt.target.scrollWidth);
      const scrollFraction = evt.target.scrollLeft / evt.target.scrollWidth;
      console.log("fraction: " + scrollFraction);
      console.log(evt);

      // scroll the other element to match
      if (evt.target !== carousel1) {
        console.log("scroll carousel 1");
        carousel1.scrollTo({
          left: scrollFraction * carousel1.scrollWidth,
          behavior: "instant",
        });
      } else if (evt.target !== carousel2) {
        console.log("scroll carousel 2");
        carousel2.scrollTo({
          left: scrollFraction * carousel2.scrollWidth,
          behavior: "instant",
        });
      }
    }, 250);
  };
}
