import { component$ } from "@builder.io/qwik";
import { Button, Jumbotron } from "flowbite-qwik";
import { IconGithubSolid } from "flowbite-qwik-icons";
import { useSignIn } from "../plugin@auth";

export default component$(() => {
  const signIn = useSignIn();
  return (
    <Jumbotron>
      <Jumbotron.Heading tag="h2">
        Access Your Analytics and Logs Dashboard
      </Jumbotron.Heading>
      <Jumbotron.SubText>
        Gain valuable insights and monitor your application’s performance with
        Ai-kno's' advanced logging and analytics tools.
      </Jumbotron.SubText>
      <Jumbotron.SubText>
        Choose a provider to either login or register
      </Jumbotron.SubText>
      <section class="mt-10 flex justify-center gap-10">
        <Button
          onClick$={() =>
            signIn.submit({
              providerId: "github",
              redirectTo: "/",
            })
          }
          prefix={IconGithubSolid}
        >
          Github
        </Button>
      </section>
    </Jumbotron>
  );
});
