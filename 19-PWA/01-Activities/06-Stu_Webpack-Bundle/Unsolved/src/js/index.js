import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';

// TODO: Import yellow robot image as 'Yellow'
import { yellow } from '../images/yellow-robot.png';
import { blue } from '../images/blue-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// TODO: Set src of #box element to Yellow
document.getElementById('box').src = "Yellow";