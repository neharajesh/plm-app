import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ArticleProvider } from "./context/ArticleContext"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <ArticleProvider>
          <AuthProvider>
            <TodoProvider>
              <App />
            </TodoProvider>
          </AuthProvider>
        </ArticleProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
