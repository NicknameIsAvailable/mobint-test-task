import {Outlet} from "react-router-dom";
import {Header} from "@/widgets/header";

export const Layout = () => {
    return (
        <main className="bg-background h-screen">
            <Header />
            <div className="h-full container mx-auto pt-16">
                <Outlet />
            </div>
        </main>
    )
}