// >> TODO: HeaderAppBar recibe el numero de tareas, meldungen y mensajes como props

import React, { useState } from "react";
import "./App.css";
import { HeaderAppBar } from "./common/app-bar/app-bar.component";
import { Dashboard } from "./pods/dashboard/dashboard.container";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  const setCurrentUserHandler = (user: string) => {
    setCurrentUser(user);
  };

  return (
    <>
      <HeaderAppBar user={currentUser} />
      <div className="flex btn-box">
        <button onClick={() => setCurrentUserHandler("MANAGER")}>set USER as MANAGER</button>
        <button onClick={() => setCurrentUserHandler("USER 1")}>set USER as USER 1</button>
        <button onClick={() => setCurrentUserHandler("USER 2")}>set USER as USER 2</button>
      </div>
      <Dashboard user={currentUser} />
    </>
  );
}

export default App;
