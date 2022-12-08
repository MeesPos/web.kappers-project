import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const ResetPassword: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        password: '',
        password_repeat: ''
    })

    const [errors, setErrors] = useState<Array<any>>([])

    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (userInfo.password !== userInfo.password_repeat || userInfo.password === '') {
            const errorMessage = 'Wachtwoord moet het hetzelfde zijn'
            if (errors.indexOf(errorMessage) === -1) {
                setErrors([errorMessage]);
            }

            return;
        }
        
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/reset-password', {
            method: "POST",
            body: JSON.stringify({
                password: userInfo.password,
                token: router.query.token,
                email: router.query.email
            }),
            headers: { 
              "Content-Type": "application/json" 
            }
        })

        if (res.status === 498) {
            const errorMessage = 'De token is ongeldig'
            if (errors.indexOf(errorMessage) === -1) {
                setErrors([errorMessage]);
            }
        } else if(res.status === 400) {
            setErrors(await res.json());            
        } else {
            router.push('/login');
        }
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white m-auto w-3/12 p-8 rounded-xl">
            <h1 className="text-center text-4xl font-bold mb-6">Marjolein <br /> knip knip</h1>

            <div className="text-red-500 mb-6">
                <ul>
                    {errors?.map((error: any, index: any) => <li key={index}>{error}</li>)}
                </ul>
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Wachtwoord</label>

                <input name="password"
                    id="password"
                    className="border-2 border-gray-200 py-2 mt-1 rounded-md pl-2"
                    type="password"
                    value={userInfo.password}
                    onChange={({ target }) =>
                        setUserInfo({
                            ...userInfo,
                            password: target.value
                        })
                    }
                />
            </div>

            <div className="flex flex-col mt-8">
                <label htmlFor="password">Herhaal wachtwoord</label>

                <input name="password_repeat"
                    id="password_repeat"
                    className="border-2 border-gray-200 py-2 mt-1 rounded-md pl-2"
                    type="password"
                    value={userInfo.password_repeat}
                    onChange={({ target }) =>
                        setUserInfo({
                            ...userInfo,
                            password_repeat: target.value
                        })
                    }
                />
            </div>

            <button type="submit" className="bg-indigo-500 w-full py-3 text-white text-md font-bold rounded-md mt-8">Reset Wachtwoord</button>
        </form>
    </div>
}

export default ResetPassword;