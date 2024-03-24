import React from "react";
import { UserContextType } from "../model/userTypes";


export const UserContext = React.createContext<UserContextType>({
    user: null,
})