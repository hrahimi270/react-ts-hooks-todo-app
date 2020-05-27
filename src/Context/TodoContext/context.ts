import { createContext } from "react";
import { IState, IDispatchers } from "./types";
import { INITIAL_STATE, INITIAL_DISPATCHERS } from "./constants";

export const TodoContext = createContext<IState | any>(INITIAL_STATE);
export const TodoDispatcherContext = createContext<IDispatchers | any>(
	INITIAL_DISPATCHERS,
);
