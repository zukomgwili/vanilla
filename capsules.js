import { Capsule } from "./capsule.js";
export class Capsules extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const { body } = await fetch('https://api.spacexdata.com/v3/capsules/upcoming');
        const capsules = await new Response(body, { headers: { "Content-Type": "application/json" } }).json();
        let html = "";
        capsules.forEach(capsule => {
            const { capsule_serial, details } = capsule;
            html += Capsule.getHtml({ serial: capsule_serial, details: details });
        });
        this.shadowRoot.innerHTML = html;
    }

    static get html() {
        return "<v-capsules></v-capsules>";
    }
};
customElements.define('v-capsules', Capsules);
