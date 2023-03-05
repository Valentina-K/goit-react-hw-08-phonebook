import {useSelector} from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing,selectRefreshUserError,selectLoginError,selectRegisterError } from "redux/auth/selectors";
export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const refreshError = useSelector(selectRefreshUserError);
    const registerError = useSelector(selectRegisterError);
    const loginError = useSelector(selectLoginError);
    return {
        user,
        isLoggedIn,
        isRefreshing,
        refreshError,
        registerError,
        loginError
    };
};