// Custom select box

window.addEventListener("load", buildSelect);

function buildSelect(e) {
  const allSelectBlocks = document.getElementsByClassName("select");
  console.log("allSelectBlocks: ", allSelectBlocks);

  for (let i = 0; i < allSelectBlocks.length; i++) {
    // get default browser select box - <select>...</select>
    const defaultSelectBox = allSelectBlocks[i].getElementsByTagName(
      "select"
    )[0];

    // create initial select box
    const customSelectBox = document.createElement("div");
    customSelectBox.setAttribute("class", "select-selected");
    customSelectBox.innerHTML =
      defaultSelectBox.options[defaultSelectBox.selectedIndex].innerHTML;
    allSelectBlocks[i].appendChild(customSelectBox);

    // create options list
    const customOptionsList = document.createElement("div");
    customOptionsList.setAttribute("class", "select-items select-hide");

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
        // selectedOption === div class="select-selected"
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

    allSelectBlocks[i].appendChild(customOptionsList);

    customSelectBox.addEventListener("click", function(e) {
      // When the select box is clicked, close any other select boxes,
      // and open/close the current select box:
      // console.log(e.target);
      e.stopPropagation();
      console.log(this == e.target, this == e.currentTarget); // true true
      closeAllSelect(this);
      // this.nextSibling === div class="select-items"
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(el) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    const allCustomOptionsLists = document.getElementsByClassName(
      "select-items"
    );
    const allCustomSelectBoxes = document.getElementsByClassName(
      "select-selected"
    );
    const arrNo = [];

    for (let m = 0; m < allCustomSelectBoxes.length; m++) {
      console.log(el);
      if (el === allCustomSelectBoxes[m]) arrNo.push(m);
      else allCustomSelectBoxes[m].classList.remove("select-arrow-active");
      console.log(arrNo);
    }
    console.log(arrNo);
    for (let n = 0; n < allCustomOptionsLists.length; n++) {
      //console.log(arrNo, n); -> [0], 0 // [0].indexOf(0) -> 0 // if (0) -> if (false)
      if (arrNo.indexOf(n)) {
        console.log("------------", n, arrNo, arrNo.indexOf(n));
        allCustomOptionsLists[n].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
}
