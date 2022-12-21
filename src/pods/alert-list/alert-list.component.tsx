// >> TODO: Ordenar las alertas por actualidad
// **********************************************
// >> TODO: Crear alert-list container
// **********************************************
// >> TODO: Crear alertas usando los templates de Material UI
//https://mui.com/material-ui/react-alert/

import React from "react";
import "./alert-list.component.css";
import { AlertEntityApi } from "./api";

interface Props {
  data: AlertEntityApi[];
  title: string;
}

export const AlertList = (props: Props) => {
  const { data, title } = props;

  return (
    <div className="alert-container">
      <div className="alert-header">
        <h3>{title}</h3>
      </div>
      <div className="alert-lst-container">
        {data.map((alert, index) => {
          return (
            <div key={index} className="alert-item">
              <div className="box-left">
                <p className="alert-user">{alert.user}</p>
                <p className="alert-date">{alert.date}</p>
              </div>
              <div className="box-right">
                <p className="alert-type">{alert.type}</p>
                <p className="alert-desc">{alert.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
