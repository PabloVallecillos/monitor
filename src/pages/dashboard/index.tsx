import PageHead from '@/components/shared/page-head.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs.js';
import Overview from '@/pages/dashboard/components/overview';
import BubbleMapChart from '@/pages/dashboard/components/bubble-map-chart';
import PieChartImpl from '@/pages/dashboard/components/pie-chart';
import DateFilter from '@/pages/dashboard/components/date-filter';
import OverviewCards from '@/pages/dashboard/components/overview-cards.tsx';
import ActivitySummaryCharts from '@/pages/dashboard/components/activity-summary-charts.tsx';

export default function DashboardPage() {
  return (
    <>
      <PageHead />
      <div className="h-full flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <DateFilter />
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          {/*<TabsList>*/}
          {/*  <TabsTrigger value="overview">Overview</TabsTrigger>*/}
          {/*  <TabsTrigger value="analytics" disabled>*/}
          {/*    Analytics*/}
          {/*  </TabsTrigger>*/}
          {/*</TabsList>*/}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <OverviewCards />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Bubble chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <BubbleMapChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Pie chart</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <PieChartImpl />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Activity summary</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ActivitySummaryCharts />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
