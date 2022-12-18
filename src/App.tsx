// >> TODO: HeaderAppBar recibe el numero de tareas, meldungen y mensajes como props

import React, { useEffect, useState } from "react";
import "./App.css";
import { HeaderAppBar } from "./common/app-bar/app-bar.component";
import { Dashboard } from "./pods/dashboard/dashboard.component";

function App() {
  const MOCKED_USER = "MANAGER";

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(MOCKED_USER);
  }, [MOCKED_USER]);

  return (
    <>
      <HeaderAppBar user={currentUser} />
      <Dashboard user={currentUser} />
    </>
  );
}

export default App;
