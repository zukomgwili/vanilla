import { readFile, createTemplate } from "./utils.js";

export class Capsule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const css = await readFile("./capsule.css");
        const html = await readFile("./capsule.html");
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

    static getHtml({serial, details}){
        return `<v-capsule serial="${serial}" details="${details}"></v-capsule>`;
    }

}

customElements.define('v-capsule', Capsule);

