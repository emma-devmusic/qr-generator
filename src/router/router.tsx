import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Generator } from "../pages/Generator";
import { Reader } from "../pages/Reader";
import { Login } from "../pages/Login";
import { Welcome } from '../pages/Welcome';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Welcome />,
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