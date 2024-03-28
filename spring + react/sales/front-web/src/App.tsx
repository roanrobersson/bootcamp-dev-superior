import PieChartCard from 'components/PieChartCard';
import { buildSalesByGenderChart } from 'utils/helpers';
import { buildFilterParams, makeRequest } from 'utils/request';
import { FilterData, PieChartConfig, SalesByGender } from 'utils/types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByStore);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />

      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />

        <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </>
  );
}

export default App;
