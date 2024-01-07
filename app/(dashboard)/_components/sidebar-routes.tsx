"use client"
import { BarChart, CompassIcon, HomeIcon, List } from 'lucide-react'
import SidebarItem from './sidebar-item';
import { usePathname } from 'next/navigation';

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

const teacherRoutes = [
  {
    icon: List,
    label: 'الكورسات',
    href: '/teacher/courses'
  },
  {
    icon: BarChart,
    label: 'إحصائيات',
    href: '/teacher/analytics'
  }
]

const SidebarRoutes = () => {
    const pathName = usePathname();
    const routes = pathName?.startsWith('/teacher') ? teacherRoutes : guestRoutes;
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