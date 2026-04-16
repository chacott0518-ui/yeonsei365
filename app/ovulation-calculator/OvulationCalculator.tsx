'use client';
import { useState } from 'react';

function addDays(d:Date,n:number):Date{const r=new Date(d);r.setDate(r.getDate()+n);return r;}
function fmtMD(d:Date):string{return `${d.getMonth()+1}월 ${d.getDate()}일`;}
function fmtS(d:Date):string{return `${d.getMonth()+1}/${d.getDate()}`;}
const DOW=['일','월','화','수','목','금','토'];
function getDefault():string{const d=new Date();d.setDate(d.getDate()-14);return d.toISOString().split('T')[0];}

interface OvR{ov:Date;fStart:Date;fEnd:Date;nextPeriod:Date;lmp:Date;period:number;diff:number;}

const FAQS=[
  {q:'배란일 계산은 어떻게 하나요? 정확한가요?',a:'배란일은 보통 다음 생리 예정일에서 14일을 뺀 날로 계산합니다. 생리주기가 28일이라면 생리 시작 후 14일째가 배란일이 됩니다. 이는 평균적인 예상값이며 스트레스·체중 변화·질환·약물 복용 등으로 실제 배란일은 달라질 수 있습니다. 정확한 배란 시기를 알려면 산부인과 초음파 검사나 배란 테스트기(LH 서지 측정)를 사용하세요. 임신을 계획 중이라면 배란일 2~3일 전부터 임신 시도를 시작하는 것이 효과적입니다.'},
  {q:'가임기란 무엇이고 언제인가요?',a:'가임기란 임신이 가능한 기간으로 배란일을 기준으로 전후 약 5~7일 구간입니다. 정자는 체내에서 최대 5일 생존할 수 있고 난자는 배란 후 12~24시간만 생존하므로 배란일 4~5일 전부터 배란일 당일이 임신 가능한 기간입니다. 통계적으로 임신 확률이 가장 높은 날은 배란일 1~2일 전입니다. 생리주기가 불규칙한 경우 배란 테스트기나 기초체온법을 함께 사용하면 더 정확합니다.'},
  {q:'임신중절수술 비용(낙태 비용)은 얼마인가요?',a:'임신중절수술 비용은 임신 주수와 시술 방법에 따라 다릅니다. 연세365산부인과 기준으로 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이며 양양제·1인 회복실·현금/카드 동일·부가세가 포함된 금액입니다. 주수가 늘어날수록 비용이 올라가므로 결정하셨다면 빠를수록 비용과 위험 모두 줄일 수 있습니다. 익명 상담 및 비밀 보장이 가능합니다.'},
  {q:'생리가 불규칙하면 배란일을 어떻게 알 수 있나요?',a:'생리주기가 불규칙하다면 계산기로 나온 배란일은 참고용으로만 사용하세요. 정확한 배란일을 확인하는 방법으로는 배란 테스트기(LH 서지 측정) 사용, 기초체온법(매일 아침 기상 직후 체온 측정), 산부인과 초음파 검사가 있습니다. 특히 초음파 검사는 배란 시기를 가장 정확하게 확인할 수 있는 방법입니다. 3개월 이상 임신이 안 된다면 산부인과 전문의 상담을 받으세요.'},
  {q:'임신중절수술은 몇 주까지 가능하고 어떻게 진행되나요?',a:'임신 초기(14주 이내)에 시술하는 것이 가장 안전합니다. 임신 7주 이내에는 약물 방법도 가능하며 이후에는 수술적 방법(흡입술, 소파술)이 일반적입니다. 주수가 늘어날수록 시술이 복잡해지고 위험도가 높아집니다. 당일 수술 및 퇴원이 가능하며 전문의가 직접 시술합니다. 모든 과정에서 1인 회복실 사용, 비밀 보장, 익명 상담이 가능합니다.'},
];

