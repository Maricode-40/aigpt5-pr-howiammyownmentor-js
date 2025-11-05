
💬 *Status:* Module 1  complete — you’ve built a dynamic loader, practiced modular imports, and learned modern declaration standards (`let` & `const`  and `function` ).  

💬 *Status: Module 2 complete — Challenge 2: Dynamic DOM & Module Loader.  
✅ What you built --- A modular JavaScript app architecture that dynamically loads exercises (challenges) from separate JS files — no page reloads, just smart module imports.

| Type                    | Example                                         | Meaning / Tip                                                  |
| ----------------------- | ----------------------------------------------- | -------------------------------------------------------------- |
| **DOM elements**        | `const appEl = document.getElementById("app");` | Use `El`, `Btn`, `Input`, etc. suffixes to mark HTML elements. |
| **Objects / modules**   | `const app = { init() {}, routes: {} };`        | Use generic nouns — no suffix — for JS data or logic.          |
| **Booleans**            | `let isLoading = true;`                         | Start with `is`, `has`, `can`, or `should`.                    |
| **Functions**           | `function loadChallenge() {}`                   | Use verbs (`get`, `set`, `show`, `render`, `update`, etc.).    |
| **Constants / Configs** | `const API_URL = "https://...";`                | Use uppercase with underscores for fixed values.               |
| **Arrays**              | `const usersList = [];`                         | End with `List`, `Array`, or plural noun.                      |
| **Event handlers**      | `btn.addEventListener("click", handleClick);`   | Prefix with `on` or `handle`.                                  |
| **Temporary variables** | `let i = 0;`, `let tempResult = …;`             | Keep short and context clear.                                  |
| **Files / modules**     | `challenge1_prompt.js`                          | lowercase, words separated by `_` or `-`.                      |
| **CSS IDs / classes**   | `id="app"` / `class="button-primary"`           | lowercase, hyphen-separated (`kebab-case`).                    |


## 🧩 Recap — Module 1: Fundamentals + Dynamic Imports

| Concept                         | What you did                                   | Why it matters                                 |
| ------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| **Dynamic import (`import()`)** | Loaded JS modules based on `<select>` value    | Enables modular design & lazy loading          |
| **Routes map**                  | Object mapping IDs → import functions          | Mimics a lightweight router system             |
| **DOM manipulation**            | Injected HTML dynamically via `root.innerHTML` | Practiced interactive UI updates               |
| **Error handling**              | `try...catch` + fallback messages              | Built debugging resilience                     |
| **Event listeners**             | Reacted to user input (`change`, `click`)      | Key for reactive front-end logic               |
| **Naming clarity**              | Used `appEl`, `statusEl`, etc.                 | Aligned with modern clean coding standards     |
| **Debugging with DevTools**     | Used logs & MIME/type tracing                  | Learned to interpret real-world console errors |

---

### ⚙️ `let`, `const`, and `function` — Modern Declaration Rules (2025)

| Keyword | Type | Scope | Reassignable | Hoisted | Best Practice |
|----------|------|--------|---------------|----------|----------------|
| **`const`** | Variable | Block | ❌ No | ✅ Yes (TDZ applies) | Default for all values that never change |
| **`let`** | Variable | Block | ✅ Yes | ✅ Yes (TDZ applies) | Use only when you must reassign |
| **`function`** | Function | Block (ES6+) | ✅ N/A | ✅ Yes (full hoisting) | Use for reusable actions; define at top level when possible |
| **`var`** | Variable | Function | ✅ Yes | ✅ Yes (unsafe) | 🚫 Deprecated — causes scope leaks & confusion |

---

### 🧠 Notes

- **Function declarations** are *hoisted* — you can call them before their definition.  
- **Arrow functions** and **function expressions** (assigned to `const` or `let`) are *not hoisted*:
  ```js
  // ✅ Works (hoisted)
  greet();
  function greet() { console.log("Hi!"); }

  // ❌ Error: Cannot access before initialization
  sayHi();
  const sayHi = () => console.log("Hi!");


### 🚫 `var` is Dead — Modern JS Rule (2025)

| Keyword | Use Case | Notes |
|----------|-----------|-------|
| `const`  | Default choice | Safer, immutable reference, preferred by all modern frameworks |
| `let`    | When reassignment is needed | Clear, block-scoped, predictable |
| `var`    | ❌ Legacy only | Function-scoped, hoisted, causes bugs & tech debt |

In 2025 codebases:

Use const + arrow functions for inline handlers or callbacks.

Use function declarations for reusable logic or exported utilities.

🧭 Rule of thumb:

Declare functions first, then variables (const / let).
Never use `var`. Ever.
 
> Start with `const`. Use `let` only if you must reassign.  
> `var` belongs to legacy code — not new projects.

---