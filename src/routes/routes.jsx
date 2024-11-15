import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayouts from "../layouts/AuthLayouts";
import Home from "../pages/Home";
import News from "../pages/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts />,
    children: [
      { 
        path: "/auth/login", 
        element: <h1>this is login page</h1> },
      {
        path: "/auth/signup",
        element: <h1>this is signup page</h1>,
      },
    ],
  },
]);

export default routes;
