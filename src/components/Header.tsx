import {Button, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router";
import {LOGIN_PATH, USER_SESSIONS_PATH} from "../utils/routes.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/store.ts";
import {clearCredentials} from "@/features/auth/authSlice.ts";
import {useLogoutMutation} from "@/features/auth/authApiSlice.ts";

const Header = () => {
    const user = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const [logout] = useLogoutMutation()

    return (
        <Navbar className="mb-3 py-2 shadow-lg">
            <div className="d-flex w-100 mx-3">
                <Navbar.Brand
                    className="d-flex align-items-center text-dark text-decoration-none gap-1"
                    href="/"
                >
                    {/*<img src={HEADER_LOGO_SVG} alt="logo" height="40" width="40" />*/}
                    {/*<span>{HEADER_TITLE}</span>*/}
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {/* Если пользователь авторизован */}
                    {user.email && (
                        <>
                            <a
                                className="a-session text-decoration-none border border-blue rounded py-1 px-2 me-1"
                                href={USER_SESSIONS_PATH}
                            >
                                Сессии
                            </a>
                            <NavDropdown title={user.username} id="basic-nav-dropdown">
                                <NavDropdown.Item href={USER_SESSIONS_PATH}>
                                    Сессии
                                </NavDropdown.Item>
                                {/*<NavDropdown.Item href={PROFILE_PATH}>Профиль</NavDropdown.Item>*/}

                                <NavDropdown.Divider/>
                                <NavDropdown.Item
                                    href="/"
                                    onClick={async () => {
                                        logout({})
                                            .then(() => {
                                                dispatch(clearCredentials())
                                            })
                                            .catch((e) => {
                                                console.log(e)
                                            })

                                    }}
                                >
                                    Выйти
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                    )}
                    {!user.email && (
                        <Link className="btn btn-outline-primary" to={LOGIN_PATH}>
                            Войти
                        </Link>
                    )}
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
