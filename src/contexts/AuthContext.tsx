import { createContext } from "react";
import { UserData } from "./UserContext";

type AuthContextProps = {
    isLogged: boolean;
    user: UserData | null;
    login: (userData: UserData | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isLogged: false,
    user: null,
    login: () => {},
    logout: () => {},
});

export default AuthContext