import { createContextId, Signal } from "@builder.io/qwik";
import { UserType } from "./types";

export const UserContext =
  createContextId<Signal<UserType | null>>("user-context");
