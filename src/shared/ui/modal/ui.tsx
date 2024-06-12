import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { FC } from "react";
import { IModalProps } from "@/shared/ui/modal/model.ts";
import CloseIcon from "@/shared/img/close_icon.svg";

export const Modal: FC<IModalProps> = ({
  open,
  setOpen,
  children,
  title,
  ...props
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Transition
      show={open}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        className="fixed top-0 left-0 bg-black/30 backdrop-blur-2xl w-screen h-screen flex justify-center items-center"
        open={open}
        onClose={handleClose}
      >
        <DialogPanel {...props} className="bg-white py-4 px-6 rounded-xl w-96">
          {title && <DialogTitle>{title}</DialogTitle>}
          {children}
        </DialogPanel>

        <Button className="absolute bottom-20 p-2 rounded-full bg-background hover:brightness-110 active:-translate-y-1 duration-150">
          <img src={CloseIcon} alt="Закрыть" />
        </Button>
      </Dialog>
    </Transition>
  );
};
