const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main(user, context, callback) {
	callback(null, user, context);
}

// automatically disconnects prisma client when done
main()
	.catch((e) => {
		console.error(e.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
