'use client';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';

export const CreatePost: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
	const [formData, setFormData] = useState({
		title: '',
		content: '',
	});

	const { content } = formData;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const newPost = await fetch('/api/createPost', {
				method: 'POST',
				body: JSON.stringify(formData),
			});
			console.log('Created post:', newPost);
		} catch (error) {
			console.error('Error creating post:', error);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col">
<<<<<<< HEAD
				<label className="resize-both mb-2 mr-2" htmlFor="title">
=======
				<label className="mb-2 mr-2 resize-both" htmlFor="title">
>>>>>>> c02d3298b0ad5becc9d992910946196f48be0d8a
					Title
				</label>
				<input
					className="text-red-900"
					type="text"
					name="title"
					id="title"
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col">
<<<<<<< HEAD
				<label className="resize-both mb-2 mr-2" htmlFor="content">
=======
				<label className="mb-2 mr-2 resize-both" htmlFor="content">
>>>>>>> c02d3298b0ad5becc9d992910946196f48be0d8a
					Content
				</label>
				<input
					className="text-red-900"
					type="text"
					name="content"
					id="content"
					value={formData.content}
					onChange={handleChange}
				/>
			</div>
<<<<<<< HEAD
			<button className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
=======
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
>>>>>>> c02d3298b0ad5becc9d992910946196f48be0d8a
				Post!
			</button>
		</form>
	);
};