export default function OvulationCalculator(){
  const [lmp,setLmp]=useState(getDefault());
  const [cycle,setCycle]=useState(28);
  const [period,setPeriod]=useState(5);
  const [res,setRes]=useState<OvR|null>(null);
  const [tab,setTab]=useState(0);
  const [faqOpen,setFaqOpen]=useState<number|null>(null);

  function calc(){
    const lmpDate=new Date(lmp);
    const ov=addDays(lmpDate,cycle-15);
    const fStart=addDays(ov,-4);const fEnd=addDays(ov,1);
    const nextPeriod=addDays(lmpDate,cycle);
    const today=new Date();today.setHours(0,0,0,0);
    const diff=Math.round((ov.getTime()-today.getTime())/86400000);
    setRes({ov,fStart,fEnd,nextPeriod,lmp:lmpDate,period,diff});
    setTab(0);
  }

  const TABS=['📅 달력','💡 최적 날짜','🔍 배란 증상','⚠️ 주의사항'];

  return(
    <div>
      <div className="mb-6 overflow-hidden rounded-2xl" style={{background:'#fff',border:'1px solid #f0dce4'}}>
        <div className="px-6 py-5" style={{background:'#d63870'}}>
          <p className="mb-1 text-xs tracking-widest" style={{color:'rgba(255,255,255,0.65)'}}>YEONSEI 365</p>
          <p className="text-lg font-black text-white">배란일 · 가임기 계산기</p>
          <p className="mt-1 text-xs" style={{color:'rgba(255,255,255,0.75)'}}>생리 시작일과 주기를 입력하면 배란일·가임기를 알려드립니다</p>
        </div>
        <div className="px-6 py-6">
          <label className="mb-2 block text-xs font-bold tracking-wide" style={{color:'#a04060'}}>마지막 생리 시작일</label>
          <input type="date" value={lmp} max={new Date().toISOString().split('T')[0]} onChange={e=>setLmp(e.target.value)} className="mb-4 w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{borderColor:'#f0c0d4',background:'#fdf8fb',fontFamily:'inherit'}}/>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wide" style={{color:'#a04060'}}>생리 주기 (일)</label>
              <input type="number" value={cycle} min={21} max={45} onChange={e=>setCycle(Number(e.target.value))} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{borderColor:'#f0c0d4',background:'#fdf8fb',fontFamily:'inherit'}}/>
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold tracking-wide" style={{color:'#a04060'}}>생리 기간 (일)</label>
              <input type="number" value={period} min={2} max={10} onChange={e=>setPeriod(Number(e.target.value))} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{borderColor:'#f0c0d4',background:'#fdf8fb',fontFamily:'inherit'}}/>
            </div>
          </div>
          <button onClick={calc} className="w-full rounded-2xl py-4 text-base font-black text-white hover:opacity-90 active:scale-[0.98] transition-all" style={{background:'#d63870'}}>배란일 계산하기</button>
        </div>
      </div>

      {res&&(
        <div className="rounded-2xl border-2 overflow-hidden" style={{background:'#fff5f9',borderColor:'#f0b0cc'}}>
          <div className="p-5 md:p-6">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-2xl" style={{background:'#d63870'}}>🌸</div>
              <div>
                <div className="mb-1 text-xs font-bold" style={{color:'#a04060'}}>예상 배란일</div>
                <div className="font-black" style={{fontSize:'clamp(20px,5vw,26px)',color:'#d63870'}}>{fmtMD(res.ov)} ({DOW[res.ov.getDay()]}요일)</div>
                <div className="mt-1 text-sm font-bold" style={{color:'#c06080'}}>
                  {res.diff===0?'오늘이 배란일입니다':res.diff>0?`배란일까지 D-${res.diff}`:`배란일 ${Math.abs(res.diff)}일 경과`}
                </div>
              </div>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4">
              {[{l:'가임기 시작',v:fmtS(res.fStart)},{l:'가임기 종료',v:fmtS(res.fEnd)},{l:'임신 최적일',v:fmtS(addDays(res.ov,-2))+'~'+fmtS(res.ov)},{l:'다음 생리 예정',v:fmtS(res.nextPeriod)}].map(i=>(
                <div key={i.l} className="rounded-xl p-3 text-center" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                  <div className="mb-1 text-xs" style={{color:'#b080a0'}}>{i.l}</div>
                  <div className="text-sm font-bold" style={{color:'#2a1520'}}>{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-x-auto border-b" style={{borderColor:'#f0dce4'}}>
            {TABS.map((t,i)=>(
              <button key={t} onClick={()=>setTab(i)} className="flex-shrink-0 px-4 py-3 text-xs font-bold" style={{background:'transparent',border:'none',borderBottom:`2px solid ${tab===i?'#d63870':'transparent'}`,color:tab===i?'#d63870':'#a06070',fontFamily:'inherit',cursor:'pointer',whiteSpace:'nowrap'}}>
                {t}
              </button>
            ))}
          </div>

          <div className="p-5">
            {tab===0&&<CalendarView result={res}/>}
            {tab===1&&(
              <div className="rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                <div className="mb-2 text-xs font-bold" style={{color:'#a04060'}}>💡 임신 시도 최적 날짜</div>
                <p className="text-sm leading-relaxed" style={{color:'#444'}}>
                  배란일 <strong style={{color:'#d63870'}}>{fmtS(addDays(res.ov,-2))} ~ {fmtS(res.ov)}</strong> 사이가 임신 확률이 가장 높습니다.
                  정자는 체내에서 최대 5일 생존하므로 배란일 2~3일 전부터 관계를 갖는 것이 효과적입니다.
                  통계적으로 배란일 당일보다 배란일 1~2일 전이 임신 확률이 더 높습니다.
                  임신 시도 시 스트레스를 줄이고 엽산(하루 400mcg)을 미리 복용하면 좋습니다.
                  3개월 이상 임신이 안 된다면 산부인과 전문의 상담을 권장합니다.
                </p>
              </div>
            )}
            {tab===2&&(
              <div className="rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                <div className="mb-3 text-xs font-bold" style={{color:'#a04060'}}>🔍 배란 증상 체크리스트</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['투명하고 끈적한 냉 (달걀흰자 형태)','아랫배 한쪽 콕콕 쑤시는 통증 (배란통)','기초체온 0.2~0.5도 상승','가슴 약한 통증·팽만감','성욕 증가','경미한 출혈 (배란혈)'].map(s=><span key={s} className="rounded-lg px-3 py-1 text-xs" style={{background:'#fce8f0',color:'#993556'}}>{s}</span>)}
                </div>
                <p className="text-sm leading-relaxed" style={{color:'#555'}}>배란 증상은 개인차가 매우 큽니다. 증상이 전혀 없어도 배란은 정상적으로 일어납니다. 정확한 배란 시기 확인은 산부인과 초음파 검사 또는 배란 테스트기를 사용하세요.</p>
              </div>
            )}
            {tab===3&&(
              <div className="rounded-xl p-4" style={{background:'#fff8e8',border:'1px solid #f0d890'}}>
                <div className="mb-2 text-xs font-bold" style={{color:'#806020'}}>⚠️ 주의사항</div>
                <p className="text-sm leading-relaxed" style={{color:'#555'}}>이 계산기는 평균 생리주기를 기준으로 한 예상값입니다. 스트레스·체중 변화·질환·약물 복용 등으로 실제 배란일이 달라질 수 있습니다. 생리주기가 불규칙하거나 3개월 이상 임신이 안 된다면 산부인과 전문의 상담을 권장합니다.</p>
              </div>
            )}
          </div>

          <div className="flex gap-3 px-5 pb-5">
            <button onClick={()=>window.open('http://pf.kakao.com/_TpaBj/chat','_blank')} className="flex-1 rounded-xl py-3 text-sm font-bold hover:opacity-80 transition-opacity" style={{background:'#FEE500',color:'#3A1D1D'}}>💬 카카오 상담하기</button>
            <a href="http://pf.kakao.com/_TpaBj/chat" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl py-3 text-center text-sm font-bold text-white hover:opacity-80 transition-opacity" style={{background:'#d63870'}}>전문의 상담 받기 →</a>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-black" style={{color:'#2a1520'}}>자주 묻는 질문 (FAQ)</h2>
        <div className="rounded-2xl overflow-hidden" style={{background:'#fff',border:'1px solid #f0dce4'}}>
          {FAQS.map((f,i)=>(
            <div key={i} style={{borderBottom:i<FAQS.length-1?'1px solid #f0dce4':'none'}}>
              <button onClick={()=>setFaqOpen(faqOpen===i?null:i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left" style={{background:'transparent',border:'none',cursor:'pointer',fontFamily:'inherit'}}>
                <span className="text-sm font-bold" style={{color:'#2a1520'}}>Q{i+1}. {f.q}</span>
                <span className="flex-shrink-0 text-sm" style={{color:'#c0a0b0',transform:faqOpen===i?'rotate(180deg)':'none',display:'inline-block',transition:'transform 0.2s'}}>▼</span>
              </button>
              {faqOpen===i&&(
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{color:'#555',borderTop:'1px solid #fde8ef'}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarView({result}:{result:OvR}){
  const {ov,fStart,fEnd,nextPeriod,lmp,period}=result;
  const year=ov.getFullYear();const month=ov.getMonth();
  const firstDay=new Date(year,month,1);const lastDay=new Date(year,month+1,0);
  return(
    <div>
      <div className="mb-2 text-xs font-bold" style={{color:'#a04060'}}>이번 달 사이클 캘린더</div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {DOW.map(d=><div key={d} className="py-1 text-center text-xs" style={{color:'#b090a0'}}>{d}</div>)}
        {Array.from({length:firstDay.getDay()}).map((_,i)=><div key={`e${i}`}/>)}
        {Array.from({length:lastDay.getDate()}).map((_,i)=>{
          const day=i+1;const cur=new Date(year,month,day);
          const isOv=cur.getTime()===ov.getTime();
          const isFt=cur>=fStart&&cur<=fEnd&&!isOv;
          const isPd=(cur>=lmp&&cur<addDays(lmp,period))||(cur>=nextPeriod&&cur<addDays(nextPeriod,period));
          if(isOv)return<div key={day} className="mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white" style={{background:'#d63870'}}>{day}</div>;
          if(isFt)return<div key={day} className="rounded-lg py-1.5 text-center text-xs font-bold" style={{background:'#fce8f0',color:'#993556'}}>{day}</div>;
          if(isPd)return<div key={day} className="rounded-lg py-1.5 text-center text-xs" style={{background:'#e8f5ff',color:'#1877c4'}}>{day}</div>;
          return<div key={day} className="py-1.5 text-center text-xs" style={{color:'#555'}}>{day}</div>;
        })}
      </div>
      <div className="flex flex-wrap gap-3">
        {[{c:'#d63870',l:'배란일'},{c:'#fce8f0',l:'가임기',b:'#e090b0'},{c:'#e8f5ff',l:'생리 예정',b:'#90c0e0'}].map(x=>(
          <div key={x.l} className="flex items-center gap-1.5 text-xs" style={{color:'#777'}}>
            <span className="inline-block h-3 w-3 rounded-full" style={{background:x.c,border:x.b?`1px solid ${x.b}`:undefined}}/>{x.l}
          </div>
        ))}
      </div>
    </div>
  );
}