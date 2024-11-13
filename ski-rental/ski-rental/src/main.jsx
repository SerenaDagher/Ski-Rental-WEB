import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Bootstrap CSS & JS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import CreateRental from "./components/CreateRental";
import RentalCard from "./components/RentalCard";
import ShowRentalDetails from "./components/ShowRentalDetails";
import ShowRentalList from "./components/ShowRentalList";
import UpdateRentalInfo from "./components/UpdateRentalInfo";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <ShowRentalList /> },
  { path: "/create-rental", element: <CreateRental /> },
  { path: "/rental/:id", element: <ShowRentalDetails /> },
  { path: "/edit-rental/:id", element: <UpdateRentalInfo /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);