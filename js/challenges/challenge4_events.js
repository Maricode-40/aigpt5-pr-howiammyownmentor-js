export function init(root) {
  root.innerHTML = `
    <form id="userForm">
   <input type="text" id="name" placeholder="Enter your name"/>
   <input type="number" id="age" placeholder="Enter your age"/>
   <button type="submit">Submit</button>
   <p id="message"> </p>
    </form>
    `;

  const form = root.querySelector("#userForm");
  const nameInput = root.querySelector("#name");
  const ageInput = root.querySelector("#age");
  const message = root.querySelector("#message");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Form submitted");

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    message.textContent = `Hello, ${name}! you are ${age} years old.`;
  }
}
