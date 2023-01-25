import type { NextPage } from "next";
import AfspraakDetails from "../../components/AfspraakDetails";
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
	const [modal, setModal] = useState(false);
	const [afspraakDetails, setAfspraakDetails] = useState<Appointment>();
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

	function handleAfspraakClick(idx: number) {
		setModal(true);
		console.log(modal);
		setAfspraakDetails(afspraken![idx]);
	}
	if (status === "authenticated") {
		return (
			<>
				<DashboardWrapper title="Dashboard">
					<div className="bg-white rounded-lg m-1 col-span-2">
						{!afspraken ? (
							<Loading />
						) : (
							<EerstvolgendeAfspraken
								afspraken={afspraken}
								onAfspraakClick={handleAfspraakClick}
							/>
						)}
					</div>

					{modal ? (
						<AfspraakDetails
							afspraak={afspraakDetails!}
							setState={setModal}
						/>
					) : null}
				</DashboardWrapper>
			</>
		);
	}
	return <Loading />;
};
export default Dashboard;
