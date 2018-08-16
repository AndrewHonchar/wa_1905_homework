import './accordion.scss';

const SELECT_CLASS_NAME = 'accordion';
const SELECT_BUTTON_CLASS_NAME = `accordion__button`;
const SELECT_PANEL_CLASS_NAME = `accordion__panel`;
const SELECT_ACTIVE_CLASS_NAME = `accordion__active`;
export class Accordion {
    constructor(target) {
        this.target = target;
        this.isEnabled = false;
        this.render();
        this.button.addEventListener('click',() => this.toggle());
    }
    accordionAdd() {
        this.target.classList.add(SELECT_ACTIVE_CLASS_NAME);
        this.isEnabled = true;
    }
    accordionRemove() {
        this.target.classList.remove(SELECT_ACTIVE_CLASS_NAME);
        this.isEnabled = false;
    }
    toggle() {
        if (this.isEnabled) {
            this.accordionRemove();
        }
        else {
            this.accordionAdd();
        }
    }
    render() {
        this.button = document.createElement('button');
        this.panel = document.createElement('div');
        this.panel.classList.add(SELECT_PANEL_CLASS_NAME);
        this.button.classList.add(SELECT_BUTTON_CLASS_NAME);
        this.button.textContent = ('Accordion');
        this.panel.textContent = ('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        this.target.appendChild(this.button);
        this.target.appendChild(this.panel);
        this.target.classList.add(SELECT_CLASS_NAME);
    }
}

