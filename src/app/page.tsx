'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  Search, ShieldCheck, Gauge, ArrowRight,
  BookOpen, Github, Bot, Plug, Cpu, Repeat, Link as LinkIcon, Feather
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0b14]">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center w-full px-4 md:px-[60px] pt-[100px] pb-20 gap-10"
        style={{
          background: 'linear-gradient(to bottom, #0a0b14, #0a0b14), radial-gradient(ellipse at 50% 30%, rgba(212,160,23,0.125) 0%, transparent 70%)',
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a01740]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4a017]" />
            <span className="text-xs font-medium text-[#d4a017] tracking-[0.5px]">
              The Trust Layer for the Agent Economy
            </span>
          </div>

          <h1
            className="text-[60px] md:text-[80px] font-extrabold tracking-[-2px] text-center"
            style={{
              background: 'linear-gradient(180deg, #d4a017 0%, #e8b84a 50%, #d4a017 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Maiat
          </h1>

          <p className="text-lg md:text-[22px] text-[#94a3b8] text-center max-w-[600px]">
            The native trust and reputation layer for agents on Base.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <Link
            href="https://maiat.xyz/explore"
            className="flex items-center gap-2 bg-[#d4a017] px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,160,23,0.3)]"
          >
            <span className="text-base font-bold text-[#0a0b14]">Launch App</span>
            <ArrowRight className="w-5 h-5 text-[#0a0b14]" />
          </Link>
          <Link
            href="https://maiat.xyz/docs"
            className="flex items-center gap-2 bg-[#12131f] border border-[#1e2035] px-8 py-4 rounded-xl hover:border-[#d4a01750] transition-colors"
          >
            <span className="text-base font-bold text-[#e2e8f0]">Read Docs</span>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="flex items-center justify-between px-4 md:px-[60px] py-8 border-y border-[#1e2035] w-full overflow-x-auto gap-8">
        {[
          { value: '847,293', label: 'Addresses Scored', color: 'text-[#e2e8f0]' },
          { value: '12,847', label: 'API Queries Today', color: 'text-[#e2e8f0]' },
          { value: '6', label: 'Chains Supported', color: 'text-[#00b4d8]' },
          { value: '<120ms', label: 'Avg Response Time', color: 'text-[#00c9a7]' },
        ].map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-8 flex-shrink-0 min-w-[200px]">
            {i > 0 && <div className="w-px h-12 bg-[#1e2035]" />}
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className={`font-mono text-[28px] font-semibold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs font-medium text-[#64748b] tracking-[0.5px]">{stat.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="flex flex-col items-center gap-12 px-4 md:px-[60px] py-20 w-full">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-[#d4a017] tracking-[2px]">HOW IT WORKS</span>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-1px] text-[#e2e8f0] text-center">Three steps to trust</h2>
          <p className="text-lg text-[#94a3b8] text-center">From query to protection in milliseconds</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {[
            { num: '01', numColor: 'text-[#d4a017]', numBg: 'bg-[#d4a01718]', icon: Search, iconColor: 'text-[#d4a017]', title: 'Query', desc: 'One API call, any address. Pass an on-chain address and get back a comprehensive trust assessment.' },
            { num: '02', numColor: 'text-[#00b4d8]', numBg: 'bg-[#00b4d818]', icon: Gauge, iconColor: 'text-[#00b4d8]', title: 'Score', desc: '0-10 trust score derived from on-chain history, contract analysis, blacklist checks, and activity patterns.' },
            { num: '03', numColor: 'text-[#00c9a7]', numBg: 'bg-[#00c9a718]', icon: ShieldCheck, iconColor: 'text-[#00c9a7]', title: 'Protect', desc: 'Uniswap v4 Hook blocks untrusted swaps automatically. Your agents trade with confidence, on-chain.' },
          ].map((card) => (
            <div key={card.num} className="flex-1 flex flex-col gap-5 bg-[#12131f] rounded-2xl border border-[#1e2035] p-8 hover:border-[#d4a01730] transition-colors">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${card.numBg}`}>
                <span className={`font-mono text-lg font-semibold ${card.numColor}`}>{card.num}</span>
              </div>
              <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              <h3 className="text-[22px] font-bold text-[#e2e8f0]">{card.title}</h3>
              <p className="text-[15px] text-[#94a3b8] leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="flex flex-col items-center gap-12 bg-[#12131f] border-y border-[#1e2035] px-4 md:px-[60px] py-20 w-full">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-semibold text-[#00b4d8] tracking-[2px]">INTEGRATIONS</span>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-1px] text-[#e2e8f0] text-center">Plug into the agent ecosystem</h2>
          <p className="text-lg text-[#94a3b8] text-center">One line of code to integrate trust scoring into any agent framework</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { icon: Bot, name: 'AgentKit' },
            { icon: Plug, name: 'MCP' },
            { icon: Cpu, name: 'ElizaOS' },
            { icon: Repeat, name: 'Uniswap v4' },
            { icon: LinkIcon, name: 'Chainlink' },
          ].map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2.5 rounded-xl border border-[#1e2035] px-8 py-5 hover:border-[#94a3b840] transition-colors">
              <logo.icon className="w-8 h-8 text-[#94a3b8]" />
              <span className="text-[13px] font-medium text-[#94a3b8]">{logo.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* For Developers */}
      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[60px] px-4 md:px-[60px] py-20 w-full max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#00c9a7] tracking-[2px]">FOR DEVELOPERS</span>
          <h2 className="text-[36px] font-bold tracking-[-0.5px] text-[#e2e8f0]">Built for agents, by builders</h2>
          <p className="text-base text-[#94a3b8] leading-[1.7]">
            No API key needed for the free tier. One GET request returns a full trust assessment. Integrate into any agent framework in minutes.
          </p>
          <div className="flex gap-4">
            <Link href="https://maiat.xyz/docs" className="flex items-center gap-2 bg-[#d4a017] rounded-[10px] px-7 py-3.5 hover:brightness-110 transition-all">
              <BookOpen className="w-[18px] h-[18px] text-[#0a0b14]" />
              <span className="text-sm font-semibold text-[#0a0b14]">Read the Docs</span>
            </Link>
            <a
              href="https://github.com/JhiNResH/maiat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-[10px] px-7 py-3.5 border border-[#2a2b45] hover:border-[#64748b] transition-colors"
            >
              <Github className="w-[18px] h-[18px] text-[#e2e8f0]" />
              <span className="text-sm font-semibold text-[#e2e8f0]">View on GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col rounded-2xl bg-[#0d0e1a] border border-[#1e2035] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e2035] bg-[#12131f]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c0392b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00c9a7]" />
            <span className="ml-2 font-mono text-[10px] text-[#64748b] uppercase font-bold tracking-widest">terminal</span>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <code className="font-mono text-[13px] text-[#00c9a7] leading-[1.6] break-all">
              $ curl https://api.maiat.xyz/v1/score/0x742d35Cc6634C0532925a3b844Bc9e7595f2bD28
            </code>
            <div className="flex flex-col gap-1">
              <code className="font-mono text-[13px] text-[#94a3b8]">{'{'}</code>
              <code className="font-mono text-[13px] text-[#94a3b8]">{'  "address": "0x742d...bD28",'}</code>
              <code className="font-mono text-[13px] text-[#d4a017]">{'  "score": 8.47,'}</code>
              <code className="font-mono text-[13px] text-[#00c9a7]">{'  "risk_level": "trusted",'}</code>
              <code className="font-mono text-[13px] text-[#94a3b8]">{'  "chain": "base"'}</code>
              <code className="font-mono text-[13px] text-[#94a3b8]">{'}'}</code>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
