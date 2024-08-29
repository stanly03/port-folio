import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,setToggleMenu] = useState(false)

    return (
    <header className="flex justify-between px-5 py-2 bg-primary items-center shadow-lg">
        <a href="#" className="font-bold text-black text-4xl font-hero-font"> Stanly </a>

        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>

        { toggleMenu && <nav className="block md:hidden mobile-nav mt-3">
        <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
    )

}
