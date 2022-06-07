import { createContext } from "react";
import { AppState } from "./AppProvider";

export type AppContextProps = {
    state: AppState,
    toggleModalOpen: (component: JSX.Element | null) => void
    toggleModalClose: () => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

