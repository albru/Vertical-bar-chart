import { ChartData } from "../types";
import { CHART_MOCK_DATA, ANOTHER_CHART_MOCK_DATA } from "../consts";

export const getChartData = () =>
  new Promise<ChartData>((resolve, reject) => {
    setTimeout(() => {
      reject(CHART_MOCK_DATA);
    }, 1200);
  });

export const getAnotherChartData = () =>
  new Promise<ChartData>((resolve) => {
    setTimeout(() => {
      resolve(ANOTHER_CHART_MOCK_DATA);
    }, 900);
  });
