import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
	theme: 'auto',
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
});
