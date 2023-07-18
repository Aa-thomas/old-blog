const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function (req, res) {
	try {
		const { email, secret } = JSON.parse(req.body);
		if (secret === process.env.AUTH0_HOOK_SECRET) {
			await prisma.user.create({
				data: {
					email: email,
				},
			});
			console.log('created user');
		} else {
			console.log('You failed to send your secret');
		}
	} catch (err) {
		console.log(err);
	} finally {
		await prisma.$disconnect();
		res.send({ received: true });
	}
}
