import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>not found</div>,
        children: [
            {
                path: "/",
                element: <Register />,
            },
            {
                path: "/home",
                element: <Home />
            },
        ]
    }
])
