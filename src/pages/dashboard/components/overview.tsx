import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { useTheme } from '@/providers/theme-provider.tsx';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000
  }
];

export default function Overview() {
  const { theme } = useTheme();

  return (
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
        <Bar
          dataKey="total"
          fill={theme !== 'light' ? '#ffffff' : '#013C51'}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
