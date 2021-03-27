import { readFile, createTemplate } from "./utils.js";

class Capsule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const css = await readFile("./x-capsule.css");
        const html = await readFile("./x-capsule.html");
        const data = {
            'serial': this.getAttribute('serial'),
            'details': this.getAttribute('details')
        };
        const content = createTemplate(css, html, data);
        this.shadowRoot.innerHTML = content;
        this.h1 = this.shadowRoot.querySelector('h1');
        this.h1.addEventListener('click', this.showDetail);

    }

    disconnectedCallback() {
        this.h1.addEventListener('click', this.showDetail);
    }

    showDetail() {
        console.log("Hello!!")
    }

}

customElements.define('x-capsule', Capsule);

