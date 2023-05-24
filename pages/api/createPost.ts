import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { title, content } = req.body;
	try {
		const post = await prisma.post.create({
			data: {
				title,
				content,
			},
		});
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: 'Unable to create post' });
	} finally {
		await prisma.$disconnect();
	}
};
