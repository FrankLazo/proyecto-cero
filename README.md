# My first project

## Summary

This is my first project about web-development for github. It is based on online course by [Dorian Designs]. This is a front-end project with the most popular web technologies like **HTML5**, **CSS3**, **JavaScript**, **Pug**, **Sass**, **Git** and so on.

In this file, you will find a summary about the order of development process and likely some tips about that.

If you are starting in this awesome job, I hope this project will be useful for you. Thanks for reading and enjoy! :)

## Index

- [Design](#design)
- [Global installations](#global-installations)
- [Project folders and Github](#project-folders-and-github)
- [Dependencies](#dependencies)

---

## Design

First of all, it is very important have a graphic idea about what you want to do. There are some levels of web design:
- **Wireframes**: the structure of the website with simple lines, without details or colors (maybe gray colors), just the content in general terms. You can make it on [paper] (recommended for starting) or use a software like [Balsamiq] or [Photoshop]. (See the design folder)
- **Mockups**: the website with its brand colors and layout. Some general images, icons and text. You can use any software like [Photoshop], [Illustrator], [XD] or [Figma].
- **Prototype**: includes functionality like click on links or buttons and an very similar appearance to the final product. This is the user interface (UI). Finally, it will be used for testing the user experience (UX) and a guide for the front-end developers. You can use the same softwares for mockups like [XD] or [Figma] but if you like [Photoshop] or [Illustrator], you should complement them with [Invision].

This is a fast and simple project, for that, you will not find mockups or prototypes.

[Index]

---

## Global installations

[Node.js] LTS Version, npm and [Git].
```
node --version
npm  --version
git  --version
```
[Gulp], [Pug] and [Sass].
```
npm install -g gulp-cli
npm install -g pug
npm install -g sass
```
```
npm gulp --version
npm pug  --version
npm sass --version
```

[Index]

---

## Project folders and Github

Create **Project** folders, **README** and **.gitignore** files.
Include **.gitkeep** in void folders.
```
project/
|
|_ dist/
|   |_ assets/
|   |   |_ img/
|   |       |_ gallery/
|   |       |_ logo.svg
|   |       |_ favicon.ico
|   |
|_ src/
|   |_ js/
|   |
|   |_ sass/
|   |   |_ base/
|   |   |   |_ normalize.sass
|   |   |_ blocks/
|   |   |_ config/
|   |   |_ helpers/
|   |   |_ mixins/
|   |   |_ pages/
|   |   |_ styles.sass
|   |
|   |_ views/
|       |_ config/
|       |_ includes/
|       |_ pages/
|       |_ templates/
|
|_ .babelrc
|_ .browserslistrc
|_ .gitignore
|_ .gulpfile.babel.js
|_ README.md
```
Use **Git** and [Github].
```
git init
git add .
git status
git config --global user.mail "example@email.com"
git config --global user.name "user names"
git commit -m "Comments"
```
```
git remote add origin <"link to github repository">
git push -u origin <branch>
```

[Index]

---

## Dependencies

Start **npm** ( package.json ).
```
npm init -y
```
[Gulp].
```
npm install --save-dev gulp
```
Install [Babel](https://babeljs.io/) for convert ECMAScript 2015+ code into a backwards compatible version of JavaScript:
```
npm install --save-dev @babel/core @babel/register @babel/preset-env
```
For JavaScript:
```
npm install --save-dev gulp-babel
npm install --save-dev gulp-terser
npm install --save-dev gulp-concat
```
For HTML and CSS:
```
npm install --save-dev gulp-htmlmin
npm install --save-dev gulp-postcss cssnano autoprefixer
```
For Pug and Sass:
```
npm install --save-dev gulp-pug
npm install --save-dev gulp-sass
npm install --save-dev gulp-purgecss
npm install --save-dev gulp-cache-bust
```
Extra tools:
```
npm install --save-dev gulp-imagemin
npm install --save-dev gulp-browser-sync
npm install --save-dev gulp-plumber
```

[Index]

<!-- Links -->
[Index]: #index
[Dorian Designs]: https://www.youtube.com/playlist?list=PLROIqh_5RZeAVD9mafd0MKTCe8g6DtpZA

[Paper]: https://www.google.com/search?q=wireframe+on+paper
[Balsamiq]: https://balsamiq.com/
[Photoshop]: https://www.adobe.com/la/products/photoshop.html
[Illustrator]: https://www.adobe.com/la/products/illustrator/free-trial-download.html
[XD]: https://www.adobe.com/la/products/xd.html
[Figma]: https://www.figma.com/
[Invision]: https://www.invisionapp.com/

[Node.js]: https://nodejs.org/es/
[Git]: https://git-scm.com/
[Gulp]: https://gulpjs.com/
[Pug]: https://pugjs.org/api/getting-started.html
[Sass]: https://sass-lang.com/install

[Github]: https://github.com/