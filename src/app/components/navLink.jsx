'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

const navLink = ({href , children}) => {
  const path = usePathname();
  return (
    <Link href={href} >
        <p className={` ${path == href ? "transition-all duration-500  bg-gray-700" : " "} underline-hover transition-all duration-500  hover:bg-gray-700 px-4 py-2 rounded`}>
            {children}
        </p>
    </Link>
  )
}

export default navLink