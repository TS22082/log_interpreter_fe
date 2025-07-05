import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { DarkModeToggle, Navbar } from "flowbite-qwik";
import { navItems } from "~/utils/contants";

export default component$(() => {
  const location = useLocation();

  return (
    <Navbar>
      <Navbar.Brand>
        <span class="self-center text-xl font-semibold whitespace-nowrap">
          Aikno
        </span>
        <DarkModeToggle />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navItems.map((item) => (
          <Navbar.Link
            key={item.route}
            href={item.route}
            active={item.route === location.url.pathname}
          >
            {item.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
});
