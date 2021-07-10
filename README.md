# A JavaScript Counter

This is a program written with HTML, CSS and JavaScript to build a Counter with minimum value of 0 and maximum value of 50.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Click on the buttons provided and the counter either adds count or lower count.

### Screenshot

![Web capture_10-7-2021_35425_](https://user-images.githubusercontent.com/71822355/125149815-18561680-e0f0-11eb-9212-35605a69c438.jpeg)

### Links
- Solution URL: [JavaScript Counter](https://ajavascriptcounter.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

What I learned writing this program was in JavaScript when trying to set the minimum value. When I did this, I always got -1 as the minimum value. 

```js
button2.addEventListener("click", function() {
  textHolder.innerHTML = --CounterNumber;
  if(CounterNumber <= -1 ){
    CounterNumber = 0;
}
});
```

But after much brainstorming on to make the minimum 0, I finally found out that then I tell my JavaScript this:


```js
  if(CounterNumber <= -1 ){
    CounterNumber = 0;
}
```
The output gets decremented because of this statement:

```js
button2.addEventListener("click", function() {
```

So, I changed the values and made it like this:

```js
button2.addEventListener("click", function() {
  textHolder.innerHTML = --CounterNumber;
  if(CounterNumber <= 0 ){
    CounterNumber = 1;
}
});
```
So when decremented the output is 0.

### Continued development

I was to continue focusing on the CSS and when I’m close to perfect, I focus on JavaScript because I’m still not comfortable with some features.


