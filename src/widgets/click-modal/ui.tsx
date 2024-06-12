import { Button } from "@/shared/ui/button";
import { FC, useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { IDeleteModalProps } from "@/widgets/click-modal/model.ts";

export const ClickModal: FC<IDeleteModalProps> = ({
  data,
  children,
  title,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        primary={false}
        onClick={handleOpen}
        style={{ background: data?.mobileAppDashboard?.accentColor }}
      >
        {children}
      </Button>
      <Modal open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-xl text-secondary">Вы нажали кнопку "{title}"</p>
          <p className="text-xl text-secondary">
            ID компании: {data.company.companyId}
          </p>
          <Button onClick={handleClose}>Хорошо</Button>
        </div>
      </Modal>
    </>
  );
};
