import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '@/providers/theme-provider';
import { useFilters } from '@/providers/date-filter-provider';
import { useGetPieChart } from '@/pages/dashboard/queries/queries';

export default function PieChartImpl() {
  const { theme } = useTheme();
  const { filters } = useFilters();
  const { startDate, endDate } = filters;
  const { data, isLoading, isError } = useGetPieChart(startDate, endDate);

  let colors = ['#2B2DFF', '#484AFF', '#6265FF', '#7E80FF'];
  if (theme !== 'light') {
    colors = ['#FFFFFF', '#F5F5F5', '#EAEAEA', '#DFDFDF'];
  }

  if (!data || !data.length || isError || isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <span className="text-lg font-semibold text-gray-500">
          No data available for the selected date range
        </span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="hsl(var(--card-foreground))"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => [`$${value}`]}
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
      </PieChart>
    </ResponsiveContainer>
  );
}
