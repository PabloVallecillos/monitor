import { useFilters } from '@/providers/date-filter-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimatedNumber } from '@/hooks/use-animated-number';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetOverviewCards } from '@/pages/dashboard/queries/queries';

export default function OverviewCards() {
  const { filters } = useFilters();
  const { data, isLoading, isError } = useGetOverviewCards(
    filters.startDate,
    filters.endDate
  );

  const animatedTotalRevenue = useAnimatedNumber(
    data && data.totalRevenue ? data.totalRevenue : 0
  );
  const animatedSubscriptions = useAnimatedNumber(
    data && data.subscriptions ? data.subscriptions : 0
  );
  const animatedSales = useAnimatedNumber(data && data.sales ? data.sales : 0);
  const animatedActiveNow = useAnimatedNumber(
    data && data.activeNow ? data.activeNow : 0
  );

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          {isError || isLoading ? (
            <div className="text-2xl font-bold text-red-500">
              <Skeleton></Skeleton>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">
                ${animatedTotalRevenue?.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                {data && data.totalRevenueChange >= 0 ? '+' : ''}
                {data ? data.totalRevenueChange?.toFixed(1) : 0}% compared to
                previous period
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          {isError || isLoading ? (
            <div className="text-2xl font-bold">
              <Skeleton></Skeleton>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">+{animatedSubscriptions}</div>
              <p className="text-xs text-muted-foreground">
                {data && data.subscriptionsChange >= 0 ? '+' : ''}
                {data ? data.subscriptionsChange?.toFixed(1) : 0}% compared to
                previous period
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
        </CardHeader>
        <CardContent>
          {isError || isLoading ? (
            <div className="text-2xl font-bold">
              <Skeleton></Skeleton>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">+{animatedSales}</div>
              <p className="text-xs text-muted-foreground">
                {data && data.salesChange >= 0 ? '+' : ''}
                {data ? data.salesChange?.toFixed(1) : 0}% compared to previous
                period
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
        </CardHeader>
        <CardContent>
          {isError || isLoading ? (
            <div className="text-2xl font-bold">
              <Skeleton></Skeleton>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold">+{animatedActiveNow}</div>
              <p className="text-xs text-muted-foreground">
                {data && data.activeNowChange >= 0 ? '+' : ''}
                {data ? data.activeNowChange : 0} compared to previous period
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
