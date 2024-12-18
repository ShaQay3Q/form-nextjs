"use client";

import { formHandlerAction } from "@/app/_actions/formHandlerServerAction";
import { StringMap } from "@/app/_types/dealServerAction";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

export default function DealFormServerAction() {
	const [errors, setErrors] = useState<StringMap>({});
	const [data, setData] = useState<StringMap>({});
	const formRef = useRef<HTMLFormElement>(null);

	const handleFormOnSubmit = async (formData: FormData) => {
		// gets the error and success message from server and show it on client side
		const { errors, successMessage, data } = await formHandlerAction(formData);
		console.log(errors, successMessage);
		if (successMessage) {
			toast.success("Deal submited!");
			formRef.current?.reset();
		}
		setData(data || {});
		setErrors(errors || {});
	};
	return (
		<div className='w-full flex justify-center flex-col mx-6'>
			<h1 className='text-pink-500 font-bold text-3xl mb-4'>Form</h1>
			<form
				className='w-full'
				action={handleFormOnSubmit}
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
							defaultValue={data?.name}
							required
							className='w-full p-2 rounded-md text-gray-900'
						/>
						<div className='min-h-2'>
							{errors?.name && (
								<small className='text-red-500'>{errors.name}</small>
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
							defaultValue={data?.link}
							required
							className='w-full p-2 rounded-md text-gray-900'
						/>
						<div className='min-h-2'>
							{errors?.link && (
								<small className='text-red-500'>{errors.link}</small>
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
							defaultValue={data?.couponcode}
							required
							min={5}
							className='w-full p-2 rounded-md text-gray-900'
						/>
						<div className='min-h-2'>
							{errors?.couponcode && (
								<small className='text-red-500'>{errors.couponcode}</small>
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
							defaultValue={data?.discount}
							required
							min={1}
							max={100}
							className='w-full p-2 rounded-md text-gray-900'
						/>
						<div className='min-h-2'>
							{errors?.discout && (
								<small className='text-red-500'>{errors.discount}</small>
							)}
						</div>
					</div>
					{/* <button className='bg-pink-600 w-full rounded-md p-2 mt-5 text-lg font-bold tracking-wider'>
						Submit
					</button> */}
					<SubmitBtn /> {/* not neccessary, cool to have! */}
				</div>
			</form>
		</div>
	);
}
