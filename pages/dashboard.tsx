import { NextPage } from "next";
import { useSession } from "next-auth/react";


const Dashboard: NextPage = () => {
	const { status, data } = useSession();

    console.log(status, data);

    return <h1>HOI</h1>;
}

export default Dashboard;