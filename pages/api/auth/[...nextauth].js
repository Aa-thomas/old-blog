import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
	theme: 'auto',
	session: {
		strategy: 'jwt',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Email',
			credentials: {
				name: {
					label: 'Name',
					type: 'text',
					placeholder: 'John Doe..',
				},
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'johndoe@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { name, email, password } = credentials;
				const user = {
					name,
					email,
					password,
				};

				return user;
			},
		}),
		// LinkedInProvider({
		// 	clientId: process.env.LINKEDIN_CLIENT_ID,
		// 	clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
		// }),
		// EmailProvider({
		// 	server: process.env.EMAIL_SERVER,
		// 	from: process.env.EMAIL_FROM,
		// }),
	],
});
