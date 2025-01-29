import ActivitySummaryChart from '@/pages/dashboard/components/activity-summary-chart';
import { useFilters } from '@/providers/date-filter-provider';
import { useGetActivitySummaryChart } from '@/pages/dashboard/queries/queries.ts';

export default function ActivitySummaryCharts() {
  const { filters } = useFilters();
  const {
    data = [],
    isLoading,
    isError
  } = useGetActivitySummaryChart(filters.startDate, filters.endDate);

  if (!data || !data.length || isError || isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <span className="text-lg font-semibold text-gray-500">
          No data available for the selected date range
        </span>
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <ActivitySummaryChart
          key={index}
          label={item.label}
          value={item.value}
          percentage={item.percentage}
        />
      ))}
    </>
  );
}
