# Nano React App Default Javascript Template
The default template project for [nano-react-app](https://github.com/G51DHU/template-js).

---

>**Note:**

  - ".js" files wont be parsed as JSX, so make sure to rename  JS files containing JSX syntax to end with ".jsx" instead of ".js".
---

## NPM

  - `npm start` — This will spawn a development server with a default port of `3000`.

  - `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 1234
```

Or edit the `start` script directly:

```
vite --port 1234
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## What is Vite?

Vite is a frontend tool

> Some features are
- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 📦 Optimized Build
- 🔑 Fully Typed APIs

[Read the Docs to Learn More](https://vitejs.dev).


# Purpose of each file.
When starting out a project, it's always a good idea to get an idea of the file structure.
So you should know what each file does, and the general location for where files go.

## [Vite.config.js](https://vitejs.dev/config/)
[<span style="color:lightblue">Helpful link 1</span>](https://vitejs.dev/config/) |

When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root.

## [Package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

[<span style="color:lightblue">Helpful link 1</span>](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) |
[<span style="color:lightblue">Helpful link 2</span>](https://nodejs.dev/learn/the-package-json-guide) |
[<span style="color:lightblue">Helpful link 3</span>](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

This file contains information about a project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information and even configuration data.

## [Index.html](https://www.thoughtco.com/index-html-page-3466505)

[<span style="color:lightblue">Helpful link 1</span>](https://www.thoughtco.com/index-html-page-3466505) | [<span style="color:lightblue">Helpful link 2</span>](https://discuss.codecademy.com/t/purpose-of-index-page-s/337540/2) |

This file acts as the entry into the whole website. 
When the application starts this is the first page that is loaded. This file has a line of code ```<div id=”root”></div>```. This line is very significant since all the application components are loaded into this div.

## App.jsx

This file is like the gateway to the rest of the project. It encapsulates everything else you want and need, like other components. 

Unlike "`npm create-react-app`", with "`npm nano-react-app`" the "index.jsx" and the "app.jsx" have been combined, so that `ReactDOM.render` is now inside of `App.jsx` instead of a seperate `index.jsx` file.