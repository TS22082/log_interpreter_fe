import { component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import {
  Button,
  DarkModeToggle,
  Hr,
  Navbar,
  Sidebar,
  Toggle,
  useDarkMode,
} from "flowbite-qwik";
import {
  IconBarsOutline,
  IconMoonOutline,
  IconSunOutline,
} from "flowbite-qwik-icons";
import { useSession, useSignOut } from "~/routes/plugin@auth";
import { navItems, dashBoardItems } from "~/utils/contants";

export default component$(() => {
  const location = useLocation();
  const session = useSession();
  const signOut = useSignOut();
  const collapsed = useSignal(false);
  const { isDark, setDarkModeValue } = useDarkMode();

  if (session.value !== null)
    return (
      <>
        <Navbar class="sm:hidden">
          <Button
            color="dark"
            outline
            square
            onClick$={() => {
              collapsed.value = !collapsed.value;
            }}
          >
            <IconBarsOutline />
          </Button>
        </Navbar>
        <Sidebar highlight collapsed={collapsed}>
          <Sidebar.ItemGroup>
            {dashBoardItems.map((item) => (
              <Sidebar.Item key={item.route} icon={item.icon} href={item.route}>
                {item.label}
              </Sidebar.Item>
            ))}

            <div class="flex h-[40px] items-center text-lg">
              <Toggle
                bind:checked={isDark}
                onChange$={() => {
                  setDarkModeValue(isDark.value ? "dark" : "light");
                }}
              />
              {isDark.value ? <IconSunOutline /> : <IconMoonOutline />}
            </div>
            <Hr />
            <Button
              full
              onClick$={() =>
                signOut.submit({
                  redirectTo: "/login",
                })
              }
            >
              Log Out
            </Button>
          </Sidebar.ItemGroup>
        </Sidebar>
      </>
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
