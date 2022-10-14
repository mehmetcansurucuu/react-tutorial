import { useRoutes } from "react-router-dom";

export default function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ]);
    return routes;
}