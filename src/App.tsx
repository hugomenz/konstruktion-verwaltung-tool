// >> TODO: HeaderAppBar recibe el numero de tareas, meldungen y mensajes como props

import React, { useState } from "react";
import "./App.css";
import { HeaderAppBar } from "./common/app-bar/app-bar.component";
import { Dashboard } from "./pods/dashboard/dashboard.container";

function App() {
  const MOCKED_USER = "USER 1";

  const [currentUser, setCurrentUser] = useState("");

  const setCurrentUserHandler = (user: string) => {
    setCurrentUser(user);
  };

  return (
    <>
      <HeaderAppBar user={currentUser} />
      <button onClick={() => setCurrentUserHandler(MOCKED_USER)}>Establecer usuario actual</button>
      <Dashboard user={currentUser} />
    </>
  );
}

export default App;
