function askName() {
  let name = prompt("What is your name?");
  if (name && name.trim() !== "") {
    alert(`Hello, ${name.trim()}! Welcome to the world of JavaScript 🌎`);
    console.log(`Said hello to: ${name.trim()}`);
  } else {
    alert("Please enter a valid name.");
  }
}
const btn = document.getElementById(`ask-btn`);
if (btn) btn.addEventListener(`click`, askName);
