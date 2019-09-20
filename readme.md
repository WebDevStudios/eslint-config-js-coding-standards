# WebDevStudios JavaScript Coding Standards

WebDevStudios in-house JavaScript linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Leadership

- [Aubrey Portwood](https://github.com/aubreypwd) - Project Lead
- [Greg Rickaby](https://github.com/gregrickaby) - Director of Engineering

## Installation

NPM

`npm install git://git@github.com:WebDevStudios/js-coding-standards.git#1.0.0-beta1 --save-dev`

Yarn

`yarn add git@github.com:WebDevStudios/js-coding-standards.git --dev`

### Projects

To use our coding standards in your project, in your `.eslintrc.js` file include:

```js
module.exports = {
    "extends": "@webdevstudios/js-coding-standards"
}
```

__________

# Changelog

## 1.0.0-beta1

- Removed error for `@wordpress/dependency-group` rule
- Working beta state the replicates JS from [WDS-Coding-Standards](https://github.com/WebDevStudios/WDS-Coding-Standards) with `@wordpress/eslint-plugin`

## 1.0.0-alpha1

- Working version that uses the eslint-custom plugin correctly
