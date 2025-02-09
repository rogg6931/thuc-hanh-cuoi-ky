import React from "react";
import { UserContext, user } from "../contexts/UserContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider