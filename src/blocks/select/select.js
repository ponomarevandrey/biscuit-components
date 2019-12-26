class Select {
  constructor(config) {
    this._config = config;
    this._selectContainerEl = document.querySelector(
      `#${config.IDs.selectContainer}`
    );
    this._systemSelectMenuEl = this.systemSelectMenuEl(
      this._config.defaultValue
    );

    this._selectedEl = this.selectedEl(
      this.cachedSelectedOption().value || this._config.defaultValue
    );

    // Render select box.
    this._menuEl = this.menuEl();
    this._selectContainerEl.append(
      this._systemSelectMenuEl,
      this._selectedEl,
      this._menuEl
    );
    //

    this._selectedEl.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenuEl();
    });

    this._menuEl.addEventListener("click", e => {
      if (e.target.classList.contains("section__option")) {
        //this._selectedEl = e.target;
        this.updateSelectContainer(e.target);
      }
    });

    document.addEventListener("click", () => {
      if (!this.isMenuElHidden()) this.toggleMenuEl();
    });
  }

  cachedSelectedOption() {
    //if (document.querySelector("select")) {
    //const systemSelect = document.querySelector("select");
    //const systemSelected = document.querySelector("option:checked");

    //console.log(systemSelect.selectedIndex);

    if (localStorage.getItem("select") !== null) {
      console.log("returned from localStorage");
      return JSON.parse(localStorage.getItem("select"))[
        this._config.IDs.selectContainer
      ];
    } else return false;
  }

  systemSelectMenuEl(defaultOption) {
    const selectEl = document.createElement("select");
    selectEl.classList.add(this._config.classes.systemSelect);

    this._config.options.forEach(optionName => {
      const optionEl = document.createElement("option");

      const str = optionName.toLowerCase().replace(/\s/g, "-");
      optionEl.setAttribute("value", str);

      optionEl.textContent = optionName;

      if (optionName === defaultOption) {
        console.log("default option set");
        optionEl.setAttribute("selected", "");
      }

      selectEl.append(optionEl);
    });

    return selectEl;
  }

  selectedEl(defaultOption) {
    const selectEl = document.createElement("div");
    selectEl.classList.add(`${this._config.classes.selectedOption}`);

    selectEl.classList.add(`${this._config.classes.arrowDown}`);
    selectEl.append(defaultOption);

    return selectEl;
  }

  menuEl() {
    const optionsContainerEl = document.createElement("div");
    optionsContainerEl.classList.add(
      `${this._config.classes.options}`,
      `${this._config.classes.hideOptions}`
    );

    for (let systemOptionEl of this._systemSelectMenuEl.options) {
      const optionEl = document.createElement("div");
      optionEl.classList.add("section__option");
      optionEl.textContent = systemOptionEl.textContent;

      optionsContainerEl.appendChild(optionEl);
    }

    return optionsContainerEl;
  }

  toggleArrow() {
    const arrowUpClassName = this._config.classes.arrowUp;
    const arrowDownClassName = this._config.classes.arrowDown;

    if (this._selectedEl.classList.contains(arrowUpClassName)) {
      this._selectedEl.classList.remove(arrowUpClassName);
      this._selectedEl.classList.add(arrowDownClassName);
    } else {
      this._selectedEl.classList.add(arrowUpClassName);
      this._selectedEl.classList.remove(arrowDownClassName);
    }
  }

  toggleMenuEl() {
    this._menuEl.classList.toggle(`${this._config.classes.hideOptions}`);
    this.toggleArrow();
  }

  isMenuElHidden() {
    if (
      this._menuEl.classList.contains(`${this._config.classes.hideOptions}`)
    ) {
      return true;
    }
  }

  updateSystemSelectedAttr(newSelected) {
    const currentlySelected = document.querySelector("option:checked");

    if (currentlySelected) {
      currentlySelected.removeAttribute("selected");
      newSelected.setAttribute("selected", "");
    }
  }

  setSystemSelectedEl(customSelectedEl) {
    const systemOptionEls = Array.from(this._systemSelectMenuEl);

    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === customSelectedEl.textContent) {
        systemOptionEls.selectedIndex = index;
        this.updateSystemSelectedAttr(
          systemOptionEls[systemOptionEls.selectedIndex]
        );
      }
    });
  }

  setCustomSelectedEl(customSelectedEl) {
    this._selectedEl.textContent = customSelectedEl.textContent;
  }

  updateSelectContainer(customSelectedEl) {
    const systemOptionEls = Array.from(this._systemSelectMenuEl);

    // FIX:
    // try to replace foreach loop with
    //;
    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === customSelectedEl.textContent) {
        systemOptionEls.selectedIndex = this.cachedSelectedOption().index; //index;

        if (systemOptionEls[systemOptionEls.selectedIndex]) {
          this.updateSystemSelectedAttr(
            systemOptionEls[systemOptionEls.selectedIndex]
          );
        }
        this._selectedEl.textContent = customSelectedEl.textContent;

        this.setCustomSelectedEl(customSelectedEl);
        this.setSystemSelectedEl(customSelectedEl);
        this.cacheSelected(index, customSelectedEl);
      }
    });
    //

    this.toggleMenuEl();
  }

  cacheSelected(index, selectedEl) {
    const systemSelected = document.querySelector("option:checked");

    // Create object to store selected option. Object structure:
    // selectedItem = { select-difficulty: { index: 2
    //                                       value: moderate } }
    const selectedOption = {};
    const key = this._config.IDs.selectContainer;
    const value = selectedEl.textContent;
    selectedOption[key] = {
      index,
      value: value,
    };
    localStorage.setItem("select", JSON.stringify(selectedOption));
  }
}

//

const config = {
  IDs: {
    selectContainer: "select-difficulty",
  },
  classes: {
    systemSelect: "select__system",
    options: "select__options",
    hideOptions: "select__options_hidden",
    selectedOption: "select__selected-option",
    arrowUp: "select__arrow_up",
    arrowDown: "select__arrow_down",
  },
  defaultValue: "Select option",
  options: ["Easy", "Moderate", "Difficult"],
};

//

window.addEventListener("load", () => {
  const selectContainerEl = document.querySelector(
    `#${config.IDs.selectContainer}`
  );

  const customSelect = new Select(config);
  selectContainerEl.addEventListener("click", customSelect);
});
