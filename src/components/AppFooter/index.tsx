import { component$ } from "@builder.io/qwik";
import { Footer } from "flowbite-qwik";

export default component$(() => {
  return (
    <Footer
      container
      style={{
        position: "absolute",
        bottom: "0",
      }}
    >
      <Footer.Copyright href="#" by="Aikno" />
      <Footer.LinkGroup>
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
});
