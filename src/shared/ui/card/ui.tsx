import { FC } from "react";
import { ICardProps } from "./model.ts";

export const Card: FC<ICardProps> = ({ children, ...props }) => {
  return (
    <div className="bg-white rounded-2xl px-4 py-6" {...props}>
      {children}
    </div>
  );
};
