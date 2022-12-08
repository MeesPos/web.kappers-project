import { NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";


const Dashboard: NextPage = () => {
	const { data } = useSession();

    console.log(data);

    if (!data) {
        return <p>Access denied</p>
    }

    return <h1>HOI</h1>;
}

export default Dashboard;