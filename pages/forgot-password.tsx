import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";

const ForgotPassword: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        email: ''
    })

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/forgot-password', {
            method: "POST",
            body: JSON.stringify({
              email: userInfo.email,
            }),
            headers: { 
              "Content-Type": "text/plain" 
            }
          })

            await res.json()
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input name="email"
                value={userInfo.email}
                onChange={({ target }) =>
                    setUserInfo({
                        ...userInfo,
                        email: target.value
                    })
                }
            />

            <button type="submit">
                Login
            </button>
        </form>
    </div>
}

export default ForgotPassword;