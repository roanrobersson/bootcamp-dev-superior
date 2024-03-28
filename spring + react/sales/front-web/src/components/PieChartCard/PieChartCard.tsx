import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieChartCard = ({ labels = [], name, series = [] }: Props) => {
  const totalValue = series.reduce((a, b) => a + b, 0);
  const formmatedTotalValue = totalValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });

  return (
    <div className="pie-chart-card base-card">
      <div className="info-container">
        <h3 className="sales-summary-card-value">R$ {formmatedTotalValue}</h3>
        <div className="sales-summary-card-label">Total de vendas</div>
      </div>

      {/* @ts-ignore */}
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="350"
        series={series}
      />
    </div>
  );
};

export default PieChartCard;
