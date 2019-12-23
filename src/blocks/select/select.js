class Select {
  constructor(config) {
    this._config = config;

    this._systemSelectEl = document.querySelector(
      `.${this._config.classes.systemSelectEl}`
    );

    // If the user clicks anywhere outside the select box,
    // close all select boxes:
    document.addEventListener("click", this.closeAllSelect);
    this.renderSelect();
  }

  buildOptionsList() {}

  renderSelect() {
    const self = this;

    const selectEl = document.createElement("div");
    selectEl.classList.add("select__selected-option");
    selectEl.append(
      this._systemSelectEl.options[this._systemSelectEl.selectedIndex].innerHTML
    );

    const selectContainerEl = document.querySelector(
      `#${this._config.IDs.selectContainer}`
    );
    selectContainerEl.append(selectEl);

    // create options list
    const optionsListEl = document.createElement("div");
    optionsListEl.classList.add("select__options", "select__options_hidden");

    for (let systemOptionEl of this._systemSelectEl.options) {
      const optionEl = document.createElement("div");
      optionEl.textContent = systemOptionEl.textContent;

      optionEl.addEventListener("click", e =>
        this.updateSelectBox(e, optionEl)
      );
      optionsListEl.appendChild(optionEl);
    }

    selectContainerEl.appendChild(optionsListEl);

    selectEl.addEventListener("click", function(e) {
      // When the select box is clicked, close any other select boxes,
      // and open/close the current select box:
      // console.log(e.target);
      e.stopPropagation();
      self.closeAllSelect(this);

      this.nextSibling.classList.toggle("select__options_hidden");
      this.classList.toggle("select__arrow");
    });
    //console.log(customSelect);
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

        // move to separate function "closeSelect"
        this.closeAllSelect(e.target);
        document
          .querySelector(".select__options")
          .classList.add("select__options_hidden");
        console.log();
        currentlySelectedOptionEl.classList.toggle("select__arrow");
      }
    });

    // triggers bubbling in order to trigger customSelectBox eventListener - "closeAllelect",
    // in order to close options list after clicking on the selected item
  }

  closeAllSelect(el) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    const allCustomOptionsLists = document.querySelector(".select__options");
    const allCustomSelectBoxes = document.querySelector(
      ".select__selected-option"
    );
    const arrNo = [];

    for (let m = 0; m < allCustomSelectBoxes.length; m++) {
      //console.log(el);
      if (el === allCustomSelectBoxes[m]) arrNo.push(m);
      else allCustomSelectBoxes[m].classList.remove("select__arrow");
      //console.log(arrNo);
    }
    //console.log(arrNo);
    for (let n = 0; n < allCustomOptionsLists.length; n++) {
      //console.log(arrNo, n); -> [0], 0 // [0].indexOf(0) -> 0 // if (0) -> if (false)
      if (arrNo.indexOf(n)) {
        //console.log("------------", n, arrNo, arrNo.indexOf(n));
        allCustomOptionsLists[n].classList.add("select__options_hidden");
      }
    }
  }
}

const config = {
  IDs: {
    selectContainer: "select-difficulty",
  },
  classes: {
    systemSelectEl: "select__system",
  },
};

window.addEventListener("load", () => {
  const systemSelectEl = document.querySelector(
    `.${config.classes.systemSelectEl}`
  );

  const customSelect = new Select(config);

  systemSelectEl.addEventListener("click", customSelect);
});

//

/*
window.addEventListener("load", buildSelect);

function buildSelect(e) {
  // get default browser select box - <select>...</select>
  const defaultSelectBox = document.querySelector(".select__system");

  // create initial select box
  const customSelectBox = document.createElement("div");
  //customSelectBox.setAttribute("class", "select_selected");
  customSelectBox.classList.add("select_selected");
  customSelectBox.innerHTML =
    defaultSelectBox.options[defaultSelectBox.selectedIndex].innerHTML;
  const defaultSelectBoxContainer = document.querySelector(".select");
  defaultSelectBoxContainer.appendChild(customSelectBox);

  // create options list
  const customOptionsList = document.createElement("div");
  customOptionsList.setAttribute("class", "select__items select_hidden");

  for (let j = 1; j < defaultSelectBox.length; j++) {
    const option = document.createElement("div");
    option.innerHTML = defaultSelectBox.options[j].innerHTML;

    // eslint-disable-next-line no-inner-declarations
    function updateSelectBox(e) {
      // this === e.currentTarget === option
      // this.parentNode === customOptionsList
      // this.parentNode.parentNode === allSelectBlocks[0] === div class="select";
      // console.log(this.parentNode.previousSibling, this)
      const currentDefaultSelectBox = this.parentNode.parentNode.getElementsByTagName(
        "select"
      )[0];
      // console.log(currentDefaultSelectBox);
      const selectedOption = this.parentNode.previousSibling;
      // selectedOption === div class="select_selected"
      for (let k = 0; k < currentDefaultSelectBox.length; k++) {
        if (currentDefaultSelectBox.options[k].innerHTML === this.innerHTML) {
          currentDefaultSelectBox.selectedIndex = k;
          selectedOption.innerHTML = this.innerHTML;

          const sameAsSelected = this.parentNode.getElementsByClassName(
            "same-as-selected"
          );
          for (let l = 0; l < sameAsSelected.length; l++) {
            sameAsSelected[l].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      // runs bubbling in order to trigger customSelectBox eventListener - "closeAllelect",
      // in order to close options list after clicking on the selected item
      selectedOption.click();
    }

    option.addEventListener("click", updateSelectBox);
    customOptionsList.appendChild(option);
  }

  defaultSelectBoxContainer.appendChild(customOptionsList);

  customSelectBox.addEventListener("click", function(e) {
    // When the select box is clicked, close any other select boxes,
    // and open/close the current select box:
    // console.log(e.target);
    e.stopPropagation();
    console.log(this == e.target, this == e.currentTarget); // true true
    closeAllSelect(this);
    // this.nextSibling === div class="select__items"
    this.nextSibling.classList.toggle("select_hidden");
    this.classList.toggle("select__arrow_active");
  });

  function closeAllSelect(el) {
    // A function that will close all select boxes in the document,
    // except the current select box:
    const allCustomOptionsLists = document.getElementsByClassName(
      "select__items"
    );
    const allCustomSelectBoxes = document.getElementsByClassName(
      "select_selected"
    );
    const arrNo = [];

    for (let m = 0; m < allCustomSelectBoxes.length; m++) {
      console.log(el);
      if (el === allCustomSelectBoxes[m]) arrNo.push(m);
      else allCustomSelectBoxes[m].classList.remove("select__arrow_active");
      console.log(arrNo);
    }
    console.log(arrNo);
    for (let n = 0; n < allCustomOptionsLists.length; n++) {
      //console.log(arrNo, n); -> [0], 0 // [0].indexOf(0) -> 0 // if (0) -> if (false)
      if (arrNo.indexOf(n)) {
        console.log("------------", n, arrNo, arrNo.indexOf(n));
        allCustomOptionsLists[n].classList.add("select_hidden");
      }
    }
  }

  // If the user clicks anywhere outside the select box,
  // close all select boxes:
  document.addEventListener("click", closeAllSelect);
}
*/
