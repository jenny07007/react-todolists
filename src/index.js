import React from "react";
import { createRoot } from "react-dom/client";

import { TodoList } from "./TodoList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
