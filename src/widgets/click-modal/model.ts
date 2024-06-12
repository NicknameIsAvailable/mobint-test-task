import { ICompany } from "@/shared/types";
import { ReactNode } from "react";

export interface IDeleteModalProps {
  data: ICompany;
  title?: string;
  children?: ReactNode;
}
