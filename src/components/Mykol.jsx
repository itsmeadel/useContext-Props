import React, { useContext } from "react";
import PersonContext from "../context/PersonContext";
import Person from "./Person";

const Mykol = () => {
  const { retreatStatus, changeRetreatStatus } = useContext(PersonContext);
  return (
    <Person
      age="26"
      name="Mykol"
      favoriteColor="green"
      hobbies="games, reading"
      gender="female"
    >
      <button onClick={changeRetreatStatus}>{retreatStatus}</button>
    </Person>
  );
};

export default Mykol;
