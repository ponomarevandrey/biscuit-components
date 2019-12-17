class Menu {
  constructor(rootNode) {
    this._menu = document.querySelector(".menu");
    this._hamburgerMenu = document.querySelector(".menu__icon");
    this._defaultItem = this._menu.children[0];
    this._init = false; // flag to prevent scrolling on first load
    this._rootNodeInitialPisition =
      rootNode.getBoundingClientRect().top + pageYOffset;

    rootNode.addEventListener("click", e =>
      this.handleClick(e, this._menu.children)
    );
    this._hamburgerMenu.addEventListener(
      "click",
      this.handleHamburgerMenu.bind(this)
    );
    //window.addEventListener('scroll', e => this.handleScroll(e, rootNode));
    this._defaultItem.click();
  }

  handleHamburgerMenu() {
    this._menu.classList.toggle("menu_responsive");
    this._hamburgerMenu.classList.toggle("menu__icon_animate");
    console.log("w");
  }

  handleClick(e, blocks) {
    const item = e.target;
    const activeItem =
      document.querySelector(".menu__link_active") || this._defaultItem;
    // if we occasionally clicked not on menu item but somewhere else:
    if (item === e.currentTarget) return;
    // if we click on hamburget menu item:
    if (
      item.parentElement.classList.contains("menu__icon") ||
      item.classList.contains("menu__icon")
    )
      return;

    activeItem.classList.remove("menu__link_active");
    item.classList.add("menu__link_active");

    if (this._menu.classList.contains("menu_responsive")) {
      console.log("w");
      this.handleHamburgerMenu();
    }
    //console.log(this._rootNodeInitialPisition)
    if (!this._init) this._init = true;
    else scrollTo(0, this._rootNodeInitialPisition);
  }

  // make rootNode sticky while scrolling:
  handleScroll(e, rootNode) {
    const rootNodeCoords = rootNode.getBoundingClientRect();
    // get next sibling element for implementing sticky behavior on scroll:
    const rootNodeNextSibling = rootNode.nextElementSibling;
    const rootNodeNextSiblingCoords = rootNodeNextSibling.getBoundingClientRect();

    /* 
    //For debugging:
    console.log(rootNodeCoords.top, rootNodeNextSiblingCoords.top);
    if (rootNodeCoords.top === 0) console.log('rootNodeCoords.top === 0')
    */

    if (rootNodeCoords.top <= 0) {
      console.log("first if");
      rootNode.classList.add("menu_stick");
      document.querySelector(
        ".demo"
      ).style.paddingTop = `${rootNodeCoords.bottom}px`;
    }

    if (rootNodeNextSiblingCoords.top >= 0 && rootNodeCoords.top === 0) {
      // console.log('second if')
      rootNode.classList.remove("menu_stick");
      document.querySelector(".demo").style.paddingTop = "";
    }
  }

  static capitalizeFirstLetter(text) {
    return text[0].toUpperCase() + text.slice(1);
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

window.addEventListener("load" /"DOMContentLoaded"/, () => {
  new Menu(document.body.querySelector(".menu"));
  new SwitchBtn(document.querySelectorAll(".switch"));
  console.log("test");
});
*/
