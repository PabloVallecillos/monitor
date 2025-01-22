import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';
import { useFilters } from '@/providers/date-filter-provider';

const rawData = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    productSales: 3000,
    date: '2024-01-01'
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    productSales: 2000,
    date: '2024-02-01'
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    productSales: 2780,
    date: '2024-03-01'
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    productSales: 1890,
    date: '2024-04-01'
  }
];

const LineChartImpl = () => {
  const { theme } = useTheme();
  const { filters } = useFilters();

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
      <LineChart data={filteredData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="hsl(var(--foreground))"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <LineTooltip
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartImpl;
