export interface ROIData {
  netNewSignUps: number;
  totalValueOfSignUps: number;
  totalValueOfImpressions: number;
  totalIncreaseInAppDownloads: number;
  totalImprovementInAdsRetargetingEfficiency: number;
  increasedCartSizeForTargetedCustomers: number;
  totalImprovementInRevenuePerStore: number;
  totalImprovementInRevenue: number;
}

export function calculateROI(formData: any): ROIData {
    // Perform ROI calculations based on the form data
    const dailyFootfall = formData.averageStoreSize / 20;
    const annualFootfall = 365 * dailyFootfall;  // Results in annual footfall number based on expected density.
    const captivePortalImpressions = annualFootfall * 0.1; // Assuming a 10% conversion rate to Wi-Fi connections.
    const netNewSignUps = annualFootfall * 0.05;  // Assuming half of the above sign up using Wi-Fi.
    const validSignUps = 0.3;                        // A conservate number to play with in the future. 
    const validCustomerEmails = netNewSignUps * validSignUps; // This is the gold value.
    
    const totalValueOfSignUps = validCustomerEmails * 5;
    const totalValueOfImpressions = captivePortalImpressions / 1000;
    const totalIncreaseInAppDownloads = validCustomerEmails * 0.1 * 4;
    const totalImprovementInAdsRetargetingEfficiency = validCustomerEmails * 0.1 * 5;
    const increasedCartSizeForTargetedCustomers = validCustomerEmails * formData.averageCartSize * 0.02;
    
    const totalImprovementInRevenuePerStore = 
      totalValueOfSignUps + 
      totalValueOfImpressions + 
      totalIncreaseInAppDownloads + 
      totalImprovementInAdsRetargetingEfficiency + 
      increasedCartSizeForTargetedCustomers;
    
    const totalImprovementInRevenue = totalImprovementInRevenuePerStore * formData.numberOfStores;

    return {
      netNewSignUps,
      totalValueOfSignUps,
      totalValueOfImpressions,
      totalIncreaseInAppDownloads,
      totalImprovementInAdsRetargetingEfficiency,
      increasedCartSizeForTargetedCustomers,
      totalImprovementInRevenuePerStore,
      totalImprovementInRevenue,
    };
  }