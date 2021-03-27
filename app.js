import { Capsules } from "./capsules.js";
import { readFile } from "./utils.js";
class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback(){
        this.shadowRoot.innerHTML = await readFile("./app.html");
        this.shadowRoot.querySelector('main').innerHTML = Capsules.html;
    }
}

customElements.define('v-app', App);