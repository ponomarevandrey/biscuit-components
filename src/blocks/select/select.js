class Select {
  constructor(config) {
    this._config = config;
    this._selectContainerEl = document.querySelector(
      `#${config.IDs.selectContainer}`
    );

    this._systemSelectEl = document.querySelector(
      `.${config.classes.systemSelect}`
    );

    this.renderSelect();

    this._optionsEl = document.querySelector(`.${config.classes.options}`);
    this._selectedOptionEl = document.querySelector(
      `.${config.classes.selectedOption}`
    );

    // close all select boxes when user clicks anywhere outside the select box
    document.addEventListener("click", () => {
      this.closeOptionsList();
    });

    console.log(this);
  }

  buildSelectEl() {
    const selectEl = document.createElement("div");
    selectEl.classList.add(`${this._config.classes.selectedOption}`);

    const selectedOptionIndex = this._systemSelectEl.selectedIndex;
    const selectedOptionText = this._systemSelectEl.options[selectedOptionIndex]
      .textContent;

    selectEl.classList.add(`${this._config.classes.arrowDown}`);
    selectEl.append(selectedOptionText);

    return selectEl;
  }

  buildOptionsEl() {
    // create custom options list
    const optionsContainerEl = document.createElement("div");
    optionsContainerEl.classList.add(
      `${this._config.classes.options}`,
      `${this._config.classes.hiddenOptions}`
    );

    for (let systemOptionEl of this._systemSelectEl.options) {
      const optionEl = document.createElement("div");
      optionEl.textContent = systemOptionEl.textContent;

      optionEl.addEventListener("click", e =>
        this.updateSelectBox(e, optionEl)
      );
      optionsContainerEl.appendChild(optionEl);
    }

    optionsContainerEl.classList.add(`${this._config.classes.options}`);

    return optionsContainerEl;
  }

  renderSelect() {
    const selectEl = this.buildSelectEl.call(this);
    const optionsEl = this.buildOptionsEl.call(this);

    this._selectContainerEl.append(selectEl);
    this._selectContainerEl.appendChild(optionsEl);

    // display arrow

    selectEl.addEventListener("click", e => {
      e.stopPropagation();
      //this.closeOptionsList(this);

      optionsEl.classList.toggle(`${this._config.classes.hiddenOptions}`);
      this.toggleArrow(selectEl);
    });
  }

  toggleArrow(selectEl) {
    if (selectEl.classList.contains("select__arrow_up")) {
      selectEl.classList.remove("select__arrow_up");
      selectEl.classList.add("select__arrow_down");
      console.log("arow down");
    } else {
      selectEl.classList.add("select__arrow_up");
      selectEl.classList.remove("select__arrow_down");
      console.log("arow up");
    }
  }

  openOptionsList() {}

  closeOptionsList(el) {
    this._optionsEl.classList.add(`${this._config.classes.hiddenOptions}`);
    this._selectedOptionEl.classList.remove("select__arrow_up");

    this.toggleArrow(this._selectedOptionEl);
    console.log(this._selectedOptionEl);
  }

  updateSelectBox(e, selectedOptionEl) {
    //console.log(selectedOptionEl, this);

    const systemOptionEls = Array.from(this._systemSelectEl);
    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === selectedOptionEl.textContent) {
        systemOptionEls.selectedIndex = index;
        //console.log(systemOptionEls);

        const currentlySelectedOptionEl = document.querySelector(
          ".select__selected-option"
        );

        currentlySelectedOptionEl.textContent = selectedOptionEl.textContent;

        // move to separate function "closeOptionsList"
        this.closeOptionsList(e.target);
        document
          .querySelector(".select__options")
          .classList.add("select__options_hidden");
        console.log();
        currentlySelectedOptionEl.classList.toggle("select__arrow_up");
      }
    });
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
    hiddenOptions: "select__options_hidden",
    selectedOption: "select__selected-option",
    arrowUp: "select__arrow_up",
    arrowDown: "select__arrow_down",
  },
};

//

window.addEventListener("load", () => {
  const selectContainerEl = document.querySelector(
    `#${config.IDs.selectContainer}`
  );

  const customSelect = new Select(config);
  selectContainerEl.addEventListener("click", customSelect);
});
