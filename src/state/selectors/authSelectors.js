export const getIsAuthenticated = (state) => state.auth.isAuthenticated

export const getRegisterBegin = (state) => state.auth.registerBegin

export const getRegisterError = (state) => state.auth.registerError

export const getLoginBegin = (state) => state.auth.loginBegin

export const getLoginError = (state) => state.auth.loginError

export const getVerifyStatus = (state) => state.auth.verifyBegin

export const getAuthUid = (state) => state.auth.user.uid

export const getLogoutBegin = (state) => state.auth.loginOutBegin
