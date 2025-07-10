import { IconHomeOutline, IconUserSettingsOutline } from "flowbite-qwik-icons";

export const navItems = [
  { route: "/", label: "Home" },
  { route: "/documents/", label: "Docs" },
  { route: "/about/", label: "About" },
  {
    route: "/pricing/",
    label: "Pricing",
  },
  {
    route: "/contact/",
    label: "Contact",
  },
  {
    route: "/login/",
    label: "Login",
  },
];

export const dashBoardItems = [
  { route: "/dashboard/", label: "Home", icon: IconHomeOutline },
  { route: "/settings/", label: "Settings", icon: IconUserSettingsOutline },
];
