import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: User;
		accessToken: string;
		refreshToken: string;
		expires: DateTime;
	}
	interface User {
		name: string;
		email: string;
		accessToken: string;
		refreshToken: string;
	}
}
declare module "next-auth/jwt" {
	interface JWT {
		data: User;

		iat: number;
		exp: number;
		jti: string;
	}
}
