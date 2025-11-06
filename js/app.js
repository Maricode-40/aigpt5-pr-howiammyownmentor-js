// js/app.js -dynamic loader for challenge modules

const selectEl = document.getElementById("challenge");
const appEl = document.getElementById("app");
const statusEl = document. getElementById("status");

//Map id -> dynamic import
const routes = {
    challenge1_prompt: () => import("./challenges/challenge1_prompt.js"),
    challenge2_dom:     () => import("./challenges/challenge2_dom.js"),
};

async function loadChallenge(id) {
    appEl.innerHTML = "Loading...";           // dynamic import
    statusEl.textContent = "";                 //clear placeholder
    try {
        const mod = await routes[id]();
        // console.log("Selected ID:", id);
        // console.log("Available routes:", Object.keys(routes));

        appEl.innerHTML = "";
        mod.init(app);
        statusEl.textContent = `Loaded: ${id}`;
    } catch (err) {
        appEl.innerHTML = "";
        statusEl.textContent = "Error loading challenge.";
        console.error(err);
    }
}

loadChallenge(selectEl.value);
selectEl.addEventListener("change", (e) => loadChallenge(e.target.value)); 