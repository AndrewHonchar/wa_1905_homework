import'./lighter.scss'

const LIGHTER_LIGHT_CLASS_NAME = 'street-lighter__light';
const LIGHTER_LIGHT_ACTIVE_CLASS_NAME = 'street-lighter__light_active';
const BTN = 'btn';
const BTN_ACTIVE = 'btn_active';

class Lighter {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.lights = this.targetElement.querySelectorAll('.' + LIGHTER_LIGHT_CLASS_NAME);
        this.btn = this.targetElement.querySelectorAll('.' + BTN);
        this.isEnabled = false;
        this.attachEvents();
    }
    switchOffLights() {
        this.lights.forEach ((light) => {
            light.classList.remove(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
        });
        this.btn.forEach ((btn) => {
            btn.classList.remove(BTN_ACTIVE);
        });
    }

    switchOnLight(element) {
        element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
        this.isEnabled = true;
        element.classList.add(BTN_ACTIVE);
        this.isEnabled = true;
    }

    attachEvents() {
        this.lights.forEach(light => {
            light.addEventListener('click', () => {
                this.switchOffLights();
                this.switchOnLight(light);
            });
        });
        this.btn.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchOffButtons();
                this.switchOnButton(btn);
            });
        })
    }
}

export {Lighter};

class Buttons {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.btn = this.targetElement.querySelectorAll('.' + BTN);
        this.isEnabled = false;
        this.attachEvents();
    }

    switchOffButtons() {
        this.btn.forEach ((btn) => {
            btn.classList.remove(BTN_ACTIVE);
        });
    }

    switchOnButton(element) {
        element.classList.add(BTN_ACTIVE);
        this.isEnabled = true;
    }

    attachEvents() {
        this.btn.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchOffButtons();
                this.switchOnButton(btn);
            });
        })
    }
}

export {Buttons};


