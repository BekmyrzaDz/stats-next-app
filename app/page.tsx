import BarChart from "./components/BarChart/BarChart";
import { data } from "./mockApi/mockApi";

export default function Home() {
  const { half_year, month, year } = data.finance.periods[0].graph;

  return (
    <>
      <BarChart data={year} />
    </>
  );
}
