import {Lighter} from './components/lighter/lighter';
import {Buttons} from './components/lighter/lighter';

const firstLighter = new Lighter(document.querySelectorAll('.lamp'));
const firstbtn = new Buttons(document.querySelectorAll('.btn'));

class LighterManager {
    constructor (button, arrayOfLighters) {
        this.button = button;
        this.lighters = arrayOfLighters;
        this.attachEvents();
        this.button.addEventListener('click', ()=> {
            console.log(this.lighters[0].isEnabled);
        });

    }
}


const o = new Lighter()
const u = new LighterManager(document.querySelector('button'),[firstLighter]);
//
//
class ButtonsManager {
    constructor (button, arrayOfButtons) {
        this.button = button;
        this.buttons = arrayOfButtons;

        this.button.addEventListener('click', ()=> {
            console.log(this.buttons[0].isEnabled);
        })
    }
}

const w = new ButtonsManager(document.querySelector('button'),[firstbtn]);



// const Lights = [LightOn, LightOff];
