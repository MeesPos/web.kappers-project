import nextAuth from "next-auth"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import process from "process"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60
  },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {label: 'Username', type: 'text', placeholder: 'email@site.com'},
          password: {label: 'Password', type: 'password', placeholder: 'password'},
        },
        async authorize(credentials, _req) {
          const { email, password } = credentials as {
            email: string,
            password: string
          }
          try {
            const data = await fetch(process.env.API_URL + '/login', {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password
              }),
              headers: { 
                "Content-Type": "application/json" 
              }
            })
            
            if (data.status === 401) {
              return null;
            }

            return data.json();
          } catch (error) {
            console.log(error);

            return error
          }
        },
      }),
    ],
    callbacks: {
      jwt: async ({token, user}) => {
        if (user) {
          token.data = user
        }
        return token
      },
      session: async ({session, token}) => {
        if (token.data) {
          session.user = token.data
        }
        return session
      },
    },
  }

export default nextAuth(authOptions)