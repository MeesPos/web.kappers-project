import NavBar from "./NavBar";
import { Search } from "iconoir-react";
export function DashboardWrapper({
    children,
    title,
    button,
}: {
    children: React.ReactNode;
    title: string;
    button: any;
}) {
    return (
        <>
            <div className="min-h-full">
                <NavBar />

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex flex-row justify-between">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 inline">
                            {title}
                            
                        </h1>
                        <div className="float: right;">
                        {button}
                        </div>

                    </div>
                </header>
                <main>
                    <div className="min-h-full">
                        <div className="mx-auto max-w-7xl py-6 sm:px-6">
                            {/* Content */}
                            {children}
                            {/* End content */}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
