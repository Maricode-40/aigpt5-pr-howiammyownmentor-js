//js/challenge1

export function init(root) {
  root.innerHTML = `
     <button id="ask-btn">Click me</button>
     <p>Opens a prompt and greets in English.</p> 
  `;

  function askName() {
    let name = prompt("What is your name?");
    if (name && name.trim() !== "") {
      alert(`Hello, ${name.trim()}! Welcome to the world of JavaScript 🌎`);
      // console.log(`Greeted: ${name.trim()}`);
    } else {
      alert("Please enter a valid name.");
    }
  }

  const btn = root.querySelector("#ask-btn");
  btn.addEventListener("click", askName);
}
