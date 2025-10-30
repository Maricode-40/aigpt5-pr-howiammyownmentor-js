// js/challenges/challenge2_dom.js
export function init(root) {
  root.innerHTML = `
    <button id="ask-btn">Click me</button>
    <p id="greeting" style="margin-top: .5rem;"></p>
  `;

  function askName() {
    const output = root.querySelector("#greeting");
    const name = prompt("What is your name?");
    if (name && name.trim() !== "") {
      const message = `Hello, ${name.trim()}! Welcome to the world of JavaScript 🌎`;
      output.textContent = message;
      console.log(`Greeted: ${name.trim()}`);
    } else {
      output.textContent = "Please enter a valid name.";
    }
  }

  root.querySelector("#ask-btn").addEventListener("click", askName);
}
