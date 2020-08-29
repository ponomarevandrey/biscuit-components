# How to use

In `.pug`:

```pug
//- preview gallery
section(class='lightbox-preview')
  div(class='lightbox-preview__item')
    img(class='lightbox-preview__thumbnail' data-lightbox='lightbox-image0' src='./src/_img/lightbox-img1-preview.jpg' alt='Short image description')
  div(class='lightbox-preview__item')
    img(class='lightbox-preview__thumbnail' data-lightbox='lightbox-image1' src='./src/_img/lightbox-img2-preview.jpg' alt='Short image description')
  div(class='lightbox-preview__item')
    img(class='lightbox-preview__thumbnail' data-lightbox='lightbox-image2' src='./src/_img/lightbox-img3-preview.jpg' alt='Short image description')
  div(class='lightbox-preview__item')
    img(class='lightbox-preview__thumbnail' data-lightbox='lightbox-image3' src='./src/_img/lightbox-img4-preview.jpg' alt='Short image description')

//- lightbox overlay
div(class='lightbox')
  span(class='lightbox__close-btn') &times;

  img(class='lightbox__dialog' id='lightbox-image0' src='./src/_img/lightbox-img1.jpg' alt='диплом')
  img(class='lightbox__dialog' id='lightbox-image1' src='./src/_img/lightbox-img2.jpg' alt='диплом')
  img(class='lightbox__dialog' id='lightbox-image2'  src='./src/_img/lightbox-img3.jpg' alt='сертификат')
  img(class='lightbox__dialog' id='lightbox-image3'  src='./src/_img/lightbox-img4.jpg' alt='диплом')

  div(class="prev" id='lightbox-btn-prev') &#10094;
  div(class="next" id='lightbox-btn-next') &#10095;
```

In `.js`:

```javascript
new Lightbox({
  // class names used in HTML related to Lightbox window component:
  classes: {
    backdrop: "lightbox",
    backdropStateModifier: "lightbox_visible",
    dialogStateModifier: "lightbox__dialog_visible",
    closeBtn: "lightbox__close-btn",
    prevBtn: "lightbox-btn-prev",
    nextBtn: "lightbox-btn-next",
    video: "embed",
  },
});
```
