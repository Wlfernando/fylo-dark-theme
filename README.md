# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page (these are found in the buttons, links in header, "see how fylo work", and footer)

- I implement a toaster to confirm the email
- The user will receive an automatic email if he/she share correctly his/her email address.

### Screenshot

![desktop page](./public/Screenshot%202024-10-28%20at%2013-44-22%20Fylo%20dark%20theme%20landing%20page.png)
![mobile page](./public/Screenshot%202024-10-28%20at%2013-45-28%20Fylo%20dark%20theme%20landing%20page.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- CSS BEM

### What I learned

I learn how to use only one p element to break a line with *white-space: pre-line*
```html
text={`Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. \n\nSecurely share files and folders with friends, family and colleagues for live collaboration. No emails attachments required.`}
```
```css
.black-board__txt {
    font-size: var(--step-0);
    line-height: 1.5;
    white-space: pre-line;
  }
```

I use a little js to track the height of the "Hero" component and modify the background gradient height:
```js
  useEffect(() => {
    const hero = heroRef.current!
    const main = landingPageRef.current!
    const setHeroSize = () => main.style.setProperty('--heights-hero', `${hero.offsetHeight}px`)
    
    setHeroSize()
    window.onresize = setHeroSize
  }, [])
```

I improve my skills with flex-box using less media-queries.

I'm using an API to send emails to whoever wants to share their email in the section Get early access today. This is the first time I do it. The API is [Emailjs](emailjs.com).

### Continued development

This porject encorage me to implement a Intersection Observer. I would implement it here but need to read how to use the API.

### Useful resources

- [EmailJs](emailjs.com) - With this resource I send an automatic email.
- [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) - Here is where I read how to implement the property with "\n".
- [env](https://vite.dev/guide/env-and-mode) - I already used env varaibles but this is the first time in Vite.

## Author

- Website - [Fernando Alcázar Malfavón](https://github.com/Wlfernando)
- Frontend Mentor - [Fernando A. Malfavón](https://www.frontendmentor.io/profile/Wlfernando)
- LinkedIn - [Fernando Alcázar Malfavón](https://www.linkedin.com/in/fernando-alc%C3%A1zar-malfav%C3%B3n-44b536262/)
