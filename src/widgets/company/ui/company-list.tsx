import companyStore from "@/entities/company";
import {FC, useEffect} from "react";
import {ICompanyProps} from "@/widgets/company/model";
import {observer} from "mobx-react-lite";
import {CompanyCard} from "@/widgets/company";

export const CompanyList: FC<ICompanyProps> = observer(({ offset, limit }) => {
    const { companies, status, getCompanies } = companyStore

    useEffect(() => {
        getCompanies(offset || 0,  limit || 5)
    }, [])

    console.log(companies[0], status)

    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 flex-col">
            {companies.map(company => <CompanyCard data={company} key={company.company.companyId} />)}
        </div>
    )
})