const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: 'bob',
			email: 'test@email.com',
			posts: {
				create: { title: 'Hello World', content: 'This is the content' },
			},
		},
	});
}

// automatically disconnects prisma client when done
main()
	.catch((e) => {
		console.error(e.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
