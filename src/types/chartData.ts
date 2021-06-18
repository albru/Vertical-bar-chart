export interface Chart {
  id: string;
  width: number;
  height: number;
  color: string;
}

export type ChartData = Chart[];

export interface ChartDataState {
  chartData: ChartData;
  anotherChartData: ChartData;
}
