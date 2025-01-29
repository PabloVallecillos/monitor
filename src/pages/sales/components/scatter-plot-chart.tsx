import { XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ScatterChart, Scatter, ZAxis } from 'recharts';
import { useTheme } from '@/providers/theme-provider';

export function ScatterPlotChart() {
  const { theme } = useTheme();
  const data = [
    { x: 10, y: 20 },
    { x: 15, y: 35 },
    { x: 22, y: 11 },
    { x: 1, y: 16 }
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <XAxis type="number" dataKey="x" />
        <YAxis type="number" dataKey="y" />
        <ZAxis range={[60, 400]} />
        <Scatter name="A" data={data} fill="hsl(var(--card-foreground))" />
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
      </ScatterChart>
    </ResponsiveContainer>
  );
}
