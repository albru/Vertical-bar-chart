import { ChartData, Chart } from "../../types";

export interface Props {
  data: ChartData;
}

export type ChartElementStyles = Record<keyof Chart, string>;
