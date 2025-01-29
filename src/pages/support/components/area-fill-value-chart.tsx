import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';

const data = [
  { name: 'January', uv: 4000 },
  { name: 'February', uv: 3000 },
  { name: 'March', uv: 2000 },
  { name: 'April', uv: 2780 },
  { name: 'May', uv: 1890 }
];

export function AreaFillValueChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
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
        <Area
          type="monotone"
          dataKey="uv"
          stroke="hsl(var(--card-foreground))"
          fill="hsl(var(--card-foreground))"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
