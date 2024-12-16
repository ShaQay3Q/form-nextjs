"use client";

import { handleAction } from "@/app/_actions/formHandler";
import React from "react";

export default function DealForm() {
	return (
		<div className='w-full flex justify-center flex-col mx-6'>
			<h1 className='text-pink-500 font-bold text-3xl mb-4'>Form</h1>

			<form
				className='w-full'
				action={handleAction}
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
						/>
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
						/>
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
						/>
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
							defaultValue={10}
							required
							min={1}
							max={100}
							className='w-full p-2 rounded-md text-gray-900'
						/>
					</div>
					<button className='bg-pink-600 w-full rounded-md p-2 mt-5 text-lg font-bold tracking-wider'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
