import { useEffect, useState } from "react";

export const usePageReload = () => {
  const [isReload, setIsReload] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("beforeunload", () => setIsReload(true));
    return () =>
      window.removeEventListener("beforeunload", () => setIsReload(false));
  }, []);

  return isReload;
};
