const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
	try {
		const { email } = JSON.parse(req.body);
		if (secret === process.env.AUTH0_HOOK_SECRET) {
			const user = await prisma.user.create({
				data: {
					email: email,
				},
			});
			console.log('created user');
		}
	} catch (err) {
		console.log(err);
	} finally {
		await prisma.$disconnect();
		res.send({ received: true });
	}

	// create user in prisma
};
