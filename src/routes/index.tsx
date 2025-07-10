import { component$ } from "@builder.io/qwik";
import { RequestHandler, type DocumentHead } from "@builder.io/qwik-city";
import { Button, Card, Heading, Jumbotron } from "flowbite-qwik";
import { IconArrowRightOutline } from "flowbite-qwik-icons";
import { Session } from "inspector";

export const onRequest: RequestHandler = async ({ redirect, sharedMap }) => {
  const session: Session | null = sharedMap.get("session");

  if (session) {
    throw redirect(308, "/dashboard");
  }
};

export default component$(() => {
  return (
    <>
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
          <Button href="/about" color="alternative">
            Learn more
          </Button>
        </div>
      </Jumbotron>
      <div class="flex flex-wrap justify-center gap-4">
        <Card class="sm:w-full md:w-3/4 xl:w-1/4">
          <Heading>Instant Insights, Zero Guesswork</Heading>
          <p>
            Get real-time analytics and critical alerts from your app logs so
            your team can focus on what matters most.
          </p>
          <Button suffix={IconArrowRightOutline}>Read More</Button>
        </Card>

        <Card class="sm:w-full md:w-3/4 xl:w-1/4">
          <Heading>Proactive Issue Detection</Heading>
          <p>
            Let AI spot bugs, anomalies, and potential bottlenecks before they
            impact your users.
          </p>
          <Button suffix={IconArrowRightOutline}>Read more</Button>
        </Card>

        <Card class="sm:w-full md:w-3/4 xl:w-1/4">
          <Heading>Tailored Metrics & Visualizations</Heading>
          <p>
            Customize dashboards and reports to match your team’s unique needs
            and see the data that drives your app’s success.
          </p>
          <Button suffix={IconArrowRightOutline}>Read more</Button>
        </Card>
      </div>
      <Jumbotron class="rounded-lg sm:mb-10 md:my-10">
        <Jumbotron.Heading tag="h2">
          Go Beyond the Surface To See What Really Matters
        </Jumbotron.Heading>
        <Jumbotron.SubText>
          Access the analytics and intelligence you need to make informed
          decisions every step of the way.
        </Jumbotron.SubText>
        <div class="flex justify-center gap-2">
          <Button href="/login">Create An Account</Button>
        </div>
      </Jumbotron>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
