const AdminPostsPage = ({}) => {
	return <main>
		{#Each posts as post}
			{post.title}
		{/Each}
	</main>;
};

export default AdminPostsPage;
