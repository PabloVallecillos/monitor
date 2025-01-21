import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Product A', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product B', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product C', value: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Product D', value: Math.floor(Math.random() * 5000) + 1000 }
];

const COLORS = ['#013C51', '#0B4A5B', '#1C5C6D', '#2E6E80'];

export default function PieChartImpl() {
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`$${value}`, name]}
          contentStyle={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #cccccc',
            padding: '8px',
            fontSize: '12px'
          }}
          labelStyle={{ color: '#013C51' }}
          cursor={{ fill: 'rgba(0,0,0,0.1)' }}
          labelFormatter={(label) => <strong>{label}</strong>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
