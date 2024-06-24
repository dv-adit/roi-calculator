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
      <h1>Guest Wi-Fi ROI Calculator</h1>
      <ROIForm onSubmit={handleFormSubmit} />
      {roiData && <ROIDashboard data={roiData} />}
      {/* Display customer events */}
    </main>
  );
}