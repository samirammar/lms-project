import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Sidebar from './sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='md:hidden hover:text-teal-500 transition cursor-pointer'>
        <Menu className='text-white' />
      </SheetTrigger>
      <SheetContent side='right' className='p-0 border-none'>
        <Sidebar />
      </SheetContent>
  </Sheet>
  )
}

export default MobileSidebar