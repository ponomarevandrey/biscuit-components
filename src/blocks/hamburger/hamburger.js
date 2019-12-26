/*
FIX/TODO:

If you'll encounter any troubles, change the value "1800" in the "handleEvent" method to a smaller value, equal to standard screen sizes (768, 992, ...). 

But this hack should be fixed, rewrite this method
*/

const config = {
  classes: {
    container: "hamburger",
    menu: "hamburger__menu",
    btn: "hamburger__btn",
    activeMenu: "hamburger_active",
    animateBtn: "hamburger__btn_animate",
  },
  menuItems: [
    {
      title: "Home",
      url: "/",
      children: [],
    },
    {
      title: "About",
      url: "/about",
      children: [
        {
          title: "About Sub 1",
          utl: "/about-sub1",
          children: [
            {
              title: "About Sub 1 Sub 1",
              url: "/about-sub1-sub1",
              children: [],
            },
            {
              title: "About Sub 1 Sub 2",
              url: "/about-sub1-sub2",
              children: [],
            },
          ],
        },
        {
          title: "About Sub 2",
          url: "/about-sub2",
          children: [],
        },
      ],
    },
    {
      title: "Contacts",
      url: "https://github.com/ponomarevandrey",
      children: [],
    },
  ],
};

//

class Hamburger {
  constructor(config) {
    this._config = config;
    this._btnEl = document.querySelector(`.${this._config.classes.btn}`);
    this._containerEl = document.querySelector(
      `.${this._config.classes.container}`
    );
  }

  handleEvent(e) {
    /*
    const divWidth = parseInt(getComputedStyle(document.querySelector(".hamburger")).width;
    if (divWidth <= 768) {}
    */
    // TODO: fix this slopy "if" condition
    if (
      (e.target.classList.contains("hamburger__link") ||
        e.target.parentElement.classList.contains("hamburger__btn") ||
        e.target === this._btnEl) &&
      document.documentElement.clientWidth < 1800
    ) {
      this._containerEl.classList.toggle(`${this._config.classes.activeMenu}`);
      this._containerEl.classList.toggle(`${this._config.classes.animateBtn}`);
    }
  }
}

window.addEventListener("load", () => {
  function populateMenu(items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      const linkEl = document.createElement("a");
      linkEl.href = item.url;
      linkEl.textContent = item.title;
      linkEl.classList.add("hamburger__link");

      menu.append(linkEl);

      if (item.children.length > 0) {
        populateMenu(item.children);
      }
    }
  }

  const container = document.querySelector(`.${config.classes.container}`);
  const btn = new Hamburger(config);
  container.addEventListener("click", btn);

  const menu = document.querySelector(`.${config.classes.menu}`);
  populateMenu(config.menuItems);
});
