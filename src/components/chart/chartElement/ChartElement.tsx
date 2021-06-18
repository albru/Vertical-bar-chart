import { Props } from "./types";

const ChartElement = ({ color, ...rest }: Props) => {
  return <div style={{ backgroundColor: color, ...rest }}></div>;
};

export default ChartElement;
