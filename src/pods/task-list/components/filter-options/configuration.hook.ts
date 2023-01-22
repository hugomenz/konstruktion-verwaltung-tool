import { getConfiguration } from "core/api/configuration/configuration.api";
import { ConfigEntityApi } from "core/api/configuration/models/configuration.model";
import * as React from "react";

export const useConfig = () => {
  const [config, setConfig] = React.useState<ConfigEntityApi>();

  const loadConfig = () => {
    getConfiguration().then((result) => setConfig(result));
  };

  return { config, loadConfig };
};
