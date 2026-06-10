'use client';
import { useState } from 'react';

const W: Record<number,{sym:string[];size:string;dev:string;mom:string;caution:string;exam:string}> = {
  4:{sym:['착상혈 가능','생리 예정일 지남','임신테스트 양성','극심한 피로감','유방 압통'],size:'양귀비씨 (0.1mm)',dev:'수정란이 자궁벽에 착상을 완료했습니다. 배아 형성이 시작되며 심장·뇌·척추의 기초가 되는 세포층이 분화하기 시작합니다. 이 시기부터 태아에게 영양을 공급하는 태반이 형성되기 시작합니다.',mom:'자궁이 조금씩 커지기 시작합니다. 임신 호르몬(hCG)이 급격히 증가하면서 피로감, 유방 압통, 잦은 소변 등의 증상이 시작될 수 있습니다. 호르몬 변화로 감정 기복이 생기는 것은 정상입니다.',caution:'엽산을 하루 400~800mcg 복용을 시작하세요. 술·담배·약물을 즉시 중단해야 합니다. 방사선 노출을 피하고 처방 없는 약물 복용은 절대 하지 마세요.',exam:'임신확인 초음파'},
  6:{sym:['입덧 시작','극심한 피로','유방 통증·팽창','냄새 극도로 민감','잦은 소변'],size:'완두콩 (6mm)',dev:'심장박동이 시작됩니다. 초음파로 심장 소리를 처음 들을 수 있는 감동적인 시기입니다. 머리와 몸통 구분이 가능하며 팔다리의 싹이 형성됩니다. 뇌·척수·소화기관·폐가 활발히 발달 중입니다.',mom:'자궁이 오렌지 크기로 성장합니다. 입덧으로 식욕이 크게 변화하고 특정 냄새에 극도로 예민해질 수 있습니다. 유방이 눈에 띄게 커지고 통증이 심해집니다.',caution:'초음파로 심장박동 확인을 권장합니다. 입덧이 심하면 수분 섭취를 충분히 하고 소량씩 자주 드세요. 생강차·레몬향이 입덧 완화에 도움이 될 수 있습니다.',exam:'심장박동 초음파'},
  8:{sym:['입덧 최고조','빈뇨 심화','복부 팽만감','두통','감정 기복 극심'],size:'포도 (1.6cm)',dev:'모든 주요 장기 형성이 본격적으로 시작됩니다. 손가락과 발가락이 구분되고 눈꺼풀이 형성됩니다. 이 시기는 기형 발생에 가장 민감한 시기(기관 형성기)로 외부 자극에 매우 취약합니다.',mom:'유방이 눈에 띄게 커지고 유두 주변이 어두워집니다. 허리 통증이 시작될 수 있고 변비가 생길 수 있습니다. 입덧이 하루 종일 지속될 수 있으며 이 시기가 입덧의 정점입니다.',caution:'처방 없는 약물 복용은 절대 금지입니다. 무거운 물건 들기를 자제하고 격렬한 운동은 피하세요. 충분한 수면과 휴식이 필수입니다.',exam:'심장박동 초음파'},
  10:{sym:['입덧 서서히 완화','복부 약간 볼록해짐','체중 증가 시작','기분 점차 안정','소화불량'],size:'딸기 (3cm)',dev:'태아기(fetal stage)로 진입합니다. 손톱 형성이 시작되고 외부 생식기가 발달 중입니다. 모든 주요 기관의 기초가 완성되어 이후에는 성장에 집중합니다. 조기 유산 위험이 급격히 줄어드는 중요한 시기입니다.',mom:'입덧이 서서히 나아지기 시작합니다. 배가 약간 나오기 시작하고 체중이 늘기 시작합니다. 피로감이 줄어들고 기분이 점차 안정됩니다.',caution:'1차 기형아 검사(NT 초음파+혈액검사)를 준비하세요. 카페인은 하루 200mg 이하로 제한하세요. 균형 잡힌 식단과 철분, 칼슘 섭취를 늘리세요.',exam:'1차 기형아 검사'},
  12:{sym:['안정기 진입','유산 위험 크게 감소','1차 기형아 검사 시기','배 티남 시작','식욕 돌아옴'],size:'라임 (5.4cm)',dev:'손가락과 발가락이 완전히 형성됩니다. 반사 능력이 발달하고 성별 구분이 가능해지기 시작합니다. 뇌가 매우 활발히 발달하며 태아가 양수를 삼키고 배설하는 활동을 합니다.',mom:'자궁이 골반 밖으로 올라오기 시작합니다. 입덧이 대부분 사라지고 식욕이 돌아옵니다. 배가 눈에 띄게 나오기 시작하며 임신선이 생길 수 있습니다.',caution:'1차 기형아 검사(NT+혈액검사)를 반드시 받으세요. 적당한 걷기 운동을 시작할 수 있습니다. 치과 치료를 받는 것이 좋은 시기입니다.',exam:'1차 기형아 검사'},
  16:{sym:['태동 느끼기 시작','쿼드 검사 시기','피부 변화·임신선','요통 시작','다리 쥐나기'],size:'아보카도 (11.6cm)',dev:'뼈가 단단해지고 눈의 움직임이 시작됩니다. 청각이 발달하여 소리에 반응하기 시작합니다. 성별이 초음파로 확인 가능합니다. 태아가 활발하게 움직이며 표정도 만들기 시작합니다.',mom:'배가 눈에 띄게 나옵니다. 임신선이 생기기 시작하고 피부가 건조해질 수 있습니다. 요통이 시작될 수 있으며 다리 쥐가 자주 날 수 있습니다.',caution:'쿼드 검사(16~18주)를 받으세요. 옆으로 눕는 자세(왼쪽이 혈액순환에 좋음)를 권장합니다. 철분제 복용을 시작하고 태동 일기를 쓰기 시작하세요.',exam:'쿼드 검사'},
  20:{sym:['태동 뚜렷하게 느껴짐','정밀 초음파 시기','배 많이 불러옴','숨참·역류성 식도염','발목 부종 시작'],size:'바나나 (25cm)',dev:'감각 발달이 거의 완성됩니다. 수면·각성 주기가 형성되고 머리카락이 자라기 시작합니다. 외부 소리에 반응하며 엄마 목소리를 인식합니다. 맛을 느끼기 시작합니다.',mom:'자궁이 배꼽 높이까지 올라옵니다. 허리 통증이 심해질 수 있습니다. 발목 부종이 시작되고 역류성 식도염이 생길 수 있습니다.',caution:'정밀 초음파(20~22주)를 반드시 받으세요. 철분제를 꾸준히 복용하세요. 체중 관리를 시작하고 다리를 자주 올려두세요.',exam:'정밀 초음파'},
  24:{sym:['임신성 당뇨 검사 시기','자궁수축 연습 (브랙스턴힉스)','수면 불편','다리 부종 심화','빈뇨 재발'],size:'옥수수 (30cm)',dev:'폐 발달이 활발해집니다. 눈을 뜨고 감을 수 있게 됩니다. 지문이 완전히 형성됩니다. 청각이 완성되어 음악에 반응합니다. 체중이 빠르게 증가하기 시작합니다.',mom:'발목과 손 부종이 시작됩니다. 자궁 수축 연습(브랙스턴힉스)을 느낄 수 있으며 이는 정상입니다. 역류성 식도염이 심해질 수 있습니다.',caution:'임신성 당뇨 검사(24~28주)를 받으세요. 조산 증상에 주의하세요. 혈압을 정기적으로 체크하고 부종이 심해지면 병원에 방문하세요.',exam:'임신성 당뇨 검사'},
  28:{sym:['3분기 진입','빈번하고 강한 태동','요통 심화','골반 불편감','수면 매우 어려움'],size:'가지 (37cm)',dev:'뇌 발달이 급격히 빨라집니다. 눈이 완전히 뜨이고 체중 증가가 빠릅니다. 폐 발달이 거의 완성되어 이 시기 이후 출생 시 생존 가능성이 높아집니다.',mom:'자궁이 많이 커져 내장을 압박합니다. 숨참·소화불량이 심해지고 수면이 매우 불편해집니다. 골반 통증과 좌골신경통이 올 수 있습니다.',caution:'3분기 산전 검사를 받으세요. 태동을 매일 확인하고 하루 10회 이상인지 체크하세요. 부종이 갑자기 심해지거나 두통·시야 흐림이 있으면 즉시 병원을 방문하세요.',exam:'3분기 산전 검사'},
};

