# How to use

- `pug`
  ```pug
    a(class='btn btn_theme_black' href='###' id='modal-trigger') Click me to see a modal

    div(class='modal modal_backdrop')
        span(class='modal__close-btn') &times;

        div(class='modal__dialog modal__dialog_test' id='test-dialog')
        span(class='text text_display_inline') Content
  ```

- `js`
  ```javascript
    const modal = new Modal({
    IDs: {
        dialog: "test-dialog",
    },
    /* all class names used in HTML related to modal window component: */
    classes: {
        backdrop: "modal_backdrop",
        backdropStateModifier: "modal_visible",
        dialogStateModifier: "modal__dialog_visible",
        closeBtn: "modal__close-btn",
    },
    });

    const btnEl = document.querySelector("#modal-trigger");

    const btn = new Btn({
    btn: btnEl,
    modal: modal,
    });

    btnEl.addEventListener("click", btn);
  ```