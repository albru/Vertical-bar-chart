import { ChartData } from "../../../types/chartData";
import { ChartElementStyles } from "../chartElement/types";

export const transformToStyles = (data: ChartData) =>
  data.reduce<ChartElementStyles[]>((acc, { height, width, ...rest }) => {
    const chartProps = {
      height: height + "px",
      width: width + "px",
      ...rest,
    };

    acc.push(chartProps);

    return acc;
  }, []);
