import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import LoginLayout from "./layouts/LoginLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Join from "./pages/Join.jsx";
import Login from "./pages/Login.jsx";
import Donate from "./pages/Donate.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/join", element: <Join/>},
      { path: "/donate", element: <Donate/>}
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
        { path: "/login", element: <Login/> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;