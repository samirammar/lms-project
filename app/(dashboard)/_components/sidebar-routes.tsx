"use client"
import { CompassIcon, HomeIcon } from 'lucide-react'
import SidebarItem from './sidebar-item';

const guestRoutes = [
    {
        icon: HomeIcon,
        label: 'الرئيسية',
        href: '/'
    },
    {
      icon: CompassIcon,
      label: 'البحث',
      href: '/search'
    }
]

const SidebarRoutes = () => {
    const routes = guestRoutes;
  return (
    <div className='flex flex-col w-full h-full'>
        {
          routes.map((item)=> (
            <SidebarItem 
              key={item.href}
              icon={item.icon}
              href={item.href}
              label={item.label}
            />
          ))
        }
    </div>
  )
}

export default SidebarRoutes