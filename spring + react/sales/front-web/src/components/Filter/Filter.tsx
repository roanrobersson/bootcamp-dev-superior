import { FilterData, Store } from 'utils/types';
import { useEffect, useState } from 'react';
import './styles.css';
import { makeRequest } from 'utils/request';
import Select, { SingleValue } from 'react-select';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [selectStores, setSelectStores] = useState<Store[]>();

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by payment method');
      });
  }, []);

  const onStoreChange = (newValue: SingleValue<Store>) => {
    onFilterChange({ storeId: newValue?.id });
  };

  return (
    <header className="filter-container base-card">
      <Select
        options={selectStores}
        classNamePrefix="store-select"
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        inputId="department"
        placeholder="Selecionar uma loja"
        onChange={onStoreChange}
        isClearable
      />
    </header>
  );
};

export default Filter;
