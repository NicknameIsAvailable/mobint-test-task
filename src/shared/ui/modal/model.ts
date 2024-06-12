import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: ReactNode;
  title?: string;
}
