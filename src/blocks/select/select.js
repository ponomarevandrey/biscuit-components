class Select {
  constructor(config) {
    this._config = config;
    this._selectContainerEl = document.querySelector(
      `#${config.IDs.selectContainer}`
    );

    this._systemSelectEl = this.buildSystemSelectEl();
    this._selectContainerEl.append(this._systemSelectEl);

    // Render select box.
    this._selectedEl = this.buildSelectedOptionEl(this._config.defaultValue);
    this._optionsEl = this.buildOptionEl();
    this._selectContainerEl.append(this._selectedEl, this._optionsEl);
    //

    this._selectedEl.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleOptionsEl();
    });

    document.addEventListener("click", () => {
      if (!this.isOptionsElHidden()) this.toggleOptionsEl();
    });
  }

  buildSystemSelectEl(defaultText) {
    // FIX: ideally, instead of `${index + 1}` use some
    // more meaningful values

    const selectEl = document.createElement("select");
    selectEl.classList.add(this._config.classes.systemSelect);

    this._config.options.forEach((optionName, index) => {
      const optionEl = document.createElement("option");
      optionEl.setAttribute("value", `${index + 1}`);
      optionEl.textContent = optionName;

      selectEl.append(optionEl);
    });

    return selectEl;
  }

  buildSelectedOptionEl(defaultText = "Select option") {
    const selectEl = document.createElement("div");
    selectEl.classList.add(`${this._config.classes.selectedOption}`);

    // Use this code to set the default value from the options list,
    // not from the passed "defaultText" argument
    /*
    const selectedIndex = this._systemSelectEl.selectedIndex;
    const selectedOptionText = this._systemSelectEl.options[selectedIndex]
      .textContent;
    */

    selectEl.classList.add(`${this._config.classes.arrowDown}`);
    selectEl.append(defaultText);

    return selectEl;
  }

  buildOptionEl() {
    const optionsContainerEl = document.createElement("div");
    optionsContainerEl.classList.add(
      `${this._config.classes.options}`,
      `${this._config.classes.hideOptions}`
    );

    for (let systemOptionEl of this._systemSelectEl.options) {
      const optionEl = document.createElement("div");
      optionEl.classList.add("section__option");
      optionEl.textContent = systemOptionEl.textContent;

      optionsContainerEl.appendChild(optionEl);
    }

    optionsContainerEl.addEventListener("click", e => {
      if (e.target.classList.contains("section__option")) {
        const selectedOption = e.target;
        this.updateSelectBox(selectedOption);
      }
    });

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

  toggleOptionsEl() {
    this._optionsEl.classList.toggle(`${this._config.classes.hideOptions}`);
    this.toggleArrow();
  }

  isOptionsElHidden() {
    if (
      this._optionsEl.classList.contains(`${this._config.classes.hideOptions}`)
    ) {
      return true;
    }
  }

  updateSelectBox(selectedOptionEl) {
    const systemOptionEls = Array.from(this._systemSelectEl);

    // FIX
    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === selectedOptionEl.textContent) {
        systemOptionEls.selectedIndex = index;
        this._selectedEl.textContent = selectedOptionEl.textContent;

        systemOptionEls[systemOptionEls.selectedIndex].setAttribute(
          "selected",
          "selected"
        );
      }
    });

    this.toggleOptionsEl();
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
  defaultValue: "Select difficulty",
  options: ["Easy", "Moderate", "Difficuly"],
};

//

window.addEventListener("load", () => {
  const selectContainerEl = document.querySelector(
    `#${config.IDs.selectContainer}`
  );

  const customSelect = new Select(config);
  selectContainerEl.addEventListener("click", customSelect);
});
