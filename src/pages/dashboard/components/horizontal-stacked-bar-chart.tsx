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
import { useGetHorizontalStackedBarChart } from '@/pages/dashboard/queries/queries';
import { useFilters } from '@/providers/date-filter-provider';

const HorizontalStackedBarChart = () => {
  const { theme } = useTheme();
  const { filters } = useFilters();
  const { startDate, endDate } = filters;
  const { data, isLoading, isError } = useGetHorizontalStackedBarChart(
    startDate,
    endDate
  );

  const colors =
    theme === 'light'
      ? ['#2B2DFF', '#484AFF', '#6265FF']
      : ['#FFFFFF', '#F5F5F5', '#EAEAEA'];

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
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 70,
          bottom: 5
        }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={100} />
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

export default HorizontalStackedBarChart;
