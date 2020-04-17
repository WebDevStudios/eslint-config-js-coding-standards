<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

# WebDevStudios ESLint Config for JavaScript Coding Standards

## How to Install

Install [`@webdevstudios/js-coding-standards`](https://github.com/WebDevStudios/js-coding-standards)

__________

# Changelog

## NEXT

- Require consistent comma spacing, even in Arrays <sup>[comma-spacing](https://eslint.org/docs/rules/comma-spacing], [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Require proper brace style, see notes below <sup>[brace-style](https://eslint.org/docs/rules/brace-style), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Require spaces e.g. `if()` is invalid, `if ()` is valid <sup>[rules/space-after-keywords](https://eslint.org/docs/rules/space-after-keywords), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Require math to have spaces, e.g. 2+2 is invalid, but 2 + 2 is valid <sup>[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Disallow spaces between function names and call, e.g. `myFunc ()` is invalid <sup>[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Require spavcs in parens <sup>[space-in-parens](https://eslint.org/docs/rules/space-in-parens), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Don't allow multi spaces <sup>[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Do not allow spaces before function call, e.g. `function ()` is invalid <sup>[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing), [PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/20)</sup>
- Bump acorn from 7.1.0 to 7.1.1 <sup>[PR](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/14)</sup>

### Note on brace style

#### Correct:

```js
function bar() {
    return true;
}
```

#### Incorrect:

```js
function foo()
{
    return true;
}

function baz()
{
    return false;
}

if ( foo() ) {
    bar();
}
else {
    baz();
}
```

## 1.0.1

- Allow arrow functions <sup>[PR:#12](https://github.com/WebDevStudios/eslint-config-js-coding-standards/pull/12)</sup>

## 1.0.0

- Stable release
- Require [`@webdevstudios/eslint-plugin-js-coding-standards@~1.0.0` ](https://github.com/WebDevStudios/eslint-plugin-js-coding-standards/tree/1.0.0)

## 1.0.0-beta2

- Ready to publish on npmjs.org
- Updates to README and `package.json`
- Require `eslint@~6.1.0` and `@wordpress/eslint-plugin@~2.3.0` for minor updates allowed
- Moved from https://github.com/WebDevStudios/js-coding-standards to https://github.com/WebDevStudios/eslint-config-js-coding-standards so that the package name we're forced to use won't be confusing

## 1.0.0-beta1

- Now requiring public package `@webdevstudios/eslint-plugin-js-coding-standards`
- Removed error for `@wordpress/dependency-group` rule
- Working beta state the replicates JS from [WDS-Coding-Standards](https://github.com/WebDevStudios/WDS-Coding-Standards) with `@wordpress/eslint-plugin`

## 1.0.0-alpha1

- Working version that uses the eslint-custom plugin correctly
