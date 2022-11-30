import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const ResetPassword: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        password: '',
        password_repeat: ''
    })

    const [errors, setErrors] = useState<Array>([])

    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (userInfo.password !== userInfo.password_repeat) {
            const errorMessage = 'Passwords are not the same'
            if (errors.indexOf(errorMessage) === -1) {
                setErrors([...errors, errorMessage]);
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
        } else {
            router.push('/login');
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                {errors.map((error: string, index: string) => <p key={index}>{error}</p>)}
            </div>
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

            <input name="password_repeat"
                type="password"
                value={userInfo.password_repeat}
                onChange={({ target }) =>
                    setUserInfo({
                        ...userInfo,
                        password_repeat: target.value
                    })
                }
            />

            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ResetPassword;