import companyStore from "@/entities/company";
import {FC, useEffect} from "react";
import {ITaskListProps} from "@/widgets/task/model";
import {observer} from "mobx-react-lite";

export const TaskList: FC<ITaskListProps> = observer(({ offset, limit }) => {
    const { companies, status, getCompanies } = companyStore

    useEffect(() => {
        getCompanies(offset || 0,  limit || 5)
    }, [])

    console.log(companies[0], status)

    return (
        <></>
    )
})