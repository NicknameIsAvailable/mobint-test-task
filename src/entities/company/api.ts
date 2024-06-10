import {ICompany, ICompanyRequest} from "@/shared/types";
import {api} from "@/shared/lib";
import { companies } from "@/shared/data/companies"
import {ICompanyApi} from "@/entities/company/model.ts";

export const companyApi: ICompanyApi = {
    async getCompanies(offset: number, limit: number): Promise<ICompany[]> {
        // const body: ICompanyRequest = {
        //     offset,
        //     limit,
        // }
        // const {data}: {data: ICompany[]} = await api.post('/mobileapp/getAllCompanies',
        //     body
        // );
        const data: ICompany[] = await new Promise<ICompany[]>(resolve => {
            setTimeout(() => {
                resolve([
                    ...companies
                ]);
            }, 1000);
        });
        return data;
    }
}