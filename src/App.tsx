import { useEffect, useState } from "react";

import Chart from "./components/chart";
import { ChartDataState } from "./types";
import { chartService } from "./services";

import "./App.css";

function App() {
  const [chartData, setChartData] = useState<ChartDataState>({
    chartData: [],
    anotherChartData: [],
  });

  useEffect(() => {
    chartService.getData().then((data) => data && setChartData(data));
  }, []);

  return (
    <div className="App">
      <Chart data={chartData.chartData} />
      <Chart data={chartData.anotherChartData} />
    </div>
  );
}

export default App;
