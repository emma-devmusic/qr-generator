import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Generator } from "../pages/Generator";
import { Reader } from "../pages/Reader";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <h1>Bienvenido</h1>,
            },
            {
                path: "/generator",
                element: <Generator />,
            },
            {
                path: "/reader",
                element: <Reader />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);