import PageHead from '@/components/shared/page-head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs.js';
import DateFilter from '@/pages/dashboard/components/date-filter';
import { Logo } from '@/components/shared/logo';
import { AreaFillValueChart } from '@/pages/support/components/area-fill-value-chart.tsx';
import { BiaxialBarChart } from '@/pages/support/components/biaxial-bar-chart';
import { ScatterLineChart } from '@/pages/support/components/scatter-line-chart';
import { TwoLevelPieChart } from '@/pages/support/components/two-level-pie-chart';

export default function SupportPage() {
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Area Chart Fill by Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaFillValueChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Biaxial Bar Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <BiaxialBarChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Scatter and Line of Best Fit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScatterLineChart />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Two-Level Pie Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <TwoLevelPieChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
