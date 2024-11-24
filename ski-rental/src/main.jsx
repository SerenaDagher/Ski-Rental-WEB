
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// Define routes with just HomePage
const router = createBrowserRouter([
  { path: "/", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <UserProvider>
              <RouterProvider router={router} />
          </UserProvider>
      </ThemeProvider>
  </React.StrictMode>
);


