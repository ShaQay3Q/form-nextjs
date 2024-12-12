import React from "react";

export default function DealForm() {
	return (
		<div className='w-full'>
			<h1 className='text-pink-500 font-bold text-3xl mb-4'>Form</h1>

			<form className='w-full'>
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
							htmlFor='coupancode'
						>
							Coupan Code
						</label>
						<input
							type='text'
							name='coupancode'
							id='coupancode'
							minLength={5}
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
