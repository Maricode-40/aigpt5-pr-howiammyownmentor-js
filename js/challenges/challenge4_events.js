export function init(root) {
    root.innerHTML = `
    <form id="userForm">
   <input type="text" id="name" placeholder="Enter your name"/>
   <input type="number" id="age" placeholder="Enter your age"/>
   <button type="submit">Submit</button>
   <p id="message"> </p>
    </form>
    `;
    
    const form = root.querySelector("form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");

    }
}