'use client';
import { useState } from 'react';

interface CalcResult { weeks: number; days: number; totalDays: number; remain: number; eddStr: string; trimester: string; trimesterNum: number; examShort: string; symptoms: string[]; babySize: string; babyDev: string; momChange: string; caution: string; }

const WEEKLY: Record<number, { symptoms: string[]; babySize: string; babyDev: string; momChange: string; caution: string }> = {
  4: { symptoms:['착상혈 가능','생리 예정일 지남','임신테스트 가능','피로감','유방 약한 통증'], babySize:'양귀비씨 (0.1mm)', babyDev:'수정란이 자궁벽에 착상 완료. 배아 형성 시작.', momChange:'자궁이 조금씩 커지기 시작. 호르몬 변화로 피로감을 느낄 수 있습니다.', caution:'엽산 복용 시작. 술·담배·약물 금지. 방사선 노출 피하기.' },
  6: { symptoms:['입덧 시작','극심한 피로','유방 통증','냄새 민감','잦은 소변'], babySize:'완두콩 (6mm)', babyDev:'심장박동 시작. 머리·몸통 구분 가능. 팔다리 싹 형성.', momChange:'자궁이 오렌지 크기로 성장. 입덧으로 식욕 변화 시작.', caution:'초음파로 심장박동 확인 권장. 입덧 심하면 수분 섭취 충분히.' },
  8: { symptoms:['입덧 최고조','빈뇨','복부 팽만','두통','감정 기복'], babySize:'포도 (1.6cm)', babyDev:'모든 주요 장기 형성 시작. 손가락·발가락 구분. 눈꺼풀 형성.', momChange:'유방이 눈에 띄게 커짐. 허리 통증 시작 가능. 변비 주의.', caution:'무거운 물건 들기 금지. 격렬한 운동 자제. 충분한 수면 필수.' },
  10: { symptoms:['입덧 완화 시작','복부 약간 볼록','체중 증가 시작','기분 안정'], babySize:'딸기 (3cm)', babyDev:'태아기 진입. 손톱 형성 시작. 외부 생식기 발달 중.', momChange:'입덧이 점차 나아지기 시작. 배가 약간 나오기 시작.', caution:'1차 기형아 검사(NT) 준비. 카페인 하루 200mg 이하로 제한.' },
  12: { symptoms:['안정기 진입','유산 위험 감소','1차 기형아 검사','배 티남 시작'], babySize:'라임 (5.4cm)', babyDev:'손가락·발가락 완성. 반사 능력 발달. 성별 구분 가능 시작.', momChange:'자궁이 골반 밖으로 나오기 시작. 입덧 대부분 사라짐.', caution:'1차 기형아 검사 (NT + 혈액검사) 필수. 치과 진료 가능 시기.' },
  16: { symptoms:['태동 느끼기 시작','쿼드 검사 시기','피부 변화','요통'], babySize:'아보카도 (11.6cm)', babyDev:'뼈 단단해짐. 눈 움직임 시작. 청각 발달 - 소리에 반응.', momChange:'배가 눈에 띄게 나옴. 임신선 생길 수 있음. 피부 건조 주의.', caution:'쿼드 검사 (16~18주). 옆으로 눕는 자세 권장. 복대 사용 가능.' },
  20: { symptoms:['태동 뚜렷','정밀 초음파','배 많이 불러옴','숨참'], babySize:'바나나 (25cm)', babyDev:'감각 발달 완성. 수면·각성 주기 형성. 머리카락 자라기 시작.', momChange:'자궁이 배꼽 높이까지 올라옴. 허리 통증 심해질 수 있음.', caution:'정밀 초음파 (20~22주) 필수. 철분제 복용. 체중 관리 시작.' },
  24: { symptoms:['임신성 당뇨 검사','자궁수축 느낌','수면 불편','다리 부종'], babySize:'옥수수 (30cm)', babyDev:'폐 발달 활발. 눈 뜨고 감기 가능. 지문 형성 완료.', momChange:'발목 부종 시작. 역류성 식도염 주의. 숨이 찰 수 있음.', caution:'임신성 당뇨 검사 (24~28주). 조산 증상 주의. 장시간 서있기 피하기.' },
  28: { symptoms:['3분기 진입','빈번한 태동','요통 심화','골반 불편감'], babySize:'가지 (37cm)', babyDev:'뇌 발달 급격히 빨라짐. 눈 완전히 뜸. 체중 증가 빠름.', momChange:'자궁이 많이 커져 내장 압박. 숨참·소화불량 심해짐.', caution:'3분기 산전 검사. 태동 하루 10회 이상 확인. 부종 심하면 병원 방문.' },
};

const EXAMS = [
  { week: 4,  label: '임신 확인 초음파' },
  { week: 6,  label: '심장박동 확인 초음파' },
  { week: 10, label: '1차 기형아 검사 (NT)' },
  { week: 16, label: '쿼드 검사' },
  { week: 20, label: '정밀 초음파' },
  { week: 24, label: '임신성 당뇨 검사' },
  { week: 28, label: '3분기 산전 검사' },
];

function getWeekly(w: number) {
  const keys = Object.keys(WEEKLY).map(Number).sort((a,b)=>a-b);
  let best = keys[0];
  for (const k of keys) { if (w >= k) best = k; }
  return WEEKLY[best];
}

function getTrimester(w: number): [string, number] {
  if (w <= 13) return ['1분기 (초기)', 1];
  if (w <= 27) return ['2분기 (중기)', 2];
  return ['3분기 (후기)', 3];
}

function getExamShort(w: number): string {
  if (w < 6) return '임신확인 초음파';
  if (w < 10) return '심장박동 초음파';
  if (w < 16) return '1차 기형아 검사';
  if (w < 20) return '쿼드 검사';
  if (w < 24) return '정밀 초음파';
  if (w < 28) return '임신성 당뇨 검사';
  return '3분기 산전 검사';
}

