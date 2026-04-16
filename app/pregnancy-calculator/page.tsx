import type { Metadata } from 'next';
import PregnancyCalculator from './PregnancyCalculator';
export const metadata: Metadata = {
  title: '임신주수 계산기 | 출산예정일 자동 계산 — 연세365산부인과',
  description: '마지막 생리 시작일을 입력하면 현재 임신주수, 출산예정일, 삼분기 정보를 바로 확인할 수 있습니다.',
  alternates: { canonical: 'https://www.yeonsei365.com/임신주수계산기' },
};
export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#f7eef2' }}>
      <section className="w-full px-5 py-10 md:px-8 md:py-14" style={{ background: '#d63870' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>연세365 › 임신주수계산기</p>
          <h1 className="text-2xl font-black leading-snug text-white md:text-4xl">임신주수 계산기 — 출산예정일 자동 계산</h1>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>마지막 생리 시작일(LMP)을 입력하면 현재 임신주수, 출산예정일, 이 주수의 증상과 권장 검사를 바로 확인할 수 있습니다.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
        <PregnancyCalculator />
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-16 md:px-8">
        <h2 className="mb-2 text-xl font-black" style={{ color: '#2a1520' }}>임신주수별 증상 · 정보</h2>
        <div className="mt-8 rounded-2xl p-6 text-sm leading-relaxed" style={{ background: '#fff', border: '1px solid #f0dce4', color: '#555' }}>
          <h2 className="mb-3 text-base font-black" style={{ color: '#2a1520' }}>임신주수 계산기란?</h2>
          <p className="mb-3">임신주수는 마지막 생리 시작일(LMP)을 기준으로 계산합니다. 실제 수정일이 아닌 생리 시작일 기준이므로 실제 태아 나이보다 약 2주 길게 계산됩니다.</p>
          <p>출산예정일(EDD)은 마지막 생리 시작일로부터 280일(40주)을 더해 계산합니다. 임신 초기(1~13주)는 1분기, 중기(14~27주)는 2분기, 후기(28주~)는 3분기입니다.</p>
        </div>
      </section>
    </main>
  );
}