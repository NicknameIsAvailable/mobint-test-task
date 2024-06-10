import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./home";
import {Layout} from "@/pages/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);