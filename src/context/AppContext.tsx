import { createContext } from "react";
import { AppState } from "./AppProvider";


export type AppContextProps = {
    state: AppState,
    toggleModalOpen: () => void
}


export const AppContext = createContext<AppContextProps>({} as AppContextProps)

