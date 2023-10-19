// TODO: Add a comment explaining role of the index.js file and import statements
// imports the js content from the other 2 js files (exports)

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
