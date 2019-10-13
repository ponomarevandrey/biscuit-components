/************
 * GRAPHICS *
 ************/
// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}

/*************
 * CSS RESET *
 *************/
import './src/_reset.scss';

/**********
 * BLOCKS *
 **********/
/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

/***************** Redefinition level 'blocks.biscuit-lib' *******************/

// Parent blocks

import './src/text/_text.scss';

import './src/heading/_heading.scss';

import './src/list/_list.scss';

import './src/btn/_btn.scss';
import './src/btn/btn.js';

import './src/link/_link.scss';

import './src/pagination/_pagination.scss';

import './src/comment/_comment.scss';

import './src/grid-forms/_grid-forms.scss';

// Child blocks

import './src/img-raster/_img-raster.scss';

import './src/tooltip/_tooltip.scss';

import './src/icons/_icons.scss';
requireFiles(require.context('./src/icons/', true, /(svg|png|jpg)$/));

import './src/breadcrumb/_breadcrumb.scss';

import './src/badge/_badge.scss';

import './src/blockquote/_blockquote.scss';

import './src/code/_code.scss';

import './src/hr/_hr.scss';

import './src/label/_label.scss';

import './src/embed/_embed.scss';

import './src/table/_table.scss';

import './src/loader/_loader.scss';

import './src/control/_control.scss';

import './src/form-group/_form-group.scss';

import './src/nav/_nav.scss';
import './src/nav/nav.js';

import './src/nav-fixed/_nav-fixed.scss';

import './src/select/_select.scss';

import './src/accordion/_accordion.scss';
import './src/accordion/accordion.js';
