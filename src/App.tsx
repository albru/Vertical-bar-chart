import { useEffect, useState } from "react";

import Chart from "./components/chart";
import { ChartDataState } from "./types";
import { getAnotherChartData, getChartData } from "./api";

import "./App.css";

function App() {
  const [chartData, setChartData] = useState<ChartDataState>({
    chartData: [],
    anotherChartData: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const [chartData, anotherChartData] = await Promise.all([
          getChartData(),
          getAnotherChartData(),
        ]);

        setChartData({ chartData, anotherChartData });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Chart data={chartData.chartData} />
      <Chart data={chartData.anotherChartData} />
    </div>
  );
}

export default App;
