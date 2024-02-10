import React from "react";
import { UserContextType, UserInfo } from "../model/userTypes";


export const UserContext = React.createContext<UserContextType>({
    user: null,
})