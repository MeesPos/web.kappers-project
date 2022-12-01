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

    return <div className="h-screen w-screen bg-gray-100 flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white m-auto w-3/12 p-8 rounded-xl">
            <h1 className="text-center text-4xl font-bold mb-6">Marjolein <br /> knip knip</h1>

            {error ? <p className="text-red-500 mb-6">{error}</p> : null}

            <div className="flex flex-col">
                <label htmlFor="email">E-mailadres</label>

                <input name="email"
                    id="email" 
                    className="border-2 border-gray-200 py-2 mt-1 rounded-md pl-2"
                    value={userInfo.email}
                    onChange={({ target }) => 
                        setUserInfo({
                            ...userInfo,
                            email: target.value
                        })
                    }
                />
            </div>

            <div className="flex flex-col mt-8">
                <label htmlFor="password">Wachtwoord</label>

                <input name="password"
                    type="password"
                    className="border-2 border-gray-200 py-2 mt-1 rounded-md pl-2"
                    value={userInfo.password}
                    onChange={({ target }) =>
                        setUserInfo({
                            ...userInfo,
                            password: target.value
                        })
                    }
                />
            </div>

            <div className="text-right mt-1">
                <a href="/forgot-password" className="text-indigo-500 font-medium">Wachtwoord vergeten?</a>
            </div>

            <button type="submit" className="bg-indigo-500 w-full py-3 text-white text-md font-bold rounded-md mt-4">
                Inloggen
            </button>
        </form>
    </div>
}

export default Login;