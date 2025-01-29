import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line
} from 'recharts';
import { useTheme } from '@/providers/theme-provider';

const data = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 60 }
];

export function ScatterLineChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="X axis" />
        <YAxis type="number" dataKey="y" name="Y axis" />
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
        <Scatter data={data} fill="hsl(var(--primary))" />
        <Line
          type="monotone"
          data={data}
          dataKey="y"
          stroke="hsl(var(--card-foreground))"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
