export async function readFile(relativeFilePath) {
    return await new Response((await fetch(relativeFilePath)).body, {
        headers: {
            "Content-Type": "text/plain"
        }
    }).text();
}

export function createTemplate(css, html, data) {
    return `<style>${css}</style>` + Object.keys(data).reduce((prev, key) =>  prev.replace(`{{${key}}}`, data[key]), html);
}
