import { useState } from 'react';
import { ROIForm } from '@/components/ROIForm';
import { ROIDashboard } from '@/components/ROIDashboard';
import { useCustomerEvents } from '@/hooks/useCustomerEvents';

export default function Home() {
  const [roiData, setRoiData] = useState(null);
  const customerEvents = useCustomerEvents();

  

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Guest Wi-Fi ROI Calculator</h1>
    <ROIForm onSubmit={calculateROI} />
    {roiData && (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">ROI Dashboard</h2>
        <ROIDashboard data={roiData} />
      </div>
    )}
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Events</h2>
      <ul>
        {customerEvents.map((event, index) => (
          <li key={index}>
            {event.type} - {event.timestamp}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}