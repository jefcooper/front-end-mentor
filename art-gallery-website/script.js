/* data-text-before

   add this data attribute to any element and it will be populated with
   the innerText of the specified element.  This can be used to create
   custom effects on text elements that require access to the text in
   a psueudo element class.
*/
Array.from(document.querySelectorAll("[data-text-before]")).forEach((el) => {
  el.setAttribute("data-text-before", el.innerText);
});
