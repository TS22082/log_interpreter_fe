import { component$ } from "@builder.io/qwik";
import { Button, Jumbotron } from "flowbite-qwik";
import { Form } from "@builder.io/qwik-city";
import { IconUserOutline } from "flowbite-qwik-icons";
import { useSignIn } from "../plugin@auth";

export default component$(() => {
  const signIn = useSignIn();
  return (
    <Jumbotron>
      <Jumbotron.Heading tag="h2">
        Sign In to Access Your Analytics Dashboard
      </Jumbotron.Heading>
      <Jumbotron.SubText>
        Gain valuable insights and monitor your application’s performance with
        Flowbite's advanced logging and analytics tools.
      </Jumbotron.SubText>
      <section class="mt-10 flex justify-center gap-10">
        <Form action={signIn}>
          <Button prefix={IconUserOutline}>Login / Register</Button>
        </Form>
      </section>
    </Jumbotron>
  );
});
