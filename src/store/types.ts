export type Company = {
  company: {
    companyId: string;
  };
  customerMarkParameters: CustomerMarkParameters;
  mobileAppDashboard: MobileAppDashboard;
};

export type CustomerMarkParameters = {
  loyaltyLevel: {
    number: number;
    name: string;
    requiredSum: number;
    markToCash: number;
    cashToMark: number;
  };
  mark: number;
};

export type MobileAppDashboard = {
  companyName: string;
  logo: string;
  backgroundColor: string;
  mainColor: string;
  cardBackgroundColor: string;
  textColor: string;
  highlightTextColor: string;
  accentColor: string;
};

export type Params = {
  limit: number;
  offset: number;
};
