import { ICompany } from "@/shared/types";
import { IPromiseBasedObservable } from "mobx-utils";

export interface ICompanyState {
  companies?: IPromiseBasedObservable<ICompany[]>;
  currentOffset: number;
  currentLimit: number;
  isLimitReached: boolean;
}

export interface IGetCompaniesResponse {
  companies: ICompany[];
  offset: number;
  limit: number;
}

export interface ICompanyActions {
  getCompanies(): IPromiseBasedObservable<ICompany[]> | undefined;
  getMoreCompanies(): Promise<IPromiseBasedObservable<ICompany[]> | undefined>;
}

export type TCompanyStore = ICompanyState & ICompanyActions;

export interface ICompanyApi {
  getCompanies(offset: number, limit: number): Promise<ICompany[]>;
}
