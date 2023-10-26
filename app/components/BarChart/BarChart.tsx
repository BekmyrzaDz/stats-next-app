import styles from "./BarChart.module.scss";

interface Data {
  [key: string]: number;
}

interface Props {
  data: Data;
}

const BarChart: React.FC<Props> = ({ data }) => {
  // Максимальное значение для шкалы Y
  const max = Math.max(...Object.values(data));

  // Ширина и высота графика
  const width = 821;
  const height = 280;

  // Ширина столбцов
  const barWidth = 16;

  // Массив столбцов
  const bars = Object.keys(data).map((month) => {
    const value = data[month];
    const barHeight = (value / max) * height;

    return (
      <div key={month} className={styles.axisX}>
        <div
          className={styles.rect}
          style={{
            height: barHeight,
            width: barWidth,
          }}
        />
        <p className={styles.month}>{month}</p>
      </div>
    );
  });

  return (
    <div className={styles.container}>
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
  );
};

export default BarChart;
