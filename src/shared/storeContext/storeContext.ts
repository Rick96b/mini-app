import { RootStore } from "app/store/rootStore";
import { createContext } from "react";

export const StoreContext = createContext<RootStore | undefined>(undefined);