# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Screenshot

![TBD](./screenshot.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/jefcooper/front-end-mentor/tree/main/coffeeroasters-subscription-site)
- Live Site URL: [Github Pages Site](https://jefcooper.github.io/front-end-mentor/coffeeroasters-subscription-site/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is a larger challenge than others I have completed.  Time, task management and motivation to finish all become factors.

The Technical

- Ball and Line illustration went through multiple iterations before landing on a pure CSS solution separating the balls from the line as background element.  The deciding factor was aligning the balls to the grid.  To do this the balls needed to be inside grid cells.  The background line, likewise had to be aligned across multiple grid cells underneath the same cells as the balls.

- The dark backgrounds in the plan and about pages presented subtle challenges.  The bitmaps fade slightly from left-to-right such that a background repeat shows a line.  background: cover was needed to prevent this.

- Fraunces 9pt is used as the display font in the Figma design.  This is not one of the built-in Figma fonts (at least not on the Mac version), but Fraunces Black is.  The 9pt variant is ever so slightly different and yields width differences.  This led to the addition of letter-spacing on nearly every heading to match the original design.

- Changing the text of the order was done by setting the innerHTML of the heading or span node as required.  I didn't use any frameworks for this, although in times past I've used jquery, but it seemed heavy since I didn't have much DOM manipulation to do here, so kept it to pure JS.

- svg images were altered for social icons, and logo.  Used vercel's svg sprite site (https://svg-sprite-generator.vercel.app/) to create a single svg file where fill can be overridden in css.

- the logo svg required manual intervention because simply removing all fill removes the green of the beans.  For this I used a CSS variable to add a replacable color with overrid.

```css
fill="var(--_clr-green, hsl(179, 81%, 29%))" 
```

- CSS variables were also used for a configurable container class.  This allowed for easily modifying the margin for different breakpoints as required by the design.

```css
.container {
  --_container-margin: 1.5rem; /* mobile is default */
  --_container-max-width: 1280px; /* desktop max width */

  max-width: var(--_container-max-width);
  margin-inline: max(
    50vw - var(--_container-max-width) / 2,
    var(--_container-margin)
  );
}
```

### Continued development


### Useful resources


## Author

- Website - [Jeff Cooper](https://jefcooper.github.io)
- Frontend Mentor - [@jefcooper](https://www.frontendmentor.io/profile/jefcooper)


