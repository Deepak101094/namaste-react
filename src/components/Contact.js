import React from "react";

const Contact = () => {
	return (
		<div className=' flex items-center mt-8 flex-col'>
			<h1 className='m-4 text-2xl font-bold'>Contact</h1>
			<form className='bg-gray-100 p-16  w-[400px] text-center'>
				<input
					className='w-full mb-4 rounded-md p-2 border border-gray-400'
					name='name'
					placeholder='name'
				/>
				<input
					className='w-full mb-4 rounded-md p-2 border border-gray-400'
					name='email'
					placeholder='Email'
				/>
				<textarea
					className=' w-full mb-4 rounded-md p-2 border border-gray-400'
					name='message'
					placeholder='Message'
					text='textarea'
				/>

				<button className=' w-full rounded-lg hover:shadow-2xl px-4 py-2 bg-black text-white text-lg'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
