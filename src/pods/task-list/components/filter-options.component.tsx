import React from "react";
import { getPriorityConfigList, getTypeConfigList, PrioConfig, TypeConfig } from "../../../api";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";

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

  const typeConfig = getTypeConfigList();
  const priorityConfig = getPriorityConfigList();

  return (
    <>
      <label>
        Priorität:
        <select value={selectedPriority} onChange={handlePriorityChange}>
          {priorityConfig.map((config: PrioConfig) => {
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
          {typeConfig.map((config: TypeConfig) => {
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
