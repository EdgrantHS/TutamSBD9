import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./UserProvider.jsx";  // Import the new UserProvider

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import NavBar from "./component/NavBar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Account from "./pages/Acount.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "movie/:movieId",
    element: <MovieDetail />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <UserProvider> 
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
