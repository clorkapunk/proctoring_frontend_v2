import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { setCredentials} from "@/features/auth/authSlice.ts";
import {useGetUserInfoMutation} from "@/features/user/userApiSlice.ts";
import {Outlet} from "react-router";


const PersistLogin = () => {
    const dispatch = useDispatch()
    const [userInfo, {isLoading}] = useGetUserInfoMutation()

    useEffect(() => {

        const verifyRefreshToken = async () => {
            try {
                const response = await userInfo({}).unwrap();
                // console.log(response)
                dispatch(setCredentials(response.user))
            } catch (err) {
                console.log(err)
            }
        }

        verifyRefreshToken().then(() => {})
    }, [])

    return (
        <>
            {
               isLoading
                ? <div><h1>Loading</h1></div>
                : <Outlet/>
            }

    </>
)

};

export default PersistLogin;
