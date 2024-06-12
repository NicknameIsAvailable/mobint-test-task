import { makeAutoObservable } from "mobx";
import { companyApi } from "@/entities/company/api.ts";
import { TCompanyStore } from "./model";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { ICompany } from "@/shared/types";

class CompanyStore implements TCompanyStore {
  companies?: IPromiseBasedObservable<ICompany[]>;
  currentOffset: number = 0;
  currentLimit: number = 5;
  isLimitReached: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCompanies = (): IPromiseBasedObservable<ICompany[]> | undefined => {
    try {
      this.currentOffset = 0;
      this.isLimitReached = false;
      const data: IPromiseBasedObservable<ICompany[]> = fromPromise(
        companyApi.getCompanies(this.currentOffset, this.currentLimit),
      );
      this.companies = data;
      this.currentOffset += this.currentLimit;
      return data;
    } catch (error) {
      console.error("Failed to fetch companies:", error);
    }
  };

  getMoreCompanies = async (): Promise<
    IPromiseBasedObservable<ICompany[]> | undefined
  > => {
    try {
      const newData: ICompany[] = await companyApi.getCompanies(
        this.currentOffset,
        this.currentLimit,
      );

      if (newData.length === 0) {
        this.isLimitReached = true;
        return this.companies;
      }

      const currentData: ICompany[] | undefined = await this.companies;
      if (currentData) {
        const mergedData: ICompany[] = currentData?.concat(newData);
        this.companies = fromPromise(Promise.resolve(mergedData));
        this.currentOffset += this.currentLimit;

        return this.companies;
      }

      return newData;
    } catch (error) {
      console.error("Failed to fetch companies:", error);
      this.getMoreCompanies();
    }
  };
}

export const companyStore = new CompanyStore();
