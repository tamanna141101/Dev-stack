# 🚀 Dev Stack Builder

Dev Stack Builder is a modern and responsive web application where users can explore different technologies and build their own technology stack.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JSON

## ✨ Features

- Browse different technologies with details and ratings.
- Add technologies to your own stack.
- Prevent duplicate technologies and multiple technologies from the same category.
- Fully responsive design for mobile, tablet, and desktop.
- Toast notifications for user actions.

## 📸 Project Preview

![Dev Stack Builder](public/Dev_Stack.JPG)
![Dev Stack Builder](public/Dev_Stack2.JPG)
![Dev Stack Builder](public/Dev_Stack3.JPG)

## 🔗 Links

- Live Website: [YOUR_LIVE_LINK](https://dev-stack-lime.vercel.app/)
- GitHub Repository: https://github.com/tamanna141101/Dev-stack



## React Questions & Answers

### **1. What is JSX, and why is it used in React?**

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI components easily.

### **2. What is the difference between props and state?**

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

### **3. What does the `useState` hook do, and where did you use it in this project?**

`useState` is used to store and update data in a component. In this project, I used it to manage the selected technologies in my stack.

### **4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code when certain things happen in a component, such as when it first loads. I used it to fetch and load the technology data from the JSON file when the app started.

### **5. Why does every item in a `.map()` list need a unique `key` prop?**

A unique `key` helps React identify each item in a list. It allows React to update the list efficiently when items are added, removed, or changed.

### **6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on a condition. In this project, I used it to show an **empty stack message** when no technology has been selected.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList stack={stack} />
)}
```

### **7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent sends data to a child using **props**. A child can send data back by calling a **function passed from the parent through props**.

```jsx
// Parent
<TechnologyCard technology={tech} onAdd={handleAdd} />

// Child
onAdd(technology);
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
