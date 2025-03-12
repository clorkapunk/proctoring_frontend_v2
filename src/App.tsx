import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import './App.scss'
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Layout from "./components/Layout.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import {HOME_PATH, LOGIN_PATH, SESSION_PATH, USER_SESSIONS_PATH} from "./utils/routes.ts";
import UserSessions from "./pages/UserSessions.tsx";
import Session from "./pages/Session.tsx";
import PersistLogin from "@/components/PersistLogin.tsx";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>

                    <Route path={LOGIN_PATH} element={<Login/>}/>
                    <Route element={<PersistLogin/>}>
                        <Route path={HOME_PATH} element={<Home/>}/>

                        <Route element={<RequireAuth allowedRoles={[]}/>}>
                            <Route path={USER_SESSIONS_PATH} element={<UserSessions/>}/>
                            <Route path={SESSION_PATH} element={<Session/>}/>
                            <Route path={'*'} element={<Navigate to={HOME_PATH}/>}/>
                        </Route>
                    </Route>

                    <Route path={'*'} element={<Navigate to={LOGIN_PATH}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
