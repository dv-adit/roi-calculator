export interface ROIData {
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
    const estimatedFootfall = 365 * formData.averageStoreSize / 20;
    const captivePortalImpressions = estimatedFootfall * 0.1;
    const netNewSignUps = estimatedFootfall * 0.05;
    const validSignUps = 0.3;
    const validCustomerEmails = netNewSignUps * validSignUps;
    
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
      totalValueOfSignUps,
      totalValueOfImpressions,
      totalIncreaseInAppDownloads,
      totalImprovementInAdsRetargetingEfficiency,
      increasedCartSizeForTargetedCustomers,
      totalImprovementInRevenuePerStore,
      totalImprovementInRevenue,
    };
  }