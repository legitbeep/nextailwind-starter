import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SIGNING_PRIVATE_KEY,
  jwt: {
      // A secret to use for key generation. Defaults to the top-level `secret`.
      secret: process.env.NEXT_PUBLIC_JWT_SIGNING_PRIVATE_KEY,
      // The maximum age of the NextAuth.js issued JWT in seconds.
      // Defaults to `session.maxAge`.
        maxAge: 60 * 60 * 24 * 30,
      // You can define your own encode/decode functions for signing and encryption
      // if you want to override the default behavior.
      // async encode({ secret, token, maxAge }) {},
      // async decode({ secret, token }) {},
    },

  // A database is optional but required to persist accounts
  // database : process.env.DATABASE_URL,
})