# react-todo-list
Yet another todo list project made with React.

![screenshot](https://github.com/AndyKhang404/react-todo-list/blob/main/screenshot.png?raw=true)

This project uses:
- [Vite](https://vitejs.dev/) to quickly setup a fast development environment
- [React](https://react.dev/) for interactive UI
- [Bootstrap](https://getbootstrap.com/) (and [Bootstrap Icons](https://icons.getbootstrap.com/)) for uniform, responsive styling
- [Dexie](https://dexie.org/) as a minimalistic wrapper for IndexedDB
- [Typescript](https://www.typescriptlang.org/) as a (subjectively better) superset of Javascript

---

### Install

After cloning this repo, run:
```
npm install
```
to install all dependencies of the project.

---

### Build

- For developing or testing, run:
```
npm run dev
```
to enable hot reload.

- When it's time to build, run:
```
npm run build
```
Vite will automatically build and output to `dist/` directory. If you want to change the output directory or any build configuration in general, consult [Vite config](https://vitejs.dev/config/) page.

---

### Run
You can use
```
npm run preview
```
to preview the built project or (since this is basically a static site) any http server to serve the `index.html` file in the `dist/` directory. 

For example, python `http.server` module:
```
python -m http.server 8000 --directory dist
```
to serve the page at localhost, port 8000