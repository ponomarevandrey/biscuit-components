class Menu {
  constructor(config) {
    this._menu = document.querySelector(`.${config.classes.menu}`);
    this._hamburgerMenu = document.querySelector(".doc-nav > .doc-nav__icon");

    /*
    rootNode.addEventListener("click", e =>
      this.handleClick(e, this._menu.children)
    );
    */
    this._hamburgerMenu.addEventListener(
      "click",
      this.handleHamburgerMenu.bind(this)
    );
    console.log(this);
  }

  handleHamburgerMenu() {
    this._menu.classList.toggle("doc-nav_responsive");
    this._hamburgerMenu.classList.toggle("doc-nav__icon_animate");
  }

  handleClick(e, blocks) {
    const item = e.target;
    const activeItem = document.querySelector(".doc-nav__link_active");
    // if we occasionally clicked not on menu item but somewhere else:
    if (item === e.currentTarget) return;
    // if we click on hamburget menu item:
    if (
      item.parentElement.classList.contains("doc-nav__icon") ||
      item.classList.contains("doc-nav__icon")
    )
      return;

    activeItem.classList.remove("doc-nav__link_active");
    item.classList.add("menu__link_active");

    if (this._menu.classList.contains("doc-nav_responsive")) {
      this.handleHamburgerMenu();
    }
  }
}

/*

    ul(class='switch')
      li(class='switch__preview' data-preview) Preview
      li(class='switch__code' data-code) Code

class SwitchBtn {
  constructor() {
    // query all blocks
    let blocks = document.querySelectorAll("[data-name]");
    document.addEventListener("click", this.handleClick.bind(this));
    blocks.forEach(block => {
      if (block.querySelector(".block__preview")) {
        block.querySelector(".switch__preview").click();
      } else {
        block
          .querySelector(".switch__preview")
          .classList.add("switch__preview_disabled");
        block.querySelector(".switch__code").click();
      }
    });
  }

  handleClick(e) {
    const btn = e.target;
    const [btnName] = btn.className.split("switch__").filter(e => e);

    const currentBlockEl = btn.closest(".block");
    // detect, whether we clicked a button or some other area around
    const isButton =
      e.target.tagName === "LI" && btn.className.includes("switch");
    /* if we clicked outside the buttons, if we clicked outside the block, 
    //or if we clicked on an already clicked button: 
    if (!currentBlockEl || !isButton || this.isClassActive(btn.classList))
      return;

    currentBlockEl
      .querySelectorAll(".switch__preview, .switch__code")
      .forEach(button => this.removeModifier(button, "active"));
    currentBlockEl
      .querySelectorAll(".block__preview, .block__code")
      .forEach(contentBlock => (contentBlock.hidden = true));

    this.addModifier(btn, btn.className, "active");
    currentBlockEl.querySelector(`.block__${btnName}`).hidden = false;
  }

  isClassActive(classList) {
    for (let className of classList) {
      if (className.includes("active")) return true;
    }
  }

  addModifier(node, targetClass, modifierName) {
    node.classList.add(`${targetClass}_${modifierName}`);
  }

  removeModifier(node, modifierName) {
    let classes = node.classList;
    for (let className of classes) {
      if (className.includes("active")) classes.remove(className);
    }
  }
}
*/
window.addEventListener("load" /*"DOMContentLoaded"*/, () => {
  new Menu({
    classes: {
      menu: "dov-nav",
    },
  });

  //new SwitchBtn(document.querySelectorAll(".switch"));
  console.log("test");
});
