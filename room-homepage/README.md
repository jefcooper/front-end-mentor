# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

#### Notes:

- The top-half must be aligned with the bottom-half vertical boundaries. This implies that all elements are in a single grid rather than two sections.
- 4 column x 2 row grid

Desktop

```
A A B B
C D D E
```

Mobile

```
A
B
C
D
E
```

- A Image Carousel
- B Description Carousel (note that A and B are synchronized)
- C Dark Room image
- D About card
- E Light Room image

- Should do a Tablet breakpoint where the menu is desktop and the rest is mobile layout.
- The carousel controls go at start of B, but span the third column which is sized for them (in desktop).
- In mobile, the carousel controls are bottom-right of A.
- Automatic movement of the carousel at an interval, say 5 seconds to ensure that viewers see more images (omitted this as it was annoying).
- The grid leads to the use of two separate carousel strips, one for the images, the other for the text cards both coordinated by the buttons.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/jefcooper/front-end-mentor/tree/main/room-homepage)
- Live Site URL: [Github Pages Site](https://jefcooper.github.io/front-end-mentor/room-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- the grid layout was tricky to get right with the correct columns resizing at each breakpoint.
- grid-area
- calculated image width for optimal viewing with responsive resizing
- scrollTimeoutListener
- scrollBy
- scrollTo

### Continued development

- carousels seem very difficult with accessibility. At present, I don't have a good handle on how to represent them.
- I made the scroll buttons reachable by keyboard, but the headings on off screen content are not hidden from screen readers. Maybe this is a good thing since it's challenging to scroll the carousel with screen reader, but reaching the other content without scrolling would be automatic with SR.

### Useful resources

## Author

- Website - [Jeff Cooper](https://jefcooper.github.io)
- Frontend Mentor - [@jefcooper](https://www.frontendmentor.io/profile/jefcooper)

## Acknowledgments
