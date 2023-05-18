import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allToys",
      },
      {
        path: "/myToys",
      },
      {
        path: "/addToys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blogs",
      },
    ],
  },
]);

export default router;
