import { FC } from "react";
import { type ICompanyCardProps } from "@/widgets/company/model";
import { Card } from "@/shared/ui/card";
import EyeIcon from "@/shared/img/eye_white.png";
import { ClickModal } from "@/widgets/click-modal";
import DeleteIcon from "@/shared/img/trash_white.png";

export const CompanyCard: FC<ICompanyCardProps> = ({ data }) => {
  const { mobileAppDashboard, company, customerMarkParameters } = data;

  return (
    <Card style={{ background: mobileAppDashboard.cardBackgroundColor }}>
      <div
        className="flex justify-between items-center py-4"
        style={{ color: mobileAppDashboard.textColor }}
      >
        <h1
          className="text-2xl"
          style={{ color: mobileAppDashboard.highlightTextColor }}
        >
          {mobileAppDashboard.companyName}
        </h1>
        <img
          src={mobileAppDashboard.logo}
          alt={company.companyId}
          className="h-10 w-10 rounded-full"
        />
      </div>
      <hr
        style={{ border: `${mobileAppDashboard.textColor} 0.5px solid` }}
        className="box-border"
      />
      <h4>
        <span
          className="text-2xl"
          style={{ color: mobileAppDashboard.highlightTextColor }}
        >
          {customerMarkParameters.mark}
        </span>{" "}
        балла
      </h4>
      <div className="flex justify-between py-4">
        <div className="flex flex-col gap-1">
          <span
            className="text-md"
            style={{ color: mobileAppDashboard.highlightTextColor }}
          >
            Кэшбэк
          </span>
          <span
            className="text-md"
            style={{ color: mobileAppDashboard.textColor }}
          >
            {customerMarkParameters.loyaltyLevel.cashToMark}%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-md"
            style={{ color: mobileAppDashboard.highlightTextColor }}
          >
            Уровень
          </span>
          <span
            className="text-md"
            style={{ color: mobileAppDashboard.textColor }}
          >
            {customerMarkParameters.loyaltyLevel.name}
          </span>
        </div>
      </div>
      <hr
        style={{ border: `${mobileAppDashboard.textColor} 0.5px solid` }}
        className="box-border"
      />
      <div className="flex justify-between py-4">
        <ClickModal data={data} title="Посмотреть">
          <img className="h-4 w-4" src={EyeIcon} alt="Посмотреть" />
        </ClickModal>
        <ClickModal data={data} title="Удалить">
          <img className="h-4 w-4" src={DeleteIcon} alt="Удалить" />
        </ClickModal>
        <ClickModal data={data} title="Подробнее">
          Подробнее
        </ClickModal>
      </div>
    </Card>
  );
};
