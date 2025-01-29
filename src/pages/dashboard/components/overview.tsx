import { useGetOverview } from '@/pages/dashboard/queries/queries'; // Suponiendo que este hook es el correcto
import { useFilters } from '@/providers/date-filter-provider';
import { useTheme } from '@/providers/theme-provider';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

export default function Overview() {
  const { theme } = useTheme();
  const { filters } = useFilters();
  const { data, isLoading, isError } = useGetOverview(
    filters.startDate,
    filters.endDate
  );

  return (
    <div className="w-full">
      {isLoading || isError ? (
        <div className="flex h-80 w-full items-center justify-center">
          <Skeleton className="h-full w-full" />
        </div>
      ) : data.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center py-8">
          <span className="text-center text-lg font-semibold text-gray-500">
            No data available for the selected date range
          </span>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} tabIndex={0}>
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
