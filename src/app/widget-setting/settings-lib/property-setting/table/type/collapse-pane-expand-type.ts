import { CollapsePaneExpandMode } from "../enum";

export type CollapsePaneExpandeType = {
  name: string;
  active?: boolean;
  disabled?: boolean;
  mode?: CollapsePaneExpandMode;
};
