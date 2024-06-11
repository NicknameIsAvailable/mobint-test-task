import {Button} from "@/shared/ui/button";
import DeleteIcon from "@/shared/img/trash_white.png"
import {useState} from "react";
import {Modal} from "@/shared/ui/modal";

export const DeleteModal = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => setOpen(true)

    return (
        <>
            <Button primary={false} onClick={handleOpen}>
                <img className="h-4 w-4" src={DeleteIcon} alt="Удалить"/>
            </Button>
            <Modal open={open} setOpen={setOpen}>
                <p>Вы нажали кнопку "удалить"</p>
            </Modal>
        </>
    )
}