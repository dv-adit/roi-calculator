import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ROIDashboard({ data }) {
  const chartData = [
    { name: 'Total Value of Sign Ups', value: data.totalValueOfSignUps },
    { name: 'Total Value of Impressions', value: data.totalValueOfImpressions },
    { name: 'Total Increase in App Downloads', value: data.totalIncreaseInAppDownloads },
    { name: 'Total Improvement in Ads Retargeting Efficiency', value: data.totalImprovementInAdsRetargetingEfficiency },
    { name: 'Increased Cart Size for Targeted Customers', value: data.increasedCartSizeForTargetedCustomers },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Increase in Revenue</CardTitle>
          <CardDescription>Estimated increase in Annual revenue across the board</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalImprovementInRevenue.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Increase in Revenue per Store</CardTitle>
          <CardDescription>Estimated increase in annual revenue per store</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${data.totalImprovementInRevenuePerStore.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>ROI Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}