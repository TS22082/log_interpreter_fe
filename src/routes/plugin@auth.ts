import { QwikAuth$ } from "@auth/qwik";
import GitHub from "@auth/qwik/providers/github";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub],
    callbacks: {
      async session({ session, token }) {
        session.accessToken = token.accessToken as string;
        return session;
      },
    },
  }),
);
