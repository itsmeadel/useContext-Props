import { createContext, useState } from "react";

const PersonContext = createContext();

export const Provider = ({ children }) => {
  const [retreatStatus, setReatreatStatus] = useState("not going");

  const data = {
    retreatStatus,
    changeRetreatStatus: () => {
      setReatreatStatus("going");
    },
  };

  return (
    <PersonContext.Provider value={data}> {children}</PersonContext.Provider>
  );
};

export default PersonContext;
