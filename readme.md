# WebDevStudios Coding Standards

WebDevStudios in-house JavaScript linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Leadership

- __Aubrey Portwood (Senior BED Developer)__
    + Writes & Integrates Coding Standards/Maintains Standards
- __Greg Rickaby (Director of Engineering)__
    + High level Approval / Leadership

## Installation

`npm install git://git@github.com:WebDevStudios/js-coding-standards.git#1.0.0-alpha1 --save-dev`

Because of an issue with `npm` not respecting the version of `eslint` we need, you have to also:

`npm install eslint@1.0.0-alpha1 --save-dev`

### Projects

To use our coding standards in your project, in your `.eslintrc.js` file include:

```js
module.exports = {
    "extends": "@webdevstudios/js-coding-standards"
}
```

## 1.0.0-alpha1

- Working version that uses the eslint-custom plugin correctly
