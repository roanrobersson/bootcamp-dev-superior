import { SalesByPaymentMethod, SalesByGender, Gender } from './types';

const genderTranslationMap = {
  FEMALE: 'Feminino',
  MALE: 'Masculino',
  OTHER: 'Outro'
};

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => genderTranslationMap[sale.gender as Gender]);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
