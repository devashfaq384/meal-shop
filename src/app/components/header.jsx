"use client"
import Link from "next/link"
import Logo from '../../../assets/header-logo.png'
import Image from "next/image"
import NavLink from './navLink'
const header = () => { 
  return (
    <header className="pl-4 flex justify-between bg-black" >
        <Link href='/' className=" rounded-full shadow-none md:shadow-xl shadow-orange-400/30" > 
            <Image src={Logo} className="  w-20"  alt="Logo" />
        </Link>
        <div className="flex gap-4 text-white p-5 font-bold justify-center" >
            <NavLink href={"/meals"} >Browse Meals</NavLink>
            <NavLink href={"/meals/share"} >Share Meals</NavLink>
            <NavLink href={"/community"} >Community</NavLink>
        </div>
    </header>
  )
}

export default header