import { createContext, useContext } from "react";
import { DEFAULT_RELAYS } from "../shared/constants";

const setRelays = (relays: string[]) => {};

export const RelaysContext = createContext({
    relays: DEFAULT_RELAYS,
    setRelays,
});

export function useRelaysContext() {
  return useContext(RelaysContext);
}
