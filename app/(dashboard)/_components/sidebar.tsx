import Logo from './logo'
import SidebarRoutes from './sidebar-routes'


const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-800 text-white h-full overflow-y-auto shadow-teal-200 shadow-sm">
        <div className="p-6">
            <Logo />
        </div>
        <div className="flex flex-col w-full">
          <SidebarRoutes />
        </div>
    </div>
  )
}

export default Sidebar