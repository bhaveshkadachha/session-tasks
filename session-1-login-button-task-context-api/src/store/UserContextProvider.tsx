import React, { useState } from "react";
import UserContext from "./store";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../services/storageService";
import type { User } from "../common/interface/common-interface";

function UserContextProvider(props: { children: React.ReactNode }) {
  const userLoginData: {
    isLogin: boolean;
    email: string;
    password: string;
  } = JSON.parse(getDataFromLocalStorage("isLogin"));

  console.log(userLoginData);
  console.log(userLoginData?.isLogin);
  
  const [isUserLogin, setIsUserLogin] = useState<boolean>(userLoginData?.isLogin ?userLoginData?.isLogin: false);

  const loginHandler = (userData: User) => {
    setIsUserLogin(true);
    setDataToLocalStorage(
      "isLogin",
      JSON.stringify({
        isLogin: true,
        email: userData.email,
        password: userData.password,
      })
    );
  };

  const logoutHandler = () => {
    setDataToLocalStorage("isLogin", JSON.stringify({ isLogin: false }));
    setIsUserLogin(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLogin: isUserLogin,
        email: (userLoginData && userLoginData.isLogin) ? userLoginData.email : undefined,
        password: (userLoginData && userLoginData.isLogin) ? userLoginData.password : undefined,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
