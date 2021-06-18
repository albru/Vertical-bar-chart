import { getChartData, getAnotherChartData } from "../api";

class ChartService {
  public getData = async () => {
    try {
      const [chartData, anotherChartData] = await Promise.all([
        getChartData(),
        getAnotherChartData(),
      ]);

      return { chartData, anotherChartData };
    } catch (error) {
      console.log(error);
    }
  };
}

export const chartService = new ChartService();
