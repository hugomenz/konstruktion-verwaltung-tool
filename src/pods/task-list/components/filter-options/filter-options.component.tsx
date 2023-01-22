import React from "react";

import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
import { PrioConfigEntityApi, TypeConfigEntityApi } from "core/api/configuration/models/configuration.model";
import { getPriorityConfigList, getTypeConfigList } from "core/api/configuration/configuration.business";

interface Props {
  selectedType: string;
  selectedPriority: string;
  showComplete: boolean;
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePriorityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onShowComplete: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilter: () => void;
}

export const FilterOptions = (props: Props) => {
  const {
    selectedType,
    selectedPriority,
    handleTypeChange,
    handlePriorityChange,
    showComplete,
    onShowComplete,
    onResetFilter,
  } = props;

  let typeConfig: TypeConfigEntityApi[] = [] as TypeConfigEntityApi[];
  let priorityConfig: PrioConfigEntityApi[] = [] as PrioConfigEntityApi[];

  /*   getTypeConfigList().then((response) => {
    typeConfig = response;
  });
  getPriorityConfigList().then((response) => {
    priorityConfig = response;
  }); */

  return (
    <>
      <label>
        Priorität:
        <select value={selectedPriority} onChange={handlePriorityChange}>
          {priorityConfig.map((config: PrioConfigEntityApi) => {
            return (
              <React.Fragment key={config.id}>
                <option value={config.value}>{config.description}</option>
              </React.Fragment>
            );
          })}
        </select>
      </label>
      <label>
        Typ:
        <select value={selectedType} onChange={handleTypeChange}>
          {typeConfig.map((config: TypeConfigEntityApi) => {
            return (
              <React.Fragment key={config.description}>
                <option value={config.description}>{config.description}</option>
              </React.Fragment>
            );
          })}
        </select>
      </label>
      <label>
        Erledigt einblenden
        <input type="checkbox" checked={showComplete} onChange={onShowComplete} />
      </label>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <RestartAltIcon onClick={onResetFilter} />
      </IconButton>
    </>
  );
};
