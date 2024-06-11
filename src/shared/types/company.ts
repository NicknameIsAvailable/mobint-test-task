export interface ICompanyData {
    companyId: string;
}

export interface ILoyaltyLevel {
    number: number;
    name: string;
    requiredSum: number;
    markToCash: number;
    cashToMark: number;
}

export interface ICustomerMarkParameters {
    loyaltyLevel: ILoyaltyLevel,
    mark: number;
}

export interface IMobileAppDashboard {
    companyName: string;
    logo: string;
    backgroundColor: string;
    mainColor: string;
    cardBackgroundColor: string;
    textColor: string;
    highlightTextColor: string;
    accentColor: string;
}

export interface ICompany {
    company: ICompanyData;
    customerMarkParameters: ICustomerMarkParameters;
    mobileAppDashboard: IMobileAppDashboard;
}

export interface ICompanyRequest {
    offset: number;
    limit: number;
}