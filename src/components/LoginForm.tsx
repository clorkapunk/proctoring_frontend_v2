
import {Button, Form} from "react-bootstrap";
import {FormEvent, useState} from "react";
import {useLoginMutation} from "@/features/auth/authApiSlice.ts";
import {useLocation, useNavigate} from "react-router";
import {HOME_PATH} from "@/utils/routes.ts";
import {useDispatch} from "react-redux";
import {setCredentials} from "@/features/auth/authSlice.ts";
import {useGetUserInfoMutation} from "@/features/user/userApiSlice.ts";

const LoginForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || HOME_PATH
    const dispatch = useDispatch()

    const [error, setError] = useState<string>('')

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [login, {isLoading}] = useLoginMutation()
    const [userInfo] = useGetUserInfoMutation()

    const onSubmitAuth = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        setError('')


        try {
            await login({email, password}).unwrap()
            navigate(from, {replace: true})
        } catch (e: any) {
            setError(e.response.data.error)
        }
    }

    return (

        <Form onSubmit={onSubmitAuth}>
            <Form.Group className="mb-2">
                <Form.Control
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <div className="text-danger">{error}</div>
            </Form.Group>
            <Form.Group>
                <Button type="submit" className="w-100" variant="primary" >
                    {isLoading ? "Loading..." : "Войти"}
                </Button>
            </Form.Group>
        </Form>
    )
}

export default LoginForm;
