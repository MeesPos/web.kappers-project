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

    return <div className="h-screen w-screen bg-gray-100 flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white m-auto w-3/12 p-8 rounded-xl">            
            <h1 className="text-center text-4xl font-bold mb-6">Marjolein <br /> knip knip</h1>
            
            {successMessage ? <p className="text-green-600 mb-6">{successMessage}</p> : null}

            <div className="flex flex-col">
                <label htmlFor="email">E-mailadres</label>

                <input name="email"
                    id="email"
                    className="border-2 border-gray-200 py-2 pl-2 mt-1 rounded-md"
                    value={userInfo.email}
                    onChange={({ target }) =>
                        setUserInfo({
                            ...userInfo,
                            email: target.value
                        })
                    }
                />
            </div>
            

            <button type="submit" className="bg-indigo-500 w-full py-3 text-white text-md font-bold rounded-md mt-8">
                Verstuur reset linkx
            </button>
        </form>
    </div>
}

export default ForgotPassword;