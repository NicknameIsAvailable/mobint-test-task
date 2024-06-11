import {Button} from "@/shared/ui/button";
import DeleteIcon from "@/shared/img/trash_white.png"
import {FC, useState} from "react";
import {Modal} from "@/shared/ui/modal";
import {IDeleteModalProps} from "@/widgets/deleteModal/model.ts";

export const DeleteModal: FC<IDeleteModalProps> = ({ data }) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => setOpen(true)

    return (
        <>
            <Button primary={false} onClick={handleOpen} style={{ background: data?.mobileAppDashboard?.accentColor }}>
                <img className="h-4 w-4" src={DeleteIcon} alt="Удалить"/>
            </Button>
            <Modal open={open} setOpen={setOpen}>
                <p>Вы нажали кнопку "удалить"</p>
            </Modal>
        </>
    )
}