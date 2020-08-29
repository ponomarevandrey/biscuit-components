# How to use

You can populate the menu with items from plain JavaScript object or external JSON file

```pug
div(class="hamburger")
  img(src='./img/biscuit-logo-white.svg' alt='Logo' title='Biscuit' class='img-svg hamburger__logo')
  div(class="hamburger__menu")
  //- 
    you can populate this div with links from JSON file or put your links below manually
    a(class='hamburger__link' href='#about') About
    a(class='hamburger__link' href='store') Store
    a(class='hamburger__link' href='#contacts') Contacts
    a(class='hamburger__link' href='#gallery') Gallery
    a(class='hamburger__link' href='#blog') Blog
```