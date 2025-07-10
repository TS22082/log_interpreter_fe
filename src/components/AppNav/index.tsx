import { component$, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Button, DarkModeToggle, Hr, Navbar, Sidebar } from "flowbite-qwik";
import { useSession, useSignOut } from "~/routes/plugin@auth";
import { navItems, dashBoardItems } from "~/utils/contants";

export default component$(() => {
  const location = useLocation();
  const session = useSession();
  const signOut = useSignOut();

  if (session.value !== null)
    return (
      <Sidebar highlight>
        <Sidebar.ItemGroup>
          {dashBoardItems.map((item) => (
            <Sidebar.Item key={item.route} icon={item.icon}>
              {item.label}
            </Sidebar.Item>
          ))}
          <Hr />
          <Button
            full
            onClick$={() => {
              signOut.submit({
                redirectTo: "/login",
              });
            }}
          >
            Log Out
          </Button>
        </Sidebar.ItemGroup>
      </Sidebar>
    );

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
