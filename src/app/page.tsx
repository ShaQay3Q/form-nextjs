import DealFormServerAction from "@/components/DealFormServerAction";
import DealFromUseActionState from "@/components/DealFromUseActionState";

export default function Home() {
	return (
		<main className='flex flex-col max-w-2xl mx-auto justify-center min-h-screen items-center'>
			{/* <DealFromUseActionState /> */}
			<DealFormServerAction />
		</main>
	);
}
