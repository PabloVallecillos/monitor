import { useEffect, useState } from 'react';
import { useFilters } from '@/providers/date-filter-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimatedNumber } from '@/hooks/use-animated-number.tsx';

export default function OverviewCards() {
  const { filters } = useFilters();
  const [data, setData] = useState({
    totalRevenue: 0,
    totalRevenueChange: 0,
    subscriptions: 0,
    subscriptionsChange: 0,
    sales: 0,
    salesChange: 0,
    activeNow: 0,
    activeNowChange: 0
  });

  useEffect(() => {
    const simulateData = () => {
      const { startDate, endDate } = filters;

      const rangeDays = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const previousStartDate = new Date(
        startDate.getTime() - rangeDays * 24 * 60 * 60 * 1000
      );
      const previousEndDate = new Date(
        endDate.getTime() - rangeDays * 24 * 60 * 60 * 1000
      );

      const currentRevenue = Math.random() * 100000;
      const previousRevenue = Math.random() * 100000;
      const currentSubscriptions = Math.floor(Math.random() * 5000);
      const previousSubscriptions = Math.floor(Math.random() * 5000);
      const currentSales = Math.floor(Math.random() * 20000);
      const previousSales = Math.floor(Math.random() * 20000);
      const currentActiveNow = Math.floor(Math.random() * 1000);
      const previousActiveNow = Math.floor(Math.random() * 1000);

      const calculateChange = (current: number, previous: number) => {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
      };

      setData({
        totalRevenue: currentRevenue,
        totalRevenueChange: calculateChange(currentRevenue, previousRevenue),
        subscriptions: currentSubscriptions,
        subscriptionsChange: calculateChange(
          currentSubscriptions,
          previousSubscriptions
        ),
        sales: currentSales,
        salesChange: calculateChange(currentSales, previousSales),
        activeNow: currentActiveNow,
        activeNowChange: currentActiveNow - previousActiveNow
      });
    };

    simulateData();
  }, [filters]);

  const animatedTotalRevenue = useAnimatedNumber(data.totalRevenue);
  const animatedSubscriptions = useAnimatedNumber(data.subscriptions);
  const animatedSales = useAnimatedNumber(data.sales);
  const animatedActiveNow = useAnimatedNumber(data.activeNow);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${animatedTotalRevenue.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {data.totalRevenueChange >= 0 ? '+' : ''}
            {data.totalRevenueChange.toFixed(1)}% compared to previous period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{animatedSubscriptions}</div>
          <p className="text-xs text-muted-foreground">
            {data.subscriptionsChange >= 0 ? '+' : ''}
            {data.subscriptionsChange.toFixed(1)}% compared to previous period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{animatedSales}</div>
          <p className="text-xs text-muted-foreground">
            {data.salesChange >= 0 ? '+' : ''}
            {data.salesChange.toFixed(1)}% compared to previous period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{animatedActiveNow}</div>
          <p className="text-xs text-muted-foreground">
            {data.activeNowChange >= 0 ? '+' : ''}
            {data.activeNowChange} compared to previous period
          </p>
        </CardContent>
      </Card>
    </>
  );
}
