import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {FC} from "react";
import {IModalProps} from "@/shared/ui/modal/model.ts";

export const Modal: FC<IModalProps> = ({ open, setOpen, children, title }) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog className="fixed top-0 left-0 bg-black/30 backdrop-blur-2xl w-screen h-screen flex justify-center items-center" open={open} onClose={handleClose}>
            <DialogPanel className="bg-white py-4 px-6 rounded-xl w-96">
                {title &&
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                }
                {children}
            </DialogPanel>
        </Dialog>
    )
}