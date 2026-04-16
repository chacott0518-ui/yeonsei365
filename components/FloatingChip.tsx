'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const HIDE_ON = ['/pregnancy-calculator', '/ovulation-calculator'];

const CHIPS = [
  { href: '/pregnancy-calculator', icon: '📅', label: '임신주수 계산기', sub: '주수·출산예정일 바로 확인' },
  { href: '/ovulation-calculator', icon: '🌸', label: '배란일·가임기 계산기', sub: '배란일·가임기 바로 확인' },
];

export default function FloatingChip() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (HIDE_ON.includes(pathname)) return null;
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-6">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.95 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="flex flex-col items-end gap-2">
            {CHIPS.map((chip) => (
              <Link key={chip.href} href={chip.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all hover:scale-[1.02] active:scale-[0.98]" style={{ background: '#d63870', width: 230, boxShadow: '0 4px 18px rgba(214,56,112,0.35)' }}>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-base" style={{ background: 'rgba(255,255,255,0.2)' }}>{chip.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white leading-tight">{chip.label}</div>
                  <div className="mt-0.5 text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{chip.sub}</div>
                </div>
                <span className="text-sm flex-shrink-0" style={{ color: 'rgba(255,255,255,0.7)' }}>›</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileTap={{ scale: 0.93 }} onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 rounded-full px-5 py-3 font-bold text-white" style={{ background: '#d63870', boxShadow: '0 4px 18px rgba(214,56,112,0.4)' }} aria-label="임신 계산기 열기">
        <span className="text-base">{open ? '✕' : '📅'}</span>
        <span className="whitespace-nowrap text-sm">{open ? '닫기' : '임신 계산기'}</span>
      </motion.button>
    </div>
  );
}