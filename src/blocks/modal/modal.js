class Btn {
  constructor({ btnEl, modal }) {
    this._btnEl = btnEl;
    this._modal = modal;
  }

  handleEvent(e) {
    if (e.type === "click") {
      e.preventDefault();

      this._modal.openModal(this._modal.dialog);
    }
  }
}

class Modal {
  constructor({ IDs, classes }) {
    this._IDs = IDs;
    this._classes = classes;

    this._backdrop = document.querySelector(`.${this._classes.backdrop}`);
    this._opened = false;
    this._closeBtn = document.querySelector(
      `.${this._classes.backdrop} .${this._classes.closeBtn}`
    );
    this.dialog = document.querySelector(`#${this._IDs.dialog}`);

    document.addEventListener("keydown", e => this.onKeydown(e));
    document.addEventListener("click", e => this.onClick(e));
  }

  // confirm order moda:
  onClick(e) {
    const clickedEl = e.target;

    if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
      this.closeModal(this.dialog); // webinar signup modal: this.closeModal();
    }
  }

  onKeydown(e) {
    if (this._openedDialog && e.code === "Escape") {
      const videoInModal = this._openedDialog.querySelector(
        `.${this._classes.video}`
      );
      if (videoInModal) this.stopVideo(videoInModal);
      this.toggleBackdrop();
      this._opened = false;
      document.body.style.overflow = "";
      return;
    }
  }

  toggleBackdrop() {
    this._backdrop.classList.toggle(this._classes.backdropStateModifier);
  }

  openModal(dialog) {
    const newDialog = document.querySelector(`#${dialog.id}`);
    const visibleDialog = document.querySelector(
      `.${this._classes.dialogStateModifier}`
    );
    this._opened = !this._opened;

    this.toggleBackdrop();

    if (visibleDialog) this.hideDialog(visibleDialog);

    this.showDialog(newDialog);
    this._openedDialog = newDialog;
    document.body.style.overflow = "hidden";
  }

  closeModal(el) {
    if (this._opened) {
      // handle video:
      const videoBlock =
        this._openedDialog &&
        this._openedDialog.querySelector(`.${this._classes.video}`);
      if (videoBlock) this.stopVideo(videoBlock);
      //

      this._opened = !this._opened;

      this.toggleBackdrop();
      delete this._openedDialog;
      this.hideDialog(el);
      document.body.style.overflow = "";
      return;
    }
  }

  hideDialog(dialog) {
    dialog.classList.remove(this._classes.dialogStateModifier);
  }
  showDialog(dialog) {
    dialog.classList.add(this._classes.dialogStateModifier);
  }

  stopVideo(element) {
    /* Stop an iframe or HTML5 <video> from playing.
     param { element} - the element that contains the video */
    const iframe = element.querySelector("iframe");
    const video = element.querySelector("video");

    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    if (video) video.pause();
  }
}

//

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

//

const btnEl = document.querySelector("#modal-trigger");

const btn = new Btn({
  btn: btnEl,
  modal: modal,
});

btnEl.addEventListener("click", btn);
