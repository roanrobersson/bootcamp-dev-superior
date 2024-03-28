import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string): ApexOptions => {
  return {
    labels,
    tooltip: {
      y: {
        formatter: (val) => {
          const formattedValue = val.toLocaleString('pt-BR', {
            minimumFractionDigits: 2
          });

          return `R$ ${formattedValue}`;
        }
      }
    },
    noData: {
      text: 'Sem resultados',
      style: {
        color: '#8D8D8D',
        fontSize: '18px'
      }
    },
    colors: ['#ff3f5d', '#7234f5', '#ff7a00'],
    legend: {
      position: 'bottom',
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      itemMargin: {
        horizontal: 0,
        vertical: 4
      }
    },
    dataLabels: {
      style: {
        fontSize: '8px'
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            name: {
              offsetY: 10,
              formatter: function () {
                return name;
              }
            }
          }
        }
      }
    }
  };
};
