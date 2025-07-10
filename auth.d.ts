import "@auth/qwik";

declare module "@auth/qwik" {
  interface Session {
    accessToken?: string;
  }
}
