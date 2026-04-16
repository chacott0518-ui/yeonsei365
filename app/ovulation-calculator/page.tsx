import type { Metadata } from 'next';
import OvulationCalculator from './OvulationCalculator';
export const metadata: Metadata = {
  title: '배란일 계산기 | 가임기·배란일 자동 계산 — 연세365산부인과',
  description: '생리 시작일과 주기를 입력하면 배란일, 가임기, 다음 생리 예정일을 자동으로 계산합니다.',
  alternates: { canonical: 'https://www.yeonsei365.com/배란일계산기' },
};
export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: '#f7eef2' }}>
      <section className="w-full px-5 py-10 md:px-8 md:py-14" style={{ background: '#d63870' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>연세365 › 임신주수계산기 › 배란일계산기</p>
          <h1 className="text-2xl font-black leading-snug text-white md:text-4xl">배란일 계산기 — 가임기·배란일 자동 계산</h1>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>마지막 생리 시작일과 생리주기를 입력하면 배란일, 가임기 구간, 다음 생리 예정일을 달력으로 확인할 수 있습니다.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-8 md:px-8">
        <OvulationCalculator />
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-16 md:px-8">
        <div className="rounded-2xl p-6 text-sm leading-relaxed" style={{ background: '#fff', border: '1px solid #f0dce4', color: '#555' }}>
          <h2 className="mb-3 text-base font-black" style={{ color: '#2a1520' }}>배란일이란?</h2>
          <p className="mb-3">배란일이란 난소에서 성숙한 난자가 배출되는 날로, 임신 가능성이 가장 높은 시기입니다. 일반적으로 다음 생리 예정일에서 14일을 뺀 날이 배란일입니다.</p>
          <p>가임기는 배란일 기준으로 전후 약 5~7일 구간입니다. 정자는 체내에서 최대 5일 생존하므로 배란일 4~5일 전부터 배란일 당일이 임신 가능성이 가장 높습니다.</p>
        </div>
      </section>
    </main>
  );
}