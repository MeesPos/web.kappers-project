import { NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";


const Dashboard: NextPage = () => {
	const { status, data } = useSession();

    console.log(data);

    return <h1>HOI</h1>;
}

export default Dashboard;