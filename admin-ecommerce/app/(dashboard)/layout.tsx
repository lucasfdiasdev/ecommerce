import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div
        className="
          hidden 
          h-full 
          md:flex 
          md:flex-col 
          md:w-72 
          md:fixed 
          md:inset-y-0 z-[80] 
          bg-gray-900 
          sidebar-container
        "
      >
        <div className="text-white">
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-72">
        <Header />
        <div className="p-2 md:p-5">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
