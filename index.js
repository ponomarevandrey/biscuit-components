/*
 * HELPER FUNCTIONS
 */

// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}

requireFiles(require.context("./src/doc/img/", true, /(svg|png|jpg)$/));

/*
 * CSS RESET
 */

import "./src/blocks/_reset.scss";

/*
 *  DOCUMENTATION STYLES
 */

import "./src/doc/_index.scss";
import "./src/doc/index.js";

/*
 * BLOCKS
 */

/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

// Parent blocks

import "./src/blocks/page/_page.scss";
import "./src/blocks/page/page.js";

import "./src/blocks/header/_header.scss";

import "./src/blocks/main/_main.scss";

import "./src/blocks/footer/_footer.scss";

import "./src/blocks/text/_text.scss";

import "./src/blocks/heading/_heading.scss";

import "./src/blocks/list/_list.scss";

import "./src/blocks/btn/_btn.scss";

import "./src/blocks/btn-back-to-top/_btn-back-to-top.scss";
import "./src/blocks/btn-back-to-top/btn-back-to-top.js";

import "./src/blocks/link/_link.scss";

import "./src/blocks/pagination/_pagination.scss";

import "./src/blocks/comment/_comment.scss";

import "./src/blocks/grid-forms/_grid-forms.scss";

import "./src/blocks/grid-page-layout2/_grid-page-layout2.scss";

import "./src/blocks/grid-page-layout1/_grid-page-layout1.scss";

import "./src/blocks/grid-gallery/_grid-gallery.scss";

import "./src/blocks/grid-simple/_grid-simple.scss";

import "./src/blocks/fullscreen-bg/_fullscreen-bg.scss";

// Child blocks

import "./src/blocks/img-raster/_img-raster.scss";

import "./src/blocks/img-svg/_img-svg.scss";

import "./src/blocks/icons/_icons.scss";
requireFiles(require.context("./src/blocks/icons/", true, /(svg|png|jpg)$/));

import "./src/blocks/breadcrumbs/_breadcrumbs.scss";

import "./src/blocks/badge/_badge.scss";

import "./src/blocks/blockquote/_blockquote.scss";

import "./src/blocks/code/_code.scss";

import "./src/blocks/hr/_hr.scss";

import "./src/blocks/label/_label.scss";

import "./src/blocks/embed/_embed.scss";

import "./src/blocks/table/_table.scss";

import "./src/blocks/loader/_loader.scss";

import "./src/blocks/control/_control.scss";

import "./src/blocks/form-group/_form-group.scss";

import "./src/blocks/nav/_nav.scss";
import "./src/blocks/nav/nav.js";

import "./src/blocks/select/_select.scss";

import "./src/blocks/accordion/_accordion.scss";
import "./src/blocks/accordion/accordion.js";

import "./src/blocks/lightbox/_lightbox.scss";
import "./src/blocks/lightbox/lightbox.js";
