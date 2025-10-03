import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
