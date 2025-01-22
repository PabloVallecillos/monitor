import { useEffect, useState } from 'react';
import { useFilters } from '@/providers/date-filter-provider';
import ActivitySummaryChart from '@/pages/dashboard/components/activity-summary-chart';

export default function ActivitySummaryCharts() {
  const { filters } = useFilters();
  const [data, setData] = useState([
    { label: 'IBEX35', value: '0.00', percentage: 0 },
    { label: 'NASDAQ', value: '0.00', percentage: 0 },
    { label: 'DOW JONES', value: '0.00', percentage: 0 },
    { label: 'S&P 500', value: '0.00', percentage: 0 }
  ]);

  const getRandomNumber = (min: number, max: number) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  const getRandomPercentage = (daysDifference: number) => {
    return (Math.random() * 6 - 3 + daysDifference / 100).toFixed(2);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { startDate, endDate } = filters;

      const daysDifference = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const simulatedApiData = [
        {
          label: 'IBEX35',
          value: getRandomNumber(1000, 20000), // Número aleatorio entre 1000 y 20000
          percentage: getRandomPercentage(daysDifference)
        },
        {
          label: 'NASDAQ',
          value: getRandomNumber(1000, 20000),
          percentage: getRandomPercentage(daysDifference)
        },
        {
          label: 'DOW JONES',
          value: getRandomNumber(1000, 20000),
          percentage: getRandomPercentage(daysDifference)
        },
        {
          label: 'S&P 500',
          value: getRandomNumber(1000, 20000),
          percentage: getRandomPercentage(daysDifference)
        }
      ];

      setData(simulatedApiData);
    };

    fetchData();
  }, [filters]);

  return (
    <>
      {data.map((item, index) => (
        <ActivitySummaryChart
          key={index}
          label={item.label}
          value={item.value}
          percentage={item.percentage}
        />
      ))}
    </>
  );
}
