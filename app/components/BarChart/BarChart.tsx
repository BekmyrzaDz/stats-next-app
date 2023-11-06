import { SetStateAction } from "react";
import { Year, Month, HalfYear } from "../../mockApi/types";
import MySelect from "../Select/MySelect";
import { Option } from "../Select/MySelect.props";
import { monthGenerate } from "../../helper/index";
import styles from "./BarChart.module.scss";

interface Props {
  data: Year | Month | HalfYear;
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
}

const BarChart: React.FC<Props> = ({ data, setValue, value }) => {
  // Options for room select
  const options: Option[] = [
    { key: "За последний год", value: "За последний год" },
    { key: "За последние 6 месяцев", value: "За последние 6 месяцев" },
    { key: "За последний месяц", value: "За последний месяц" },
  ];

  // Максимальное значение для шкалы Y
  const max = Math.max(...Object.values(data));
  const min = Math.min(...Object.values(data));

  // Ширина и высота графика
  const width = 821;
  const height = 280;

  // Ширина столбцов
  const barWidth = 16;

  // Массив столбцов
  const bars = Object.keys(data).map((month, index) => {
    const value = data[month];
    const barHeight = (value / max) * 100;
    console.log(typeof month);

    return (
      <div key={month} className={styles.axisX}>
        <div
          style={{
            height: height,
            display: "flex",
            alignItems: "end",
          }}
        >
          <div
            className={styles.rect}
            style={{
              height: `${barHeight}%`,
              width: barWidth,
            }}
          />
        </div>
        <div
          style={{
            height: 30,
          }}
        >
          <p className={styles.month}>{month}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <MySelect
          className={styles.wrap}
          name="Select"
          options={options}
          setValue={setValue}
          value={value}
        />
        <div className={styles.barChart}>
          <div className={styles.axisY}>
            <ul className={styles.list}>
              <li>10 000</li>
              <li>5 000</li>
              <li>2 000</li>
              <li>1 000</li>
              <li>500</li>
              <li>0</li>
            </ul>
          </div>
          <div className={styles.barsContainer}>
            <div className={styles.bars} style={{ width: width }}>
              {bars}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
