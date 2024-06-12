import { FC } from "react";
import { ILoaderProps } from "@/shared/ui/loader/model.ts";
import { cn } from "@/shared/lib";

export const Loader: FC<ILoaderProps> = ({
  text,
  primary = false,
  ...props
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <div
        className={cn(
          primary ? "border-primary" : "border-text",
          "inline-block h-8 w-8 animate-spin rounded-full border-4 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        )}
        role="status"
        {...props}
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
      </div>
      {text && <span className="text-text text-md">{text}</span>}
    </div>
  );
};
