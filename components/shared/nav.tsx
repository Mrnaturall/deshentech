'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-white text-red-500 px-5 py-3 relative font-sans shadow'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Link href="/">
          <div className='flex items-center gap'>
            <Image src='/icons/deshen_logo.png' alt='logo' width={35} height={30} className='h-[30px]' />
            <h3 className='font-bold text-lg text-black mt-1'>Deshen Tech</h3>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className='hidden md:flex gap-4 items-center'>
          <Link href="/home" className='hover:bg-red-500 h-[27px] pt-1 px-[10px] text-sm rounded-md'>Home</Link>
          <Link href="/about" className='hover:bg-red-500 h-[27px] pt-1 px-[10px] text-sm rounded-md'>About</Link>
          <Link href="/contact" className='hover:bg-red-500 h-[27px] pt-1 px-[10px] text-sm rounded-md'>Contact</Link>
        </ul>

        {/* Sign In (Desktop) */}
        <div className='hidden md:block'>
          <Button className='h-[27px]'>Sign In</Button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden'>
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className='cursor-pointer' />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className='cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu on Right Side */}
      {menuOpen && (
        <div className='absolute right-0 top-14 w-40 bg-black rounded-md shadow-lg p-3 flex flex-col gap-2 z-50 md:hidden'>
          <Link href="/home" className='hover:bg-red-500 py-1 px-2 text-sm rounded-md'>Home</Link>
          <Link href="/about" className='hover:bg-red-500 py-1 px-2 text-sm rounded-md'>About</Link>
          <Link href="/contact" className='hover:bg-red-500 py-1 px-2 text-sm rounded-md'>Contact</Link>
          <Button className='h-[30px] mt-2'>Sign In</Button>
        </div>
      )}
    </div>
  )
}

export default Nav