const EXAMS=[{w:4,l:'임신 확인 초음파'},{w:6,l:'심장박동 확인 초음파'},{w:10,l:'1차 기형아 검사 (NT)'},{w:16,l:'쿼드 검사'},{w:20,l:'정밀 초음파'},{w:24,l:'임신성 당뇨 검사'},{w:28,l:'3분기 산전 검사'}];

const FAQS=[
  {q:'임신주수는 어떻게 계산하나요?',a:'임신주수는 마지막 생리 시작일(LMP)을 기준으로 계산합니다. 실제 수정일이 아닌 생리 첫날부터 계산하기 때문에 실제 태아 나이보다 약 2주 길게 산정됩니다. 출산예정일은 마지막 생리 시작일로부터 280일(40주)을 더해 계산하는 네겔레 법칙을 따릅니다. 초음파 검사로 더 정확한 주수 확인이 가능합니다.'},
  {q:'임신 초기 증상은 어떤 것들이 있나요?',a:'임신 초기(4~12주)에는 생리 예정일이 지나도 생리가 없는 것이 가장 흔한 증상입니다. 이 외에도 착상혈, 극심한 피로감, 유방 통증과 팽창, 냄새에 대한 민감함, 입덧(오심·구토), 잦은 소변, 두통, 감정 기복 등이 나타날 수 있습니다. 증상의 종류와 강도는 개인차가 매우 크며, 증상이 전혀 없더라도 정상적으로 임신이 진행될 수 있습니다.'},
  {q:'임신중절수술 비용(낙태 비용)은 얼마인가요?',a:'임신중절수술 비용은 임신 주수와 시술 방법에 따라 다릅니다. 연세365산부인과 기준으로 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원이며 양양제·1인 회복실·현금/카드 동일·부가세가 포함된 금액입니다. 주수가 늘어날수록 비용이 올라가므로 결정하셨다면 빠를수록 비용과 위험 모두 줄일 수 있습니다. 익명 상담 및 비밀 보장이 가능합니다.'},
  {q:'임신중절수술은 몇 주까지 가능하고 어떤 방법이 있나요?',a:'임신 초기(14주 이내)에 시술하는 것이 가장 안전합니다. 임신 7주 이내에는 약물 방법도 가능하며 이후에는 수술적 방법(흡입술, 소파술)이 일반적입니다. 주수가 늘어날수록 시술이 복잡해지고 위험도가 높아집니다. 당일 수술 및 퇴원이 가능하며 전문의가 직접 시술합니다. 모든 과정에서 비밀이 보장됩니다.'},
  {q:'임신중절수술 후 회복 기간과 주의사항은?',a:'시술 당일 1~2시간 회복 후 귀가가 가능합니다. 가벼운 일상 활동은 2~3일 후부터 가능하지만 무거운 물건 들기와 격렬한 운동은 2주간 피하세요. 출혈은 1~2주 지속될 수 있으며 다음 생리는 보통 4~6주 후 시작됩니다. 수술 후 1주일 내 재방문을 권장드립니다. 과도한 출혈·고열·심한 복통이 있다면 즉시 내원하세요.'},
];

