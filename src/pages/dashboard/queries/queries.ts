import {
  getOverviewCards,
  getOverview,
  getBubbleChart,
  getVerticalStackedBarChart,
  getLineChart,
  getActivitySummaryChart,
  getPieChart,
  getHorizontalStackedBarChart
} from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetOverviewCards = (startDate, endDate) => {
  return useQuery({
    queryKey: ['overview-cards', startDate, endDate],
    queryFn: async () => getOverviewCards(startDate, endDate)
  });
};

export const useGetOverview = (startDate, endDate) => {
  return useQuery({
    queryKey: ['overview', startDate, endDate],
    queryFn: async () => getOverview(startDate, endDate)
  });
};

export const useGetBubbleChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['bubble-chart', startDate, endDate],
    queryFn: async () => getBubbleChart(startDate, endDate)
  });
};

export const useGetVerticalStackedBarChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['vertical-stackedbar-chart', startDate, endDate],
    queryFn: async () => getVerticalStackedBarChart(startDate, endDate)
  });
};

export const useGetLineChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['line-chart', startDate, endDate],
    queryFn: async () => getLineChart(startDate, endDate)
  });
};

export const useGetActivitySummaryChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['activity-summary-chart', startDate, endDate],
    queryFn: async () => getActivitySummaryChart(startDate, endDate)
  });
};

export const useGetPieChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['pie-chart', startDate, endDate],
    queryFn: async () => getPieChart(startDate, endDate)
  });
};

export const useGetHorizontalStackedBarChart = (startDate, endDate) => {
  return useQuery({
    queryKey: ['horizontal-stacked-bar-chart', startDate, endDate],
    queryFn: async () => getHorizontalStackedBarChart(startDate, endDate)
  });
};
