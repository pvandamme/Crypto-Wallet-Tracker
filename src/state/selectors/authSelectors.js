export const getIsAuthenticated = (state) => state.auth.isAuthenticated

export const getRegisterBegin = (state) => state.auth.registerBegin

export const getRegisterError = (state) => state.auth.registerError

export const getLoginBegin = (state) => state.auth.loginBegin

export const getLoginError = (state) => state.auth.loginError

export const getVerifyStatus = (state) => state.auth.verifyBegin
