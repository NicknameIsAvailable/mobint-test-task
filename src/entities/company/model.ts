import {ICompany, TRequestStatus} from "@/shared/types";

export interface ICompanyState {
    companies: ICompany[];
    status?: TRequestStatus;
}

export interface ICompanyActions {
    getCompanies(offset: number, limit: number): Promise<ICompany[]>;
}

export type TCompanyStore = ICompanyState & ICompanyActions;

export interface ICompanyApi {
    getCompanies(offset: number, limit: number): Promise<ICompany[]>;
}