class Index extends HTMLElement {
    constructor() {
        super();
        const { content } = document.querySelector("#index");
        this.attachShadow({ mode: 'open' }).appendChild(content.cloneNode(true));
    }
}

customElements.define('v-index', Index);