import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen gap-6 mt-4">
            <DashboardSidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DashboardLayout;