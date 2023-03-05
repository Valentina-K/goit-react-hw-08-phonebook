export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectRefreshUserError = state => state.auth.error;
export const selectLoginError = state => state.auth.loginErr;
export const selectRegisterError = state => state.auth.registerErr;