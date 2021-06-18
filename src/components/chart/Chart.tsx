import ChartElement from "./chartElement";
import { transformToStyles } from "./chartElement/utils/transformToStyles";

import { Props } from "./types";

import "./Chart.css";

const Chart = ({ data }: Props) => {
  const transformedData = transformToStyles(data);

  return (
    <div className="Chart">
      {transformedData.map(({ id, ...rest }) => (
        <ChartElement key={id} {...rest} />
      ))}
    </div>
  );
};

export default Chart;
