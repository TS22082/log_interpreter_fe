import { component$, useContext } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { UserContext } from "~/utils/contexts";

export default component$(() => {
  const user = useContext(UserContext);
  return <h1>Dashboard Page {user.value?.name}</h1>;
});

export const head: DocumentHead = {
  title: "Dashboard",
  meta: [
    {
      name: "Dashboard",
      content: "Dashboard",
    },
  ],
};
