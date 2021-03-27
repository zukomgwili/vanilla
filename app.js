import { Capsules } from "./x-capsules.js";
class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = Capsules.html;
    }
}

customElements.define('v-app', App);