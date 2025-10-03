import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  return <DoctorContext.Provider>{props.children}</DoctorContext.Provider>;
};

export default DoctorContextProvider;
