import {Bulb} from "../bulb/bulb.js";
import './garland.scss';

export class Garland {
    constructor(targetEl) {
        this.target = targetEl;
        this.bulbs = [];
        this.render();
        this.controlAdd.addEventListener('click', () => this.add());
    }

    render() {
        this.output = document.createElement('div');
        this.output.classList.add('garland__output');
        this.target.appendChild(this.output);
        this.target.classList.add('garland');
        this.renderControls();
    }

    renderControls () {
        this.controlAdd = document.createElement('button');
        this.controlSwitchOnAll = document.createElement('button');
        this.controlSwitchOffAll = document.createElement('button');

        this.controlAdd.classList.add('garland__control');
        this.controlSwitchOnAll.classList.add('garland__control');
        this.controlSwitchOffAll.classList.add('garland__control');

        this.controlAdd.textContent = 'Add';
        this.controlSwitchOnAll.textContent = 'Toggle On';
        this.controlSwitchOffAll.textContent = 'Toggle Off';

        this.controlAdd.addEventListener('click', ()=> this.add());
        this.controlSwitchOnAll.addEventListener('click', ()=> this.toggleOn());
        this.controlSwitchOffAll.addEventListener('click', ()=> this.toggleOff());

        this.target.appendChild(this.controlAdd);
        this.target.appendChild(this.controlSwitchOnAll);
        this.target.appendChild(this.controlSwitchOffAll);
    }

    add() {
        const bulbContainer = document.createElement('div');
        const bulb = new Bulb(bulbContainer);
        this.bulbs.push(bulb);
        this.output.appendChild(bulbContainer);
    }

    toggleOn() {
        this.bulbs.forEach((bulb) => {
            bulb.switchOn();
        });
    }

    toggleOff() {
        this.bulbs.forEach((bulb) => {
            bulb.switchOff();
        });
    }
}
