import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Splash } from "@/features/splash";
import { Reload } from "@/features/reload";

export const Layout = () => {
  return (
    <>
      <Splash />
      <main className="bg-background h-screen">
        <Reload />
        <Header />
        <div className="h-full container mx-auto pt-16">
          <Outlet />
        </div>
      </main>
    </>
  );
};
