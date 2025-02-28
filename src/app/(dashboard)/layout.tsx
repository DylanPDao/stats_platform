import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: 
    { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-36 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>
            Hello Sidebar
        </div>
      </div>
      <main className="md:pl-36">
        <Navbar />
        {children}
      </main>
    </div>
  );
}