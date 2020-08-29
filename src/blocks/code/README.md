# How to use

- inline code:

```pug
code(class='code code_display_inline') console.log( a ) !!!;
```

- block code:

```pug
pre(class='code code_display_block')
  code.
    window.addEventListener( 'load', => {
      console.log('Ready');
    })}
```
