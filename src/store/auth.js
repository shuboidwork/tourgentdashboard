import { getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Instagram from "next-auth/providers/instagram";


export const config = {
    providers: [
        Google({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret:process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        }),
        Facebook({
          clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
        }),
        Instagram({
          clientId: process.env.INSTAGRAM_CLIENT_ID ?? "",
          clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? "",
        }),
      ],
      secret: process.env.AUTH_SECRET,

};

// Use it in server contexts
export function auth(...args) {
  return getServerSession(...args, config);
}
