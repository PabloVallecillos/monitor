import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';
import { useMemo } from 'react';
import { useFilters } from '@/providers/date-filter-provider';

const data = [
  {
    name: 'Jan',
    date: '2023-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Feb',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Mar',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Apr',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'May',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jun',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jul',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Aug',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Sep',
    date: '2024-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Oct',
    date: '2025-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Nov',
    date: '2021-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Dec',
    date: '2025-01-01',
    total: Math.floor(Math.random() * 5000) + 1000
  }
];

export default function Overview() {
  const { theme } = useTheme();
  const { filters } = useFilters();

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= filters.startDate && itemDate <= filters.endDate;
    });
  }, [filters]);

  return (
    <div className="w-full">
      {filteredData.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center py-8">
          <span className="text-center text-lg font-semibold text-gray-500">
            No data available for the selected date range
          </span>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={filteredData} tabIndex={0}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              formatter={(value) => [`$${value}`, 'Total']}
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
                  theme !== 'light'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.1)'
              }}
              labelFormatter={(label) => <strong>{label}</strong>}
            />
            <Bar
              dataKey="total"
              fill={
                theme !== 'light' ? '#ffffff' : 'hsl(var(--card-foreground))'
              }
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
