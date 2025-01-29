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
import { useGetLineChart } from '@/pages/dashboard/queries/queries';

const LineChartImpl = ({ startDate, endDate }) => {
  const { theme } = useTheme();
  const { data, isLoading, isError } = useGetLineChart(startDate, endDate);
  if (!data || isError || isLoading || data.length === 0) {
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
      <LineChart data={data}>
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
