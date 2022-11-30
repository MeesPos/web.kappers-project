import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";

const Login: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState<string>('');

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email: userInfo.email,
            password: userInfo.password,
            callbackUrl: '/dashboard',
        });

        if (res?.status === 401) {
            setError('Onjuist e-mailadres en wachtwoord.')
        } else {
            router.push('/dashboard')
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            {error ? <p>{error}</p> : null}

            <input name="email" 
                   value={userInfo.email}
                   onChange={({ target }) => 
                    setUserInfo({
                        ...userInfo,
                        email: target.value
                    })
                }
            />

            <input name="password"
                   type="password"
                   value={userInfo.password}
                   onChange={({ target }) =>
                    setUserInfo({
                        ...userInfo,
                        password: target.value
                    })
                }
            />

            <button type="submit">
                Login
            </button>
        </form>
    </div>
}

export default Login;