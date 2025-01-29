import { ResponsiveContainer } from 'recharts';
import { FunnelChart, Funnel, LabelList } from 'recharts';

export function FunnelChartImpl() {
  const data = [
    { name: 'Step 1', value: 100 },
    { name: 'Step 2', value: 45 },
    { name: 'Step 3', value: 20 }
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <FunnelChart>
        <Funnel dataKey="value" data={data} fill="hsl(var(--card-foreground))">
          <LabelList
            position="right"
            fill="hsl(var(--card-foreground))"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
}
