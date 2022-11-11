import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    setToken: () => {}
})

export default AuthContext