import { Props } from "./types";

const ChartElement = ({ color, ...rest }: Props) => (
  <div style={{ backgroundColor: color, ...rest }}/>
);

export default ChartElement;
