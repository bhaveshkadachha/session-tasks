import { createContext } from "react";
import type { User } from "../common/interface/common-interface";

interface UserContextType {
    isLogin: boolean,
    email?: string,
    password?: string,
    onLogin:(userData: User)=> void,
    onLogout:()=>void
}

const UserContext = createContext<UserContextType>({
    isLogin: false,
    onLogin: (userData: User)=>{},
    onLogout: ()=>{}
})
export default UserContext
