export function init(root) {
  root.innerHTML = `
     <button id="ask-btn"> Start Challenge 3 </button>
     <p id="output"></p>
     `;

  const btn = root.querySelector("#ask-btn");
  btn.addEventListener("click", runChallenge);

  function runChallenge() {
    const outputEl = root.querySelector("#output");
    const name = prompt("What is your name?");
    const language = prompt("What´s your favorite programming language?");

    if (!name || !language) {
      console.warn("Please provide both name and language!");
      return;
    }
    const message = `Hello, ${name.trim()}! You like ${language.trim()} - great choice!🚀`;
    outputEl.textContent = message;
  }
}
