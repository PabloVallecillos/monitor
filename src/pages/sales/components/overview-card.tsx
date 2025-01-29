import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import { useAnimatedNumber } from '@/hooks/use-animated-number';
import { useTheme } from '@/providers/theme-provider';

export function OverviewCard({ title, value, data }) {
  const { theme } = useTheme();
  const animatedValue = useAnimatedNumber(value ? value : 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-2xl font-bold">
          {animatedValue?.toFixed(2)}
        </div>
        <ResponsiveContainer width="100%" height={25}>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--card-foreground))"
              strokeWidth={2}
              dot={true}
            />
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
                  theme !== 'light'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.1)'
              }}
              labelFormatter={(label) => <strong>{label}</strong>}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
