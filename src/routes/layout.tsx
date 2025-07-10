import {
  component$,
  Slot,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import AppFooter from "~/components/AppFooter";
import AppNav from "~/components/AppNav";
import { useSession } from "./plugin@auth";
import { UserType } from "~/utils/types";
import { UserContext } from "~/utils/contexts";
import { setUserContext } from "~/utils/setUserContext";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const user = useSignal<null | UserType>(null);
  const session = useSession();

  useTask$(({ track }) => {
    const sessionTracking = track(() => session);
    const emailFromSession = sessionTracking.value?.user?.email;
    const userFromSession = sessionTracking.value?.user as undefined | UserType;

    if (emailFromSession && userFromSession) {
      console.log("Logging in", emailFromSession);
      return setUserContext(user, userFromSession);
    }

    user.value = null;
  });

  useContextProvider(UserContext, user);

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <AppNav />
      <section style={{ paddingBottom: "100px" }}>
        <Slot />
      </section>
      <AppFooter />
    </main>
  );
});
