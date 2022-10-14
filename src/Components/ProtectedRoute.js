import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        // kullanıcı kimliği doğrulanmadı
        return <Navigate to="/" />;
    }
    return children;
};