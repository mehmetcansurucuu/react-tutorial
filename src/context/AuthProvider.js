import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    // kullanıcının kimliğini doğrulamak istediğinizde bu işlevi çağırın
    const login = async (data) => {
        setUser(data);
        navigate("/profile");
    };

    // oturum açmış kullanıcının oturumunu kapatmak için bu işlevi çağırın
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};