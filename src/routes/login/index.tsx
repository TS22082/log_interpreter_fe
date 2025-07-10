import { $, component$ } from "@builder.io/qwik";
import { Button, Jumbotron } from "flowbite-qwik";
import { IconGithubSolid } from "flowbite-qwik-icons";
import { useSignIn } from "../plugin@auth";

export default component$(() => {
  const signIn = useSignIn();

  const loginWith = $((provider: string) => {
    return signIn.submit({
      providerId: provider,
      // redirectTo: "http://localhost:5173/auth/callback/github",
      redirectTo: "http://localhost:5173/",
    });
  });

  return (
    <Jumbotron>
      <Jumbotron.Heading tag="h2">
        Access Your Services Information Dashboard
      </Jumbotron.Heading>
      <Jumbotron.SubText>
        Choose a provider to sign in or register
      </Jumbotron.SubText>
      <section class="mt-10 flex justify-center gap-2">
        <Button onClick$={() => loginWith("github")} prefix={IconGithubSolid}>
          Github
        </Button>
        <Button
          disabled
          onClick$={() => loginWith("google")}
          prefix={IconGithubSolid}
        >
          Google
        </Button>
      </section>
    </Jumbotron>
  );
});
