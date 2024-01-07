"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}
const SidebarItem = ({href, icon: Icon, label}: SidebarItemProps) => {
  const pathName = usePathname()
  const router = useRouter()

  const isActive = (pathName === '/' && href === '/') || pathName === href || pathName?.startsWith(`${href}/`)
  
  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      disabled={isActive}
      onClick={onClick}
      type="button"
      className={cn('flex items-center gap-x-2 text-sm font-[500] transition-all hover:text-teal-500 hover:bg-teal-300/10 pr-6',
        isActive&& 'text-teal-500 bg-teal-300/10 '
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} />
        {label}
      </div>
      <div className={cn("hidden mr-auto border-2 border-teal-500 h-full transition-all", isActive&& "block")} />
    </button>
  )
}

export default SidebarItem