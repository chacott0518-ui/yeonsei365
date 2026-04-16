'use client';
import { useState } from 'react';

interface OvResult { ov: Date; fStart: Date; fEnd: Date; nextPeriod: Date; lmp: Date; period: number; diff: number; }

function addDays(d: Date, n: number): Date { const r = new Date(d); r.setDate(r.getDate()+n); return r; }
function fmtMD(d: Date): string { return `${d.getMonth()+1}월 ${d.getDate()}일`; }
function fmtS(d: Date): string { return `${d.getMonth()+1}/${d.getDate()}`; }
const DOW = ['일','월','화','수','목','금','토'];
function getDefaultDate(): string { const d = new Date(); d.setDate(d.getDate()-14); return d.toISOString().split('T')[0]; }

export default function OvulationCalculator() {
  const [lmp, setLmp] = useState(getDefaultDate());
  const [cycle, setCycle] = useState(28);
  const [period, setPeriod] = useState(5);
  const [result, setResult] = useState<OvResult|null>(null);

  function calculate() {
    const lmpDate = new Date(lmp);
    const ov = addDays(lmpDate, cycle-15);
    const fStart = addDays(ov,-4); const fEnd = addDays(ov,1);
    const nextPeriod = addDays(lmpDate, cycle);
    const today = new Date(); today.setHours(0,0,0,0);
    const diff = Math.round((ov.getTime()-today.getTime())/86400000);
    setResult({ ov, fStart, fEnd, nextPeriod, lmp:lmpDate, period, diff });
  }

  return (
    <div>
      <div className="mb-6 overflow-hidden rounded-2xl" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
        <div className="px-6 py-5" style={{ background:'#d63870' }}>
          <p className="mb-1 text-xs tracking-widest" style={{ color:'rgba(255,255,255,0.65)' }}>YEONSEI 365</p>
          <p className="text-lg font-black text-white">배란일 · 가임기 계산기</p>
          <p className="mt-1 text-xs" style={{ color:'rgba(255,255,255,0.75)' }}>생리 시작일과 주기를 입력하면 배란일을 알려드립니다</p>
        </div>
        <div className="px-6 py-6">
          <label className="mb-2 block text-xs font-bold" style={{ color:'#a04060' }}>마지막 생리 시작일</label>
          <input type="date" value={lmp} max={new Date().toISOString().split('T')[0]} onChange={(e)=>setLmp(e.target.value)} className="mb-4 w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{ borderColor:'#f0c0d4', background:'#fdf8fb', fontFamily:'inherit' }}/>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-xs font-bold" style={{ color:'#a04060' }}>생리 주기 (일)</label>
              <input type="number" value={cycle} min={21} max={45} onChange={(e)=>setCycle(Number(e.target.value))} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{ borderColor:'#f0c0d4', background:'#fdf8fb', fontFamily:'inherit' }}/>
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold" style={{ color:'#a04060' }}>생리 기간 (일)</label>
              <input type="number" value={period} min={2} max={10} onChange={(e)=>setPeriod(Number(e.target.value))} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{ borderColor:'#f0c0d4', background:'#fdf8fb', fontFamily:'inherit' }}/>
            </div>
          </div>
          <button onClick={calculate} className="w-full rounded-2xl py-4 text-base font-black text-white" style={{ background:'#d63870' }}>배란일 계산하기</button>
        </div>
      </div>

      {result && (
        <div className="rounded-2xl border-2 p-5 md:p-6" style={{ background:'#fff5f9', borderColor:'#f0b0cc' }}>
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-2xl" style={{ background:'#d63870' }}>🌸</div>
            <div>
              <div className="mb-1 text-xs font-bold" style={{ color:'#a04060' }}>예상 배란일</div>
              <div className="text-2xl font-black" style={{ color:'#d63870' }}>{fmtMD(result.ov)} ({DOW[result.ov.getDay()]}요일)</div>
              <div className="mt-1 text-sm font-bold" style={{ color:'#c06080' }}>
                {result.diff===0?'오늘이 배란일입니다':result.diff>0?`배란일까지 D-${result.diff}`:`배란일 ${Math.abs(result.diff)}일 경과`}
              </div>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            {[
              { label:'가임기 시작', val:fmtS(result.fStart) },
              { label:'가임기 종료', val:fmtS(result.fEnd) },
              { label:'다음 생리 예정', val:fmtS(result.nextPeriod) },
            ].map((item)=>(
              <div key={item.label} className="rounded-xl p-3 text-center" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
                <div className="mb-1 text-xs" style={{ color:'#b080a0' }}>{item.label}</div>
                <div className="text-sm font-bold" style={{ color:'#2a1520' }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div className="mb-4 rounded-xl p-4" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>💡 임신 시도 최적 날짜</div>
            <p className="text-sm leading-relaxed" style={{ color:'#444' }}>
              배란일 <strong style={{ color:'#d63870' }}>{fmtS(addDays(result.ov,-2))} ~ {fmtS(result.ov)}</strong> 사이가 임신 확률이 가장 높습니다.
              정자는 체내에서 최대 5일 생존하므로 배란일 2~3일 전부터 관계를 갖는 것이 효과적입니다.
            </p>
          </div>

          <div className="mb-4 rounded-xl p-4" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>🔍 배란 증상 체크리스트</div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
              {['투명하고 끈적한 냉 (달걀흰자 형태)','아랫배 한쪽 콕콕 쑤시는 통증 (배란통)','기초체온 0.2~0.5도 상승','가슴 약한 통증·팽만감','성욕 증가','경미한 출혈 (배란혈)'].map((s)=>(
                <div key={s} className="flex items-center gap-2 text-xs py-1" style={{ color:'#555' }}>
                  <span style={{ color:'#d63870' }}>✓</span> {s}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 rounded-xl p-4" style={{ background:'#fff8e8', border:'1px solid #f0d890' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#806020' }}>⚠️ 주의사항</div>
            <p className="text-sm leading-relaxed" style={{ color:'#555' }}>
              이 계산기는 평균 주기 기준 예상값입니다. 스트레스·질환·체중 변화로 배란일이 달라질 수 있습니다.
              정확한 배란 확인은 산부인과 초음파 검사를 권장합니다. 생리가 불규칙하다면 전문의 상담을 받으세요.
            </p>
          </div>

          <CalendarView result={result} />

          <div className="mb-5 flex flex-wrap gap-3">
            {[{ color:'#d63870', label:'배란일' },{ color:'#fce8f0', label:'가임기', border:'#e090b0' },{ color:'#e8f5ff', label:'생리 예정', border:'#90c0e0' }].map((l)=>(
              <div key={l.label} className="flex items-center gap-1.5 text-xs" style={{ color:'#777' }}>
                <span className="inline-block h-3 w-3 rounded-full" style={{ background:l.color, border:l.border?`1px solid ${l.border}`:undefined }}/>{l.label}
              </div>
            ))}
          </div>

          <hr style={{ borderColor:'#f0d0dc', margin:'16px 0' }}/>
          <div className="flex gap-3">
            <button onClick={()=>window.open('http://pf.kakao.com/_TpaBj/chat','_blank')} className="flex-1 rounded-xl py-3 text-sm font-bold" style={{ background:'#FEE500', color:'#3A1D1D' }}>💬 카카오 상담하기</button>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl py-3 text-center text-sm font-bold text-white" style={{ background:'#d63870' }}>전문의 상담 받기 →</a>
          </div>
        </div>
      )}
    </div>
  );
}

function CalendarView({ result }: { result: OvResult }) {
  const { ov, fStart, fEnd, nextPeriod, lmp, period } = result;
  const year = ov.getFullYear(); const month = ov.getMonth();
  const firstDay = new Date(year,month,1); const lastDay = new Date(year,month+1,0);
  function addDays(d: Date, n: number): Date { const r = new Date(d); r.setDate(r.getDate()+n); return r; }
  return (
    <div className="mb-4">
      <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>이번 달 사이클 캘린더</div>
      <div className="grid grid-cols-7 gap-1">
        {['일','월','화','수','목','금','토'].map((d)=><div key={d} className="py-1 text-center text-xs" style={{ color:'#b090a0' }}>{d}</div>)}
        {Array.from({ length:firstDay.getDay() }).map((_,i)=><div key={`e${i}`}/>)}
        {Array.from({ length:lastDay.getDate() }).map((_,i)=>{
          const day=i+1; const cur=new Date(year,month,day);
          const isOv=cur.getTime()===ov.getTime();
          const isFt=cur>=fStart&&cur<=fEnd&&!isOv;
          const isPd=(cur>=lmp&&cur<addDays(lmp,period))||(cur>=nextPeriod&&cur<addDays(nextPeriod,period));
          if(isOv) return <div key={day} className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white" style={{ background:'#d63870' }}>{day}</div>;
          if(isFt) return <div key={day} className="rounded-lg py-1.5 text-center text-xs font-bold" style={{ background:'#fce8f0', color:'#993556' }}>{day}</div>;
          if(isPd) return <div key={day} className="rounded-lg py-1.5 text-center text-xs" style={{ background:'#e8f5ff', color:'#1877c4' }}>{day}</div>;
          return <div key={day} className="py-1.5 text-center text-xs" style={{ color:'#555' }}>{day}</div>;
        })}
      </div>
    </div>
  );
}