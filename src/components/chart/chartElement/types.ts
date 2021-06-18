import { Chart } from "../../../types/chartData";

export type ChartElementStyles = Record<keyof Chart, string>;

export type Props = Omit<ChartElementStyles, "id">;
