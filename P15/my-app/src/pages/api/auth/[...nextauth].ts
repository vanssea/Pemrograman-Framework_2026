import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { signIn as signInUser } from "@/utils/db/servicefirebase"

export const authOptions:NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user: any = await signInUser(credentials.email)
        if (!user) {
          return null
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password)
        if (!isValidPassword) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          role: user.role,
        }
      }
    })
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, account,profile, user }:any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email
        token.fullname = user.fullname
      }
      return token
    },
    async session({ session, token }:any) {
      if (token.email) {
        session.user.email = token.email
      }
      if (token.fullname) {
        session.user.fullname = token.fullname
      }
      return session
    },
  },
};
export default NextAuth(authOptions)