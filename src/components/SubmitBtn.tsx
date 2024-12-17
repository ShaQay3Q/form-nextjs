"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
	const { pending } = useFormStatus();

	return (
		<button className='bg-pink-600 w-full rounded-md p-2 mt-5 text-lg font-bold uppercase tracking-wider hover:bg-pink-700'>
			{pending ? "Submitting..." : "Submit"}
		</button>
	);
}
