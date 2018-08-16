import {Bulb} from './components/bulb/bulb';
import {Garland} from './components/garland/garland';



import './components/select/select';
import './lesson_14.scss';
import {Select} from "./components/select/select";
const countries = ('USA', 'UKRAINE', 'NIGER');
const countriesList = new Select(document.querySelector('#countriesList'), countries);



const bulb = new Bulb(document.querySelector('#bulb1'));
const output = new Garland(document.querySelector('#garland1'));





