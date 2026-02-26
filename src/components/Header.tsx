'use client'

import Link from 'next/link'
import { Feather } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between px-[60px] py-5 border-b border-[#1e2035] w-full z-50 bg-[#0a0b14]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <Feather className="w-7 h-7 text-[#d4a017]" />
        <span className="font-mono text-xl font-bold tracking-[3px] text-[#e2e8f0]">MAIAT</span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-8">
        <Link href="https://maiat.xyz/explore" className="text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0] transition-colors">
          Explore
        </Link>
        <Link href="https://maiat.xyz/docs" className="text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0] transition-colors">
          API Docs
        </Link>
        <Link 
          href="https://maiat.xyz/explore" 
          className="bg-[#d4a017] text-[#0a0b14] px-5 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all"
        >
          Launch App
        </Link>
      </nav>
    </header>
  )
}
