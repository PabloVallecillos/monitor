import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '@/providers/theme-provider';
import { useFilters } from '@/providers/date-filter-provider';
import { useMemo } from 'react';

const rawData = [
  {
    name: 'Product A',
    value: Math.floor(Math.random() * 5000) + 1000,
    date: '2023-01-01'
  },
  {
    name: 'Product B',
    value: Math.floor(Math.random() * 5000) + 1000,
    date: '2024-02-01'
  },
  {
    name: 'Product C',
    value: Math.floor(Math.random() * 5000) + 1000,
    date: '2024-03-01'
  },
  {
    name: 'Product D',
    value: Math.floor(Math.random() * 5000) + 1000,
    date: '2024-04-01'
  }
];

export default function PieChartImpl() {
  const { theme } = useTheme();
  const { filters } = useFilters();
  const { startDate, endDate } = filters;

  let colors = ['#013C51', '#0B4A5B', '#1C5C6D', '#2E6E80'];
  if (theme !== 'light') {
    colors = ['#FFFFFF', '#F5F5F5', '#EAEAEA', '#DFDFDF'];
  }

  const filteredData = useMemo(() => {
    return rawData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= endDate;
    });
  }, [startDate, endDate]);

  if (filteredData.length === 0) {
    return (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center py-8">
        <span className="text-center text-lg font-semibold text-gray-500">
          No data available for the selected date range
        </span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={filteredData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#013C51"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`$${value}`]}
          itemStyle={{
            color: '#013C51'
          }}
          contentStyle={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #cccccc',
            padding: '8px',
            fontSize: '12px'
          }}
          labelStyle={{ color: '#013C51' }}
          cursor={{
            fill:
              theme !== 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }}
          labelFormatter={(label) => <strong>{label}</strong>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
