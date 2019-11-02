# About

Biscuit is a set of starter templates and components, implemented in the form of BEM blocks, for developing websites and apps 

# How to use

I use Biscuit with my webpack project template: https://github.com/ponomarevandrey/webpack-startet-template-for-app 

You can use your own webpack template, in such case you need to:

  - create a new webpack project folder: `new-project`
  - create a folder for storing project blocks, for instance: `new-project/src/blocks`
  - copy global reset file `_reset.scss` and the file with all global SASS variables, mixins and functions `_global.scss` to `new-project/src/blocks`
  - copy folders with components to `new-project/src/blocks` or wherever you think appropriate
  - in `webpack.config.js` import `_global.scss` file in all SASS partials to make global variables, mixins, and function available in every SASS partial. You can do it with the help of `sass-loader` and its `data` property: 
    ```js
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        data:
          '@import "./src/_global.scss";',
        includePaths: [__dirname, 'src'],
      },
    },
    ``` 
  - in `index.js` (webpack entry point): 
    - import `_reset.scss`:
      ```js
      import './src/_reset.scss';
      ```
    - and finally, import components files. For instance:
    ```js
    import './src/blocks/accordion/_accordion.scss';
    import './src/blocks/accordion/accordion.js';
    ```

