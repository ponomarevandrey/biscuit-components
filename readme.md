# About

**Biscuit Components** is a components library based on BEM methodology and a mobile-first approach, intended for a quick start while developing websites. 

The library provides ready to use BEM blocks and code patterns.

Intended for use with Pug templating engine and SASS preprocessor.

---

  *  `_variables-mixins-and-functions.scss` contains global variables, mixins and functions. It is already imported in every .scss file of the project through `webpack.config.js` (in sass-loader options). This file, `_variables-mixins-and-functions.scss`, makes variables, mixins and functions, declared inside it, available in all SCSS files of the project.
  IMPORTANT: `_variables-mixins-and-functions.scss` should only contain variables, mixins and functions and nothing else(!). Thus when compiled, the entire content of `_variables-mixins-and-functions.scss` 'dissapears', being imported (and compiled into actual CSS) into every SCSS file. More on this: https://github.com/angular/angular-cli/issues/8431#issuecomment-343486059

  * `_reset.scss` is a global css reset
