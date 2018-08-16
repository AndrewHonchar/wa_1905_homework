import './HW_14.scss';
import './components/accordion/accordion.scss';

import {Accordion} from "./components/accordion/accordion.js";


const accordion = new Accordion(document.querySelector('#accordion1'));
const accordion2 = new Accordion(document.querySelector('#accordion2'));
const accordion3 = new Accordion(document.querySelector('#accordion3'));