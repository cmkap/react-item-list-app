# React App - Frontend App

## Overview

This is a simple React application that displays a list of items and allows users to add new items to the list.

## Instructions to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install

For Windows Command Prompt or PowerShell, you can use the same command.

2. **Run the Project:**
npm run dev


## Scripts

- `dev`: Run `vite` for development.
- `build`: Build the project using TypeScript and Vite.
- `lint`: Lint the code using ESLint.
- `preview`: Preview the production build using Vite.

## Dependencies

- **Main Dependencies:**
  - React
  - React DOM
  - React Hook Form
  - Bootstrap
  - Zod
  - @hookform/resolvers

- **Development Dependencies:**
  - TypeScript
  - Vite
  - ESLint
  - @typescript-eslint/parser
  - @typescript-eslint/eslint-plugin
  - @vitejs/plugin-react

## Requirements

### ItemList Component

- Accepts an array of items (strings) as a prop.
- Renders each item in an unordered list (`<ul>`).

### App Component

- Maintains an array of items in the state, initialized with sample items.
- Renders the `ItemList` component, passing the items from the state as props.
- Includes an input field for users to enter a new item and a button to add the item to the list.
- When the button is clicked, the new item is added to the list, and the input field is cleared.

### General

- Uses functional components and hooks (e.g., `useState`).
- Ensures the application is free of console errors and warnings.
- Code is clean, readable, and well-structured.





