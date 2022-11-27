# Frontend Mentor - Product Preview Card Component Solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- Solution URL: [github.com repository](https://github.com/jefcooper/front-end-mentor/tree/main/product-preview-card-component-main)
- Live Site URL: [github pages](https://jefcooper.github.io/front-end-mentor/product-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was a relatively easy challenge.  As well, I watched Kevin Powell's excellent Youtube video where he walked through this challenge.

I found this challenge to be a good opportunity to focus on organizing my CSS since the quantity is small and easier to work with.

The picture element tripped me up for a little bit.  I was getting 3px bottom margin on the image when there was no such thing in the html or css.  Turns out, I had styled the ```<img>``` with *inline-block* thinking it was equivalent to *block*.  But this was the source of the problem.  After changing the img to *block*, the nuiscance white line at the bottom of my image went away.

### Useful resources

[Kevin Powell, Youtube walkthrough](https://www.youtube.com/watch?v=B2WL6KkqhLQ)

## Author

- Website - [Jeff Cooper](https://jefcooper.github.io)
- Frontend Mentor - [@jefcooper](https://www.frontendmentor.io/profile/jefcooper)
