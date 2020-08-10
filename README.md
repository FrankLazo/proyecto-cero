# My first project

## Summary

This is my first project about web-development for github. It is based on online course by [Dorian Designs](https://www.youtube.com/playlist?list=PLROIqh_5RZeAVD9mafd0MKTCe8g6DtpZA). This is a front-end project with many web technologies like **HTML5**, **CSS3**, **JavaScript**, **Pug**, **Sass**, **Git** and so on.

In this file, you will find a summary about the order of development process and likely some tips about that.

If you are starting in this awesome job, I hope this project will be useful for you.

## Index

- [Design]()

## Design

First of all, it is very important have a graphic idea about what you want to do. There are some levels of web design:
- **Wireframes**: the structure of the website with simple lines, without details or colors, just the content in general terms. You can make it on paper or use a software like [Balsamiq](https://balsamiq.com/) or [Adobe Photoshop](https://www.adobe.com/la/products/photoshop.html). (See the design folder)
- **Mockups**: the website showing its brand colors and layout. Some general images, icons and text. You can use any software like Adobe Photoshop, [Adobe Illustrator](https://www.adobe.com/la/products/illustrator/free-trial-download.html), [Adobe XD](https://www.adobe.com/la/products/xd.html) or [Figma](https://www.figma.com/).
- **Prototype**: includes functionality like click on links or buttons and an appearance very similar to the final product. It will be use for testing and model for the developers. You can use the same softwares for mockups and if you like photoshop or illustrator, you can combine them with [Invision](https://www.invisionapp.com/).

## Install tools

Install [Node.js](https://nodejs.org/es/) (LTS Version) and verify version:
```
node --version
npm --version
```
Install [Gulp](https://gulpjs.com/) globally:
```
npm install -g gulp-cli
```

## Install Dependencies

Install [Gulp](https://gulpjs.com/) locally:
```
npm install --save-dev gulp
```

Install [Babel](https://babeljs.io/) for convert ECMAScript 2015+ code into a backwards compatible version of JavaScript:
```
npm install --save-dev @babel/core @babel/register @babel/preset-env
```

```
npm install --save-dev gulp-babel
npm install --save-dev gulp-terser
npm install --save-dev gulp-concat
```