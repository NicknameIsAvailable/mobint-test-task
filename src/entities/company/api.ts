import { ICompany, ICompanyRequest } from "@/shared/types";
import { api } from "@/shared/lib";
import {
  ICompanyApi,
  IGetCompaniesResponse,
} from "@/entities/company/model.ts";

export const companyApi: ICompanyApi = {
  async getCompanies(offset: number, limit: number): Promise<ICompany[]> {
    const body: ICompanyRequest = {
      offset,
      limit,
    };
    const { data }: { data: IGetCompaniesResponse } = await api.post(
      "/mobileapp/getAllCompanies",
      body,
    );
    return data.companies;
  },
};
