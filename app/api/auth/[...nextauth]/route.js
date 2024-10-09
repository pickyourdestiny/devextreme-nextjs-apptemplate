import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//see NextAuth documentation for more information at https://next-auth.js.org/getting-started/example

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: "dark",
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
