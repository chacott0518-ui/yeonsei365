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
              <Link key={chip.href} href={chip.href} onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '16px', padding: '10px 14px', background: '#d63870', width: '210px', boxShadow: '0 4px 18px rgba(214,56,112,0.35)', textDecoration: 'none' }}>
                <span style={{ display: 'flex', width: '32px', height: '32px', flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', fontSize: '15px' }}>{chip.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{chip.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', marginTop: '2px' }}>{chip.sub}</div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 토글 버튼 — 닫혔을 때 아이콘만, 열렸을 때 닫기 */}
      <motion.button whileTap={{ scale: 0.93 }} onClick={() => setOpen((v) => !v)}
        style={{ background: '#d63870', boxShadow: '0 4px 18px rgba(214,56,112,0.4)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px' }}
        aria-label="임신 계산기 열기">
        <span style={{ fontSize: '20px' }}>{open ? '✕' : '📅'}</span>
      </motion.button>
    </div>
  );
}