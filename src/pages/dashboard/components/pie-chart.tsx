import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '@/providers/theme-provider';

const data = [
  { name: 'Product A', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product B', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product C', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product D', value: Math.floor(Math.random() * 5000) + 1000 }
];

export default function PieChartImpl() {
  const { theme } = useTheme();
  let colors = ['#013C51', '#0B4A5B', '#1C5C6D', '#2E6E80'];
  if (theme !== 'light') {
    colors = ['#FFFFFF', '#F5F5F5', '#EAEAEA', '#DFDFDF'];
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
          fill="#013C51"
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
