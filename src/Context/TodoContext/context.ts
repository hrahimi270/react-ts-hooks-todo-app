import { createContext } from "react";
import { IState } from "./types";
import { INITIAL_STATE } from "./constants";

export default createContext<IState | any>(INITIAL_STATE);
