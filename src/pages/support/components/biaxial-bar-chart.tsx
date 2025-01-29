import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';

const data = [
  { name: 'January', uv: 4000, pv: 2400 },
  { name: 'February', uv: 3000, pv: 1398 },
  { name: 'March', uv: 2000, pv: 9800 },
  { name: 'April', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 }
];

export function BiaxialBarChart() {
  const { theme } = useTheme();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
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
        <Legend />
        <Bar dataKey="uv" fill="hsl(var(--card-foreground))" />
        <Bar dataKey="pv" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  );
}
