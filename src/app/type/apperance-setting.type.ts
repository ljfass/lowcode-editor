import { ClearFloat, Float, Position } from '../enum/style.enum';

export type ApperanceSetting = {
  layout: {
    width: number | string;
    height: number;
  };
  text: {
    fontSize: number;
    lineHeight: number;
    fontWeight: number | string;
    color?: string;
    align?: string;
    opacity?: number;
  };
  background: {
    fill: boolean;
    opacity: number;
    color?: string;
    url?: string;
  };
  pos: {
    position: Position;
    zIndex?: number;
    float?: Float;
    clear?: ClearFloat;
  };
  radius: number | number[];
  border: {
    fill: boolean;
    color: string;
    style: string;
    width: number;
  };
};
