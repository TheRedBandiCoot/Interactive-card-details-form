# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Installation Guide](#installation-guide)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Installation Guide

1. Clone the repository in your local IDE using this code in your terminal :

```git
git clone https://github.com/TheRedBandiCoot/Interactive-card-details-form.git
```

2. After successfully get the files in your local IDE go to the new directory _Interactive-card-details-form_

   - `cd Interactive-card-details-form`

3. Now run this code for install dependencies and running the app at the same time.

   - `npm install && npm run dev`
   - In case if you got some error for installation or run it, you can run `npm install` and `npm run dev` separately

4. Now click the link which is provided in your terminal or you can write the url manually in your browser

   - [LocalHost-(url)](http://localhost:3000)
   - You can also press `o` in your in the terminal for open the url automatically in your browser.

5. Press `ctrl + c` or `q` in your terminal to close the server.

6. You can also change the server _port_ configuration

   - Open `vite-config.js`
   - Right after the plugin, add another obj called `server`
   - Create a property called `port` in your server & add value for your port.

   > Here is the code

   ```js
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 5000,
     },
   });
   ```

   - Make sure to restart the server by pressing `r` in your terminal for new changes.

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Interactive-card-details-form](https://i.ibb.co/NtMmXQ1/Screenshot-1.png)

### Links

- Solution URL: [check here🔗](https://github.com/TheRedBandiCoot/Interactive-card-details-form.git)
- Live Site URL: [check here🔗](https://interactive-atm-card-details-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [vite](https://vitejs.dev/)
  - Vite.js is a development tool that comes with a dev server and is used for modern web applications.
  - It offers a faster and smoother workflow in terms of development.

### What I learned

- Tried to create a input box for credit card entering feature. How hard that can be if you know _`regex`_ (honestly it took some minutes with _`regex`_) but with normal JS to create that feature you have to put way more logic than you thought. Yes there so many _`react provided library`_ also there to help you out for solving the issue.
- Using _`“min”`_ _`“max”`_ in Input box in html.
- Use the _`onFocus`_ and _`onBlur`_ events in React to handle focus and blur events on elements.
- Also learned that these events are equivalent to the native _`focusin`_ and _`focusout`_ events, but they are normalized to bubble in React.
- A _`ternary operator`_ inside the style prop of an element to conditionally apply inline styles.
- Learned that an _`empty object in the style prop means no inline styles are applied to the element`_.
- How to style the _`placeholder text in an input box using CSS`_.
- Learned that I can use the `::placeholder` pseudo-element selector to apply different styles to the placeholder text than the input text.
- Also learned how to create a floating label effect for my input box, where the placeholder text moves above the input field on focus.
- How to use an input box followed by a label element, and use the `adjacent element selector (+)` to style the label based on the input state.
- Responsiveness design.

### Useful resources

- [Regular expressions - JavaScript | MDN](https://www.bing.com/search?pglt=169&q=regex+js&cvid=1da9c08f5cc7490a84c212d78639f5d9&aqs=edge..69i57j0l8.1863j0j1&FORM=ANNTA1&PC=U531)
- [HTML input min-max Attribute](https://www.w3schools.com/tags/att_input_min.asp)
- [React hook - onFocus and onBlur](https://stackoverflow.com/questions/64525916/react-hook-onfocus-and-onblur)
- [Bing AI ChatBot](https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx)
- [Custom-Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React-Spring](https://www.react-spring.dev/)
- [React 18 Tutorials By Codding Addict](https://youtu.be/Flbw5BX_AX0)

## Author

- Github - [TheRedBandiCoot](https://github.com/TheRedBandiCoot)
- Frontend Mentor - [@TheRedBandiCoot](https://www.frontendmentor.io/profile/TheRedBandiCoot)
- Twitter - [@subho19996](https://twitter.com/subho19996)
