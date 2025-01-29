import PageHead from '@/components/shared/page-head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs.js';
import DateFilter from '@/pages/dashboard/components/date-filter';
import { Logo } from '@/components/shared/logo';
import { ScatterPlotChart } from '@/pages/sales/components/scatter-plot-chart';
import { FunnelChartImpl } from '@/pages/sales/components/funnel-chart';
import OverviewCards from '@/pages/sales/components/overview-cards';

export default function SalesPage() {
  return (
    <>
      <PageHead />
      <div className="h-full flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
          <Logo className="h-12 w-24" />
          <DateFilter className="mb-4" />
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <OverviewCards />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Scatter Plot</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScatterPlotChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Funnel Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <FunnelChartImpl />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
