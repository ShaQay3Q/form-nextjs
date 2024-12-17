"use client";

import { formHandlerAction } from "@/app/_actions/formHandlerActionUseActionState";
import { DealFormState, StringMap } from "@/app/_types/dealServerAction";
import React, { useEffect, useRef } from "react";
import { useActionState } from "react"; // use this instead of import { useFormState } from "react-dom"; DEPRICATED

import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const initialState: DealFormState<StringMap> = {};
export default function DealFromUseActionState() {
	const formRef = useRef<HTMLFormElement>(null);

	// Progressive inhancement
	// instead of calling a function that calls the server action on the client side,
	// this will do it and works with progressive enhancement
	const [serverState, formAction] = useActionState(
		formHandlerAction,
		initialState
	);

	//! serverState => hanndles messages (success/error) directly form server. We do not have to define and handle them from client side

	useEffect(() => {
		if (serverState.successMessage) {
			toast.success(serverState.successMessage);
			formRef.current?.reset();
		}
	}, [serverState]);

	return (
		<div className='w-full flex justify-center flex-col mx-6'>
			<h1 className='text-pink-500 font-bold text-3xl mb-4'>Form</h1>
			<form
				className='w-full'
				action={formAction}
				ref={formRef}
			>
				<div className='flex flex-col gap-y-4'>
					<div>
						<label
							className='block'
							htmlFor='name'
						>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							min={3}
							required
							className='w-full p-2 rounded-md text-gray-900'
							defaultValue={serverState.data?.name}
						/>
						<div className='min-h-2'>
							{serverState.errors?.name && (
								<small className='text-red-500'>
									{serverState.errors.name}
								</small>
							)}
						</div>
					</div>
					<div>
						<label
							className='block'
							// same name as id
							htmlFor='link'
						>
							Link
							<span className='ml-1 text-sm'>(must start with https://)</span>
						</label>
						<input
							type='text'
							// name => for the submision
							name='link'
							id='link'
							required
							className='w-full p-2 rounded-md text-gray-900'
							defaultValue={serverState.data?.link}
						/>
						<div className='min-h-2'>
							{serverState.errors?.link && (
								<small className='text-red-500'>
									{serverState.errors.link}
								</small>
							)}
						</div>
					</div>
					<div>
						<label
							className='block'
							htmlFor='couponcode'
						>
							Coupon Code
						</label>
						<input
							type='text'
							name='couponcode'
							id='couponcode'
							required
							min={5}
							className='w-full p-2 rounded-md text-gray-900'
							defaultValue={serverState.data?.couponcode}
						/>
						<div className='min-h-2'>
							{serverState.errors?.couponcode && (
								<small className='text-red-500'>
									{serverState.errors.couponcode}
								</small>
							)}
						</div>
					</div>
					<div>
						<label
							className='block'
							htmlFor='discount'
						>
							Discount <span className='ml-1 text-sm'>(%)</span>
						</label>
						<input
							type='number'
							name='discount'
							id='discount'
							// defaultValue={10}
							defaultValue={serverState.data?.discount}
							required
							min={1}
							max={100}
							className='w-full p-2 rounded-md text-gray-900'
						/>
						<div className='min-h-2'>
							{serverState.errors?.discout && (
								<small className='text-red-500'>
									{serverState.errors.discount}
								</small>
							)}
						</div>
					</div>
					{/* <button className='bg-pink-600 w-full rounded-md p-2 mt-5 text-lg font-bold tracking-wider'>
						Submit
					</button> */}
					<SubmitBtn />
				</div>
			</form>
		</div>
	);
}
