import {Outlet} from "react-router";
import Header from "./Header.tsx";


const Layout = () => {


    return (
        <main className={'min-vh-100'}>
            <Header/>
            <Outlet/>
        </main>
    );
};

export default Layout;
