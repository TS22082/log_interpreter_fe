import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler, useNavigate } from "@builder.io/qwik-city";
import { Button, Jumbotron } from "flowbite-qwik";
import AppFooter from "~/components/AppFooter";
import AppNav from "~/components/AppNav";

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
  const nav = useNavigate();
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <AppNav />
      <Jumbotron class="rounded-lg sm:mb-10 md:my-10">
        <Jumbotron.Heading tag="h2">
          Unlock Intelligent Insights from Your App Logs
        </Jumbotron.Heading>
        <Jumbotron.SubText>
          AI-powered analytics and critical information to drive better product
          decisions.
        </Jumbotron.SubText>
        <div class="flex justify-center gap-2">
          <Button>Get started</Button>
          <Button onClick$={() => nav("/about")} color="alternative">
            Learn more
          </Button>
        </div>
      </Jumbotron>
      <section style={{ paddingBottom: "100px" }}>
        <Slot />
      </section>
      <AppFooter />
    </main>
  );
});
