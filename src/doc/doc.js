class Hamburger {
  constructor(config) {
    this._config = config;
    this._btnEl = document.querySelector(`.${this._config.classes.btn}`);
    this._menuEl = document.querySelector(`.${this._config.classes.menu}`);
  }

  handleEvent(e) {
    if (
      (e.target.classList.contains("doc-nav__link") ||
        e.target.parentElement.classList.contains("doc-nav__icon") ||
        e.target === this._btnEl) &&
      document.documentElement.clientWidth < 768
    ) {
      this._menuEl.classList.toggle(`${this._config.classes.activeMenu}`);
      this._menuEl.classList.toggle(`${this._config.classes.animateBtn}`);
    }
  }
}

const config = {
  classes: {
    menu: "doc-nav",
    btn: "doc-nav__icon",
    activeMenu: "doc-nav_active",
    animateBtn: "doc-nav__icon_animate",
  },
};

window.addEventListener("load", () => {
  const menu = document.querySelector(`.${config.classes.menu}`);
  const btn = new Hamburger(config);
  menu.addEventListener("click", btn);
});
