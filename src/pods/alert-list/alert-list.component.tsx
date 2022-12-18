import React from "react";
import { Alert } from "../../api";
import "./alert-list.component.css";

interface Props {
  data: Alert[];
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
              <span>{alert.user}</span>
              <span>{alert.date}</span> <span>{alert.description}</span>
              <span>{alert.type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
