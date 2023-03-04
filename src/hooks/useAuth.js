import {useSelector} from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing,selectUserError } from "redux/auth/selectors";
export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const authError = useSelector(selectUserError);
    return {
        user,
        isLoggedIn,
        isRefreshing,
        authError,
    };
};