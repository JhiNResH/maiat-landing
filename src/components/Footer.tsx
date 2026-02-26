'use client'

import { Feather, Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 px-[60px] py-20 border-t border-[#1e2035] bg-[#0a0b14] w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2.5">
          <Feather className="w-6 h-6 text-[#d4a017]" />
          <span className="font-mono text-lg font-bold tracking-[2px] text-[#e2e8f0]">MAIAT</span>
        </div>
        <p className="text-sm text-[#94a3b8] text-center max-w-[400px]">
          The Decentralized Trust Hub for AI Agents and On-chain Protocols.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <a href="https://github.com/JhiNResH/maiat" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#e2e8f0] transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-[#64748b] hover:text-[#e2e8f0] transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      <p className="text-xs text-[#64748b] font-mono uppercase tracking-widest">
        © 2026 Maiat Protocol • All-rights reserved
      </p>
    </footer>
  )
}
