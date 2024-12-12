import DealForm from "@/components/DealForm";

export default function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen p-8 pb-20 gap-2 sm:p-2 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-2 row-start-2 items-center sm:items-start'>
				<DealForm />
			</main>
		</div>
	);
}
