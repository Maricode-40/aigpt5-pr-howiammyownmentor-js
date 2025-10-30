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
