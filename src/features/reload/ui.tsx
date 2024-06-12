import { usePageReload } from "./lib";
import { Loader } from "@/shared/ui/loader";
import { cn } from "@/shared/lib";

export const Reload = () => {
  const isReload = usePageReload();

  return (
    <div
      className={cn(
        isReload ? "translate-y-16" : "-translate-y-16",
        "z-10 fixed flex justify-center items-center w-screen duration-300",
      )}
    >
      <div className="bg-white shadow mx-auto h-12 w-12 rounded-full flex justify-center items-center">
        <Loader primary={true} />
      </div>
    </div>
  );
};
