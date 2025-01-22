import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';
import { useFilters } from '@/providers/date-filter-provider';
import { useMemo } from 'react';

const rawData = [
  {
    name: 'Product A',
    direct: 4000,
    organic: 2400,
    referral: 2400,
    date: '2024-01-01'
  },
  {
    name: 'Product B',
    direct: 3000,
    organic: 1398,
    referral: 2210,
    date: '2024-02-01'
  },
  {
    name: 'Product C',
    direct: 2000,
    organic: 9800,
    referral: 2290,
    date: '2024-03-01'
  },
  {
    name: 'Product D',
    direct: 2780,
    organic: 3908,
    referral: 2000,
    date: '2024-04-01'
  },
  {
    name: 'Product E',
    direct: 1890,
    organic: 4800,
    referral: 2181,
    date: '2024-05-01'
  }
];

const VerticalBarStackedChart = () => {
  const { theme } = useTheme();
  const { filters } = useFilters();

  const colors =
    theme === 'light'
      ? ['#2B2DFF', '#484AFF', '#6265FF']
      : ['#FFFFFF', '#F5F5F5', '#EAEAEA'];

  const filteredData = useMemo(() => {
    const { startDate, endDate } = filters;
    return rawData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= endDate;
    });
  }, [filters]);

  if (filteredData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <span className="text-lg font-semibold text-gray-500">
          No data available for the selected date range
        </span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="horizontal"
        data={filteredData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          itemStyle={{
            color: '#2525B9'
          }}
          contentStyle={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #cccccc',
            padding: '8px',
            fontSize: '12px'
          }}
          labelStyle={{ color: '#2525B9' }}
          cursor={{
            fill:
              theme !== 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }}
          labelFormatter={(label) => <strong>{label}</strong>}
        />
        <Legend />
        <Bar
          dataKey="direct"
          stackId="a"
          fill={colors[0]}
          name="Direct Sales"
        />
        <Bar
          dataKey="organic"
          stackId="a"
          fill={colors[1]}
          name="Organic Sales"
        />
        <Bar
          dataKey="referral"
          stackId="a"
          fill={colors[2]}
          name="Referral Sales"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarStackedChart;
