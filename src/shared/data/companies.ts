import { ICompany } from "@/shared/types";

export const companies: ICompany[] = [
  {
    company: {
      companyId: "1",
    },
    customerMarkParameters: {
      loyaltyLevel: {
        number: 1,
        name: "Bronze",
        requiredSum: 1000,
        markToCash: 10,
        cashToMark: 0.1,
      },
      mark: 500,
    },
    mobileAppDashboard: {
      companyName: "Company One",
      logo: "logo1.png",
      backgroundColor: "#FFFFFF",
      mainColor: "#000000",
      cardBackgroundColor: "#F5F5F5",
      textColor: "#333333",
      highlightTextColor: "#FF0000",
      accentColor: "#0000FF",
    },
  },
  {
    company: {
      companyId: "2",
    },
    customerMarkParameters: {
      loyaltyLevel: {
        number: 2,
        name: "Silver",
        requiredSum: 2000,
        markToCash: 8,
        cashToMark: 0.08,
      },
      mark: 1200,
    },
    mobileAppDashboard: {
      companyName: "Company Two",
      logo: "logo2.png",
      backgroundColor: "#EFEFEF",
      mainColor: "#222222",
      cardBackgroundColor: "#FAFAFA",
      textColor: "#444444",
      highlightTextColor: "#00FF00",
      accentColor: "#FF00FF",
    },
  },
  {
    company: {
      companyId: "3",
    },
    customerMarkParameters: {
      loyaltyLevel: {
        number: 3,
        name: "Gold",
        requiredSum: 5000,
        markToCash: 5,
        cashToMark: 0.05,
      },
      mark: 3000,
    },
    mobileAppDashboard: {
      companyName: "Company Three",
      logo: "logo3.png",
      backgroundColor: "#CCCCCC",
      mainColor: "#111111",
      cardBackgroundColor: "#EFEFEF",
      textColor: "#555555",
      highlightTextColor: "#0000FF",
      accentColor: "#00FFFF",
    },
  },
];
