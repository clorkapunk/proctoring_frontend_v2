
// import {LOGIN_ROUTE} from "@/utils/routes.ts";
// import {useSelector} from "react-redux";
// import {selectAuthState, } from "@/features/auth/authSlice.ts";
import {Navigate, Outlet} from "react-router";
import {LOGIN_PATH} from "../utils/routes.ts";


const RequireAuth = ({allowedRoles}: { allowedRoles: number[] }) => {
    // const authState = useSelector(selectAuthState)
    // const location = useLocation()
    const user = allowedRoles

    return (
        user ?
            <Outlet/>
            :
            <Navigate to={LOGIN_PATH} replace/>
        // allowedRoles.some(role => role === authState?.role)
        //     ? <Outlet/>
        //     : authState?.token
        //         ? <Navigate to={`/unauthorized`} state={{from: location}} replace/>
        //         : <Navigate to={LOGIN_ROUTE} state={{from: location}} replace/>
    );
};

export default RequireAuth;
