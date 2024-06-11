import {FC} from "react";
import {IButtonProps} from "./model";
import {cn} from "@/shared/lib";
import {Button as HeadlessUIButton} from "@headlessui/react"

export const Button: FC<IButtonProps> = ({children, primary = true, ...props}) => {
    return (
        <HeadlessUIButton
            className={cn(primary ? "bg-primary text-white" : "bg-transparent text-primary hover:bg-black/10", "text-base px-4 py-2 rounded-xl hover:brightness-110 active:-translate-y-1 duration-150")}
            {...props}
        >
            {children}
        </HeadlessUIButton>
    );
};
