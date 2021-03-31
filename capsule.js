const template = `
<div>
    <h1 id="serial"></h1>
    <p id="details"></p>          
</div>
`;

const styles = `<style>
h1{
    color:#d34d89;
}
</style>`;

export class Capsule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
            .appendChild(document.createRange()
                .createContextualFragment(styles + template));
    }

    connectedCallback() {
        this.h1 = this.shadowRoot.querySelector('h1');
        this.h1.addEventListener('click', this.showDetail);
    }

    disconnectedCallback() {
        this.h1.addEventListener('click', this.showDetail);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(`#${name}`).textContent = newValue;
    }

    static get observedAttributes() {
        return ["serial", "details"];
    }

    showDetail() {
        console.log("Hello!!")
    }

    static getHtml({ serial, details }) {
        return `<v-capsule serial="${serial}" details="${details}"></v-capsule>`;
    }

}

customElements.define('v-capsule', Capsule);

