export interface ICompany {
    company: {
        companyId: string;
    },
    customerMarkParameters: {
        loyaltyLevel: {
            number: number;
            name: string;
            requiredSum: number;
            markToCash: number;
            cashToMark: number;
        },
        mark: number;
    }
    mobileAppDashboard: {
        companyName: string;
        logo: string;
        backgroundColor: string;
        mainColor: string;
        cardBackgroundColor: string;
        textColor: string;
        highlightTextColor: string;
        accentColor: string;
    }
}

export interface ICompanyRequest {
    offset: number;
    limit: number;
}