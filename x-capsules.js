import { Capsule } from "./capsule.js";
export class Capsules extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('https://api.spacexdata.com/v3/capsules/upcoming')
            .then(({ body }) => body)
            .then(stream => new Response(stream, { headers: { "Content-Type": "application/json" } }).json())
            .then(capsules => {
                let html = "";
                capsules.forEach(capsule => {
                    const { capsule_serial, details } = capsule;
                    html += Capsule.getHtml({ serial: capsule_serial, details: details});
                });
                this.shadowRoot.innerHTML = html;
            });
    }

    static get html(){
        return "<x-capsules></x-capsules>";
    }
};
customElements.define('x-capsules', Capsules);
