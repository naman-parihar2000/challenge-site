import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import AccSettings from "./components/AccSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/accountSettings",
    element: <AccSettings />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
