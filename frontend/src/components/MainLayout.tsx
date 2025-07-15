import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
    return (
        <>
        <Header/>
        <main className="mt-20">
            <Outlet/>
        </main>
        </>
    );
}