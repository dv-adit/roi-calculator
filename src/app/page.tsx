'use client';
import { ROIForm } from './components/ROIForm';
import { ROIDashboard } from './components/ROIDashboard';
import { useCustomerEvents } from './hooks/useCustomerEvents';
import { calculateROI } from './utils/calculations';
import { useState } from 'react';

export default function Home() {
  const [roiData, setRoiData] = useState(null) as any;
  const customerEvents = useCustomerEvents();

  const handleFormSubmit = (formData: any) => {
    const calculatedROI = calculateROI(formData);
    setRoiData(calculatedROI);
  };

  return (
    <main>
      <div className="container">
      <h1 className="text-xl font-bold py-2">Guest Wi-Fi ROI Calculator</h1>
      <h2 className="py-2 font-semibold">Get a sneak peek into your revenue gains by implementing Presence Engage with Datavalet.</h2>
      <ROIForm onSubmit={handleFormSubmit} />
      {roiData && <ROIDashboard data={roiData} />}
      {/* Display customer events */}
      </div>
    </main>
  );
}