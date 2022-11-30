import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";

const ForgotPassword: NextPage = () => {
    const [userInfo, setUserInfo] = useState({
        email: ''
    })

    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/forgot-password', {
            method: "POST",
            body: JSON.stringify({
                email: userInfo.email,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res?.status === 200) {
            setSuccessMessage('Er is een mail verstuurd naar het e-mailadres met de vervolgstappen voor het resetten van je e-mailadres.');
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            {
                successMessage !== ''
                    ? <p>{successMessage}</p>
                    : ''
            }
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