function getDefaultDate() { const d = new Date(); d.setDate(d.getDate()-42); return d.toISOString().split('T')[0]; }

export default function PregnancyCalculator() {
  const [lmp, setLmp] = useState(getDefaultDate());
  const [result, setResult] = useState<CalcResult|null>(null);

  function calculate() {
    const lmpDate = new Date(lmp);
    const today = new Date(); today.setHours(0,0,0,0);
    const totalDays = Math.floor((today.getTime()-lmpDate.getTime())/86400000);
    const weeks = Math.floor(totalDays/7); const days = totalDays%7;
    const edd = new Date(lmpDate); edd.setDate(edd.getDate()+280);
    const remain = Math.max(0, Math.floor((edd.getTime()-today.getTime())/86400000));
    const eddStr = `${edd.getFullYear()}년 ${edd.getMonth()+1}월 ${edd.getDate()}일`;
    const [trimester, trimesterNum] = getTrimester(weeks);
    const w = getWeekly(weeks);
    setResult({ weeks, days, totalDays, remain, eddStr, trimester, trimesterNum, examShort: getExamShort(weeks), symptoms: w.symptoms, babySize: w.babySize, babyDev: w.babyDev, momChange: w.momChange, caution: w.caution });
  }

  return (
    <div>
      <div className="mb-6 overflow-hidden rounded-2xl" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
        <div className="px-6 py-5" style={{ background:'#d63870' }}>
          <p className="mb-1 text-xs tracking-widest" style={{ color:'rgba(255,255,255,0.65)' }}>YEONSEI 365</p>
          <p className="text-lg font-black text-white">임신주수 · 출산예정일 계산기</p>
          <p className="mt-1 text-xs" style={{ color:'rgba(255,255,255,0.75)' }}>마지막 생리 시작일(LMP) 기준으로 계산합니다</p>
        </div>
        <div className="px-6 py-6">
          <label className="mb-2 block text-xs font-bold" style={{ color:'#a04060' }}>마지막 생리 시작일</label>
          <input type="date" value={lmp} max={new Date().toISOString().split('T')[0]} onChange={(e)=>setLmp(e.target.value)} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{ borderColor:'#f0c0d4', background:'#fdf8fb', fontFamily:'inherit' }}/>
          <button onClick={calculate} className="mt-4 w-full rounded-2xl py-4 text-base font-black text-white" style={{ background:'#d63870' }}>계산하기</button>
        </div>
      </div>

      {result && (
        <div className="rounded-2xl border-2 p-5 md:p-6" style={{ background:'#fff5f9', borderColor:'#f0b0cc' }}>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="text-5xl font-black leading-none" style={{ color:'#d63870' }}>{result.weeks}주 {result.days}일</div>
              <div className="mt-1 text-sm" style={{ color:'#c06080' }}>현재 임신 주수</div>
            </div>
            <div className="text-right">
              <span className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background:'#d63870' }}>{result.trimester}</span>
              <div className="text-sm font-bold" style={{ color:'#2a1520' }}>출산예정일</div>
              <div className="text-sm" style={{ color:'#555' }}>{result.eddStr}</div>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4">
            {[
              { label:'임신 경과일', val:`${result.totalDays}일` },
              { label:'출산까지', val:`D-${result.remain}` },
              { label:'현재 분기', val:`${result.trimesterNum}분기` },
              { label:'권장 검사', val:result.examShort },
            ].map((item)=>(
              <div key={item.label} className="rounded-xl p-3 text-center" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
                <div className="mb-1 text-xs" style={{ color:'#b080a0' }}>{item.label}</div>
                <div className="text-sm font-bold" style={{ color:'#2a1520' }}>{item.val}</div>
              </div>
            ))}
          </div>

          <div className="mb-4 rounded-xl p-4" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>👶 태아 발달 — {result.babySize}</div>
            <p className="text-sm leading-relaxed" style={{ color:'#444' }}>{result.babyDev}</p>
          </div>

          <div className="mb-4 rounded-xl p-4" style={{ background:'#fff', border:'1px solid #f0dce4' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>🤰 엄마 몸의 변화</div>
            <p className="text-sm leading-relaxed" style={{ color:'#444' }}>{result.momChange}</p>
          </div>

          <div className="mb-4 rounded-xl p-4" style={{ background:'#fff8e8', border:'1px solid #f0d890' }}>
            <div className="mb-2 text-xs font-bold" style={{ color:'#806020' }}>⚠️ 이 시기 주의사항</div>
            <p className="text-sm leading-relaxed" style={{ color:'#555' }}>{result.caution}</p>
          </div>

          <div className="mb-4">
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>이 주수의 주요 증상</div>
            <div className="flex flex-wrap gap-2">{result.symptoms.map((s)=><span key={s} className="rounded-lg px-3 py-1 text-xs" style={{ background:'#fce8f0', color:'#993556' }}>{s}</span>)}</div>
          </div>

          <div className="mb-5">
            <div className="mb-2 text-xs font-bold" style={{ color:'#a04060' }}>산전 검사 타임라인</div>
            <div className="flex flex-col gap-2">{EXAMS.map((e)=>(
              <div key={e.week} className="flex items-center gap-2">
                <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: e.week<=result.weeks?'#ddd':'#d63870' }}/>
                <span className="text-xs" style={{ color: e.week<=result.weeks?'#bbb':'#555' }}>
                  {e.week}주 — <strong style={{ color: e.week<=result.weeks?'#ccc':'#d63870' }}>{e.label}</strong>{e.week<=result.weeks?' ✓':''}
                </span>
              </div>
            ))}</div>
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