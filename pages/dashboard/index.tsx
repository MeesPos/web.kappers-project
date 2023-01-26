import type { NextPage } from "next";
import { Search } from "iconoir-react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import EerstvolgendeAfspraken from "../../components/EerstvolgendeAfspraken";
import { Appointment } from "../../types/appointment.interface";
const Dashboard: NextPage = () => {
	const { status } = useSession();
	const router = useRouter();

	const [afspraken, setAfspraken] = useState<Appointment[]>();

	useEffect(() => {
		if (status === "unauthenticated") router.replace("/login");

		async function fetchAfspraken() {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/appointments`
			);
			if (res?.ok) {
				const afspraken = await res.json();
				setAfspraken(afspraken.data);
			}
		}
		if (status === "authenticated") fetchAfspraken();

		return;
	}, [status, router]);
	if (status === "authenticated") {
		return (
			<>
				<DashboardWrapper title="Dashboard">
					<div className="grid grid-cols-3">
						<div className="bg-white rounded-lg m-1 col-span-2">
							{!afspraken ? (
								<Loading />
							) : (
								<EerstvolgendeAfspraken afspraken={afspraken} />
							)}
						</div>
					</div>
				</DashboardWrapper>
			</>
		);
	}
	return <Loading />;
};
export default Dashboard;
