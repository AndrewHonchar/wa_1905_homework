import './select.scss';

const SELECT_CLASS_NAME = 'select';
const SELECT_TITLE_CLASS_NAME = `${SELECT_CLASS_NAME}__title`;
const SELECT_OPTIONS_CLASS_NAME = `${SELECT_CLASS_NAME}__options`;
const SELECT_OPTION_CLASS_NAME = `${SELECT_CLASS_NAME}__option`;
const SELECT_CONTROL_CLASS_NAME = `${SELECT_CLASS_NAME}__control`;

export class Select {
    /**
     * @param (HTML Element) target element
     * @param options
     */
    constructor(target, options) {
        this.targetElement = target;
        this.options = options;
    }

    render() {
        this.titleElement = document.createElement('button');
        this.listElement = document.createElement('ul');

        this.titleElement.classList.add(SELECT_TITLE_CLASS_NAME);
        this.listElement.classList.add(SELECT_OPTION_CLASS_NAME);

        this.titleElement.textContent = 'Please select...';


    }

}