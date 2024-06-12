import Logo from "@/shared/img/logo.png";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { isFirstEnter, setIsFirstEnter } from "@/features/splash/lib.ts";

export const Splash = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
    setIsFirstEnter(false);
  }, []);

  if (isFirstEnter())
    return (
      <Transition
        show={visible}
        enter="transition-opacity duration-300"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
          <Transition
            show={visible}
            enter="transition-all duration-600"
            enterFrom="opacity-0 -translate-y-10 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition-all duration-700"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-10 scale-95"
          >
            <img src={Logo} alt="Logo" className="w-64 h-64" />
          </Transition>
        </div>
      </Transition>
    );
};
