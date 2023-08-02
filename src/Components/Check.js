import React from "react";
import Notes from "./Notes";
import Home from "./Home";

function Check() {
  return <>{localStorage.getItem("logged") ? <Notes /> : <Home />}</>;
}

export default Check;
