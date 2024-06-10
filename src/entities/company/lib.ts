import {ICompany, TRequestStatus} from "@/shared/types";
import { makeAutoObservable } from "mobx";
import { companyApi } from "@/entities/company/api.ts";
import {TCompanyStore} from "@/entities/company/model.ts";

class CompanyStore implements TCompanyStore {
    companies: ICompany[] = [];
    status: TRequestStatus = "pending";

    constructor() {
        makeAutoObservable(this);
    }

    getCompanies = async (offset: number, limit: number): Promise<ICompany[]> => {
        try {
            this.status = "pending"
            const data: ICompany[] = await companyApi.getCompanies(offset, limit);
            this.companies = data;
            this.status = "fulfilled"
            return data;
        } catch (error) {
            console.error("Failed to fetch companies:", error);
            this.status = "rejected"
            return [];
        }
    }
}

export const companyStore = new CompanyStore();
