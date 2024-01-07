import React from "react"
import Sidebar from "../_components/sidebar"
import Navbar from "../_components/navbar"


const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="h-full">
        <div className="h-[80px] inset-y-0 md:pr-56 w-full fixed z-50">
          <Navbar />
        </div>
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pr-56 h-full">
          {children}
        </main>
    </div>
  )
}

export default DashboardLayout