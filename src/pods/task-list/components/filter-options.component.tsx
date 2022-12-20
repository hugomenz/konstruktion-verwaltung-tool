import React from "react";
import { getPriorityConfigList, getTypeConfigList, PrioConfig, TypeConfig } from "../../../api";

interface Props {
  selectedType: string;
  selectedPriority: string;
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePriorityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterOptions = (props: Props) => {
  const { selectedType, selectedPriority, handleTypeChange, handlePriorityChange } = props;

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
    </>
  );
};
