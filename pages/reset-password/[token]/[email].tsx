import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const ResetPassword: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        password: '',
        password_repeat: ''
    })

    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // if (userInfo.password !== userInfo.password_repeat) {
        //     return "Passwords are not the same";
        // }
        
        e.preventDefault();

        try {
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

            await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
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