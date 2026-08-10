'use client'

import { Phone, MapPin, MessageCircle } from 'lucide-react'

export default function FloatingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[calc(56px+env(safe-area-inset-bottom))] bg-primary border-t border-white/20 z-[10000] md:hidden flex items-center pb-[env(safe-area-inset-bottom)]">
      <a href="tel:02-585-3650" className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors">
        <Phone size={16} className="text-white" />
        <span className="text-xs font-bold text-white">전화문의</span>
      </a>
      <div className="w-[1px] h-5 bg-white/20"></div>
      <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors">
        <MessageCircle size={16} className="text-white" />
        <span className="text-xs font-bold text-white">카톡상담</span>
      </a>
      <div className="w-[1px] h-5 bg-white/20"></div>
      <a href="#location" onClick={(e) => {
        e.preventDefault()
        document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })
      }} className="flex items-center justify-center gap-1.5 flex-1 h-full active:bg-white/10 transition-colors">
        <MapPin size={16} className="text-white" />
        <span className="text-xs font-bold text-white">오시는길</span>
      </a>
    </div>
  )
}