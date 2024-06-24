import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, ComposedChart, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ROIDashboard({ data }) {
  const chartData = [
    { name: 'Total Value of Sign Ups', value: data.totalValueOfSignUps },
    { name: 'Total Value of Impressions', value: data.totalValueOfImpressions },
    { name: 'Total Increase in App Downloads', value: data.totalIncreaseInAppDownloads },
    { name: 'Total Improvement in Ads Retargeting Efficiency', value: data.totalImprovementInAdsRetargetingEfficiency },
    { name: 'Increased Cart Size for Targeted Customers', value: data.increasedCartSizeForTargetedCustomers },
  ];

  return (
    <div className="pt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>New Sign-ups</CardTitle>
          <CardDescription>If each customer is worth $5, here&apos;s how much you saved</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalValueOfSignUps.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue gain per store</CardTitle>
          <CardDescription>Estimated increase in annual revenue per store</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalImprovementInRevenuePerStore.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Increased Revenue</CardTitle>
          <CardDescription>Estimated increase in Annual leveraging Presence Engage</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalImprovementInRevenue  .toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>ROI Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              layout="vertical"
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis width={200} dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" barSize={20} fill="#413ea0" label="Hello" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}