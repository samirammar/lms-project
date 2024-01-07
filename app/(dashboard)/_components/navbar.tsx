import NavbarRoutes from "@/components/navbar-routes"
import MobileSidebar from "./mobile-sidebar"

const Navbar = () => {
  return (
    <div className="flex items-center p-4 h-full bg-slate-800 text-white shadow-sm shadow-teal-200">
        <MobileSidebar />
        <NavbarRoutes />
    </div>
  )
}

export default Navbar