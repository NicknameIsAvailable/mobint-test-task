import companyStore from "@/entities/company";
import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { CompanyCard } from "@/widgets/company";
import { Loader } from "@/shared/ui/loader";
import { Button } from "@/shared/ui/button";
import { IntersectionObserverComponent } from "@/shared/ui/intersection-observer";

export const CompanyList: FC = observer(() => {
  const { companies, getCompanies, getMoreCompanies, isLimitReached } =
    companyStore;

  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  const handleGetCompanies = () => getCompanies();

  if (companies?.state === "pending") {
    return (
      <div className="flex justify-center">
        <Loader text={"Подгрузка компаний"} />
      </div>
    );
  }

  if (companies?.state === "rejected") {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-danger">Произошла ошибка</h1>
        <Button onClick={handleGetCompanies}>Попробовать еще раз</Button>
      </div>
    );
  }

  if (companies?.state === "fulfilled") {
    return (
      <div className="flex flex-col gap-2 pb-10">
        {companies?.value.length === 0 ? (
          <div className="flex justify-center items-center gap-2">
            <span>Нет компаний</span>
          </div>
        ) : (
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 flex-col">
            {companies?.value?.map((company) => (
              <CompanyCard data={company} key={company.company.companyId} />
            ))}
          </div>
        )}
        {!isLimitReached && (
          <div className="flex flex-col justify-center items-center">
            <IntersectionObserverComponent onIntersection={getMoreCompanies} />
            <Loader text="Подгрузка компаний" />
          </div>
        )}
      </div>
    );
  }

  return <></>;
});
