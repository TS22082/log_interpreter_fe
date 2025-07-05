import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Button, Card, Heading } from "flowbite-qwik";
import { IconArrowRightOutline } from "flowbite-qwik-icons";

export default component$(() => {
  return (
    <>
      <div class="flex flex-wrap justify-center gap-4">
        <Card href="#" class="sm:w-full md:w-2/4 xl:w-1/4">
          <Heading>Instant Insights, Zero Guesswork</Heading>
          <p>
            Get real-time analytics and critical alerts from your app logs so
            your team can focus on what matters most.
          </p>
          <Button suffix={IconArrowRightOutline}>Read More</Button>
        </Card>

        <Card href="#" class="sm:w-full md:w-2/4 xl:w-1/4">
          <Heading>Proactive Issue Detection</Heading>
          <p>
            Let AI spot bugs, anomalies, and potential bottlenecks before they
            impact your users.
          </p>
          <Button suffix={IconArrowRightOutline}>Read more</Button>
        </Card>

        <Card href="#" class="sm:w-full md:w-2/4 xl:w-1/4">
          <Heading>Tailored Metrics & Visualizations</Heading>
          <p>
            Customize dashboards and reports to match your team’s unique needs
            and see the data that drives your app’s success.
          </p>
          <Button suffix={IconArrowRightOutline}>Read more</Button>
        </Card>
      </div>
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
