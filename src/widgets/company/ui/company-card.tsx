import {FC} from "react";
import { type ICompanyCardProps } from "@/widgets/company/model";
import {Card} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";
import EyeIcon from "@/shared/img/eye_white.png"
import {DeleteModal} from "@/widgets/deleteModal";

export const CompanyCard: FC<ICompanyCardProps> = ({ data   }) => {
    const { mobileAppDashboard , company, customerMarkParameters} = data

    return (
        <Card style={{background: mobileAppDashboard.cardBackgroundColor}}>
            <div className="flex justify-between py-4">
                <h1>
                    {mobileAppDashboard.companyName}
                </h1>
                <img src={mobileAppDashboard.logo} alt={company.companyId} className="h-8 w-8 rounded-full"/>
            </div>
            <hr/>
            <h4>
                <span>{customerMarkParameters.mark}</span> балла
            </h4>
            <div className="flex justify-between py-4">
                <div className="flex flex-col gap-1">
                    <span className="text-md" style={{color: mobileAppDashboard.highlightTextColor}}>Кэшбэк</span>
                    <span className="text-md"
                          style={{color: mobileAppDashboard.textColor}}>{customerMarkParameters.loyaltyLevel.cashToMark}%</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-md" style={{color: mobileAppDashboard.highlightTextColor}}>Уровень</span>
                    <span className="text-md"
                          style={{color: mobileAppDashboard.textColor}}>{customerMarkParameters.loyaltyLevel.name}</span>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between py-4">
                <Button primary={false}>
                    <img className="h-4 w-4" src={EyeIcon} alt="Посмотреть"/>
                </Button>
                <DeleteModal />
                <Button
                    style={{
                        background: mobileAppDashboard.accentColor,
                        color: mobileAppDashboard.cardBackgroundColor
                }}
                >
                    Подробнее
                </Button>
            </div>
        </Card>
    )
}