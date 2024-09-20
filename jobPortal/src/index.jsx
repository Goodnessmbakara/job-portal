import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { Homepageemp } from "./screens/Homepageemp";
import { Homepage } from "./screens/Homepage";
import { Login } from "./screens/Login";
import { Registerjs } from "./screens/Registerjs";
import { Registeremp } from "./screens/Registeremp";
import { RegisterScreen } from "./screens/RegisterScreen";
import { Profile } from "./screens/Profile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      console.log("ScrollToTop component triggered");
      console.log(pathname);
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepageemp />,
    },
    {
      path: "/Homepage",
      element: <Homepage />
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Registerjs",
        element: <Registerjs/>
    },
    {
        path: "/Registeremp",
        element: <Registeremp/>
    },
    {
        path: "/Register",
        element: <RegisterScreen/>
    },
    {
        path: "/Profile",
        element: <Profile/>
    },
  ]);
  
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </React.StrictMode>
  );
  
