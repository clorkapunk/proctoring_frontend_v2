import {Col} from "react-bootstrap";
import {OPENID_AUTH_URL} from "@/utils/urls.ts";
import LoginForm from "@/components/LoginForm.tsx";





const Login = () => {

    // const [searchParams] = useSearchParams();


    return (
        <div className="d-flex justify-content-center my-auto">
            <Col xs={10} sm={8} md={6} lg={4} xl={3}>
                <div className="px-2 py-3 shadow w-100 d-flex justify-content-center">
                    <div className="d-flex flex-column gap-2 w-75">
                        <h2 className="mb-1 text-center">Войти</h2>
                        {/*{searchParams.get("form") !== null && <LoginForm/>}*/}
                        <LoginForm/>
                        <a
                            href={OPENID_AUTH_URL}
                            className="btn btn-outline-primary d-flex justify-content-center align-items-center gap-1"
                        >
                            Microsoft Auth
                        </a>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Login;
