'use client'
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

const NavbarRoutes = () => {
    const pathName = usePathname()
    // const router = useRouter()   
    
    const isTeacherPage = pathName?.startsWith('/teacher')
    const isPlayerPage = pathName?.includes('/chapter')
  return (
    <div className="flex mr-auto gap-x-2 items-center">
        {isPlayerPage || isTeacherPage?(
            <Link href='/teacher/courses'>
                <Button>
                    <LogOut className="h-4 w-4 ml-2" />
                    Exit
                </Button>
            </Link>
        ):(
            <Link href='/teacher/courses'>
                <Button size='sm' variant='secondary'>
                    وضع المعلم
                </Button>
            </Link>
        )}
        <UserButton 
            afterSignOutUrl="/"
        />
    </div>
  )
}

export default NavbarRoutes