function getW(wk:number){const ks=Object.keys(W).map(Number).sort((a,b)=>a-b);let b=ks[0];for(const k of ks){if(wk>=k)b=k;}return W[b];}
function getTri(w:number){if(w<=13)return'1분기 (초기)';if(w<=27)return'2분기 (중기)';return'3분기 (후기)';}
function getExam(w:number){if(w<6)return'임신확인 초음파';if(w<10)return'심장박동 초음파';if(w<16)return'1차 기형아 검사';if(w<20)return'쿼드 검사';if(w<24)return'정밀 초음파';if(w<28)return'임신성 당뇨 검사';return'3분기 산전 검사';}
function getDefault(){const d=new Date();d.setDate(d.getDate()-42);return d.toISOString().split('T')[0];}

interface R{weeks:number;days:number;total:number;remain:number;eddStr:string;tri:string;pct:number;exam:string;wd:typeof W[4];}

export default function PregnancyCalculator(){
  const [lmp,setLmp]=useState(getDefault());
  const [res,setRes]=useState<R|null>(null);
  const [tab,setTab]=useState(0);
  const [faqOpen,setFaqOpen]=useState<number|null>(null);

  function calc(){
    const lmpD=new Date(lmp);
    const today=new Date();today.setHours(0,0,0,0);
    const total=Math.floor((today.getTime()-lmpD.getTime())/86400000);
    const weeks=Math.floor(total/7);const days=total%7;
    const edd=new Date(lmpD);edd.setDate(edd.getDate()+280);
    const remain=Math.max(0,Math.floor((edd.getTime()-today.getTime())/86400000));
    const eddStr=`${edd.getFullYear()}년 ${edd.getMonth()+1}월 ${edd.getDate()}일`;
    setRes({weeks,days,total,remain,eddStr,tri:getTri(weeks),pct:Math.min(100,Math.round(weeks/40*100)),exam:getExam(weeks),wd:getW(weeks)});
    setTab(0);
  }

  const TABS=['👶 태아 발달','🤰 증상·변화','📋 검사 일정','⚠️ 주의사항'];

  return(
    <div>
      <div className="mb-6 overflow-hidden rounded-2xl" style={{background:'#fff',border:'1px solid #f0dce4'}}>
        <div className="px-6 py-5" style={{background:'#d63870'}}>
          <p className="mb-1 text-xs tracking-widest" style={{color:'rgba(255,255,255,0.65)'}}>YEONSEI 365</p>
          <p className="text-lg font-black text-white">임신주수 · 출산예정일 계산기</p>
          <p className="mt-1 text-xs" style={{color:'rgba(255,255,255,0.75)'}}>마지막 생리 시작일(LMP) 기준으로 정확하게 계산합니다</p>
        </div>
        <div className="px-6 py-6">
          <label className="mb-2 block text-xs font-bold tracking-wide" style={{color:'#a04060'}}>마지막 생리 시작일</label>
          <input type="date" value={lmp} max={new Date().toISOString().split('T')[0]} onChange={e=>setLmp(e.target.value)} className="w-full rounded-xl border-2 px-4 py-3 text-base outline-none" style={{borderColor:'#f0c0d4',background:'#fdf8fb',fontFamily:'inherit'}}/>
          <button onClick={calc} className="mt-4 w-full rounded-2xl py-4 text-base font-black text-white hover:opacity-90 active:scale-[0.98] transition-all" style={{background:'#d63870'}}>계산하기</button>
        </div>
      </div>

      {res&&(
        <div className="rounded-2xl border-2 overflow-hidden" style={{background:'#fff5f9',borderColor:'#f0b0cc'}}>
          <div className="p-5 md:p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="font-black leading-none" style={{fontSize:'clamp(36px,8vw,52px)',color:'#d63870'}}>{res.weeks}주 {res.days}일</div>
                <div className="mt-1 text-sm" style={{color:'#c06080'}}>현재 임신 주수</div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{background:'#d63870'}}>{res.tri}</span>
                <div className="text-sm font-bold" style={{color:'#2a1520'}}>출산예정일</div>
                <div className="text-sm" style={{color:'#555'}}>{res.eddStr}</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-1 flex justify-between text-xs" style={{color:'#a04060'}}>
                <span>임신 진행률</span><span>{res.weeks}주 / 40주</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{background:'#f0c0d4'}}>
                <div className="h-full rounded-full transition-all" style={{background:'#d63870',width:`${res.pct}%`}}/>
              </div>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4">
              {[{l:'임신 경과일',v:`${res.total}일`},{l:'출산까지',v:`D-${res.remain}`},{l:'태아 크기',v:res.wd.size.split(' ')[0]},{l:'권장 검사',v:res.exam}].map(i=>(
                <div key={i.l} className="rounded-xl p-3 text-center" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                  <div className="mb-1 text-xs" style={{color:'#b080a0'}}>{i.l}</div>
                  <div className="text-sm font-bold" style={{color:'#2a1520'}}>{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-x-auto border-b" style={{borderColor:'#f0dce4'}}>
            {TABS.map((t,i)=>(
              <button key={t} onClick={()=>setTab(i)} className="flex-shrink-0 px-4 py-3 text-xs font-bold transition-colors" style={{background:'transparent',border:'none',borderBottom:`2px solid ${tab===i?'#d63870':'transparent'}`,color:tab===i?'#d63870':'#a06070',fontFamily:'inherit',cursor:'pointer',whiteSpace:'nowrap'}}>
                {t}
              </button>
            ))}
          </div>

          <div className="p-5">
            {tab===0&&(
              <div className="rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                <div className="mb-2 text-xs font-bold" style={{color:'#a04060'}}>👶 이번 주 태아 크기: {res.wd.size}</div>
                <p className="text-sm leading-relaxed" style={{color:'#444'}}>{res.wd.dev}</p>
              </div>
            )}
            {tab===1&&(
              <div>
                <div className="mb-3 rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                  <div className="mb-2 text-xs font-bold" style={{color:'#a04060'}}>🤰 엄마 몸의 변화</div>
                  <p className="text-sm leading-relaxed" style={{color:'#444'}}>{res.wd.mom}</p>
                </div>
                <div className="rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                  <div className="mb-2 text-xs font-bold" style={{color:'#a04060'}}>이 주수의 주요 증상</div>
                  <div className="flex flex-wrap gap-2">{res.wd.sym.map(s=><span key={s} className="rounded-lg px-3 py-1 text-xs" style={{background:'#fce8f0',color:'#993556'}}>{s}</span>)}</div>
                </div>
              </div>
            )}
            {tab===2&&(
              <div className="rounded-xl p-4" style={{background:'#fff',border:'1px solid #f0dce4'}}>
                <div className="mb-3 text-xs font-bold" style={{color:'#a04060'}}>📋 산전 검사 타임라인</div>
                <div className="flex flex-col gap-2">
                  {EXAMS.map(e=>(
                    <div key={e.w} className="flex items-center gap-2">
                      <div className="h-2 w-2 flex-shrink-0 rounded-full" style={{background:e.w<=res.weeks?'#ddd':'#d63870'}}/>
                      <span className="text-xs" style={{color:e.w<=res.weeks?'#bbb':'#555'}}>
                        {e.w}주 — <strong style={{color:e.w<=res.weeks?'#ccc':'#d63870'}}>{e.l}</strong>{e.w<=res.weeks?' ✓':''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab===3&&(
              <div className="rounded-xl p-4" style={{background:'#fff8e8',border:'1px solid #f0d890'}}>
                <div className="mb-2 text-xs font-bold" style={{color:'#806020'}}>⚠️ 이 시기 주의사항</div>
                <p className="text-sm leading-relaxed" style={{color:'#555'}}>{res.wd.caution}</p>
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
              <button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left" style={{background:'transparent',border:'none',cursor:'pointer',fontFamily:'inherit'}}>
                <span className="text-sm font-bold" style={{color:'#2a1520'}}>Q{i+1}. {f.q}</span>
                <span className="flex-shrink-0 text-sm transition-transform" style={{color:'#c0a0b0',transform:faqOpen===i?'rotate(180deg)':'none'}}>▼</span>
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