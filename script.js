const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.findMany();

	console.log(user);
}

// automatically disconnects prisma client when done
main()
	.catch((e) => {
		console.error(e.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
