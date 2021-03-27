import { readFile, createTemplate } from "./utils.js";

const app = window.app = window.app || {};
app.capsule = {
    showDetail: (element) =>{
        const event = new Event('detail');
        element.dispatchEvent(event);    
    }
}

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
        this.shadowRoot.querySelector('h1').addEventListener('detail', this.showDetail);

    }

    disconnectedCallback() {
        this.removeEventListener('detail', this.showDetail);
    }

    showDetail() {
        console.log("Hello!!")
    }

}

customElements.define('x-capsule', Capsule);

