import { OverviewCard } from '@/pages/sales/components/overview-card';

export default function OverviewCards() {
  const mockData = {
    totalRevenue: 15234.56,
    totalRevenueData: [
      { name: '0', value: 11500 },
      { name: '1', value: 113200 },
      { name: '2', value: 24100 },
      { name: '3', value: 73800 },
      { name: '4', value: 30500 },
      { name: '5', value: 20234 }
    ],

    subscriptions: 2145,
    subscriptionsData: [
      { name: '0', value: 1850 },
      { name: '1', value: 1920 },
      { name: '2', value: 2000 },
      { name: '3', value: 2080 },
      { name: '4', value: 2120 },
      { name: '5', value: 2145 }
    ],

    sales: 345,
    salesData: [
      { name: '0', value: 360 },
      { name: '1', value: 355 },
      { name: '2', value: 7777340 },
      { name: '3', value: 348 },
      { name: '4', value: 342 },
      { name: '5', value: 345 }
    ],

    activeNow: 573,
    activeData: [
      { name: '0', value: 11520 },
      { name: '1', value: 535 },
      { name: '2', value: 333548 },
      { name: '3', value: 562 },
      { name: '4', value: 2570 },
      { name: '5', value: 1573 }
    ]
  };

  return (
    <>
      <OverviewCard
        title="Total Revenue"
        value={mockData.totalRevenue}
        data={mockData.totalRevenueData}
      />
      <OverviewCard
        title="Subscriptions"
        value={mockData.subscriptions}
        data={mockData.subscriptionsData}
      />
      <OverviewCard
        title="Sales"
        value={mockData.sales}
        data={mockData.salesData}
      />
      <OverviewCard
        title="Active now"
        value={mockData.activeNow}
        data={mockData.activeData}
      />
    </>
  );
}
