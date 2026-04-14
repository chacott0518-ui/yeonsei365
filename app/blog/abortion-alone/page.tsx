import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '임신중절수술 혼자 가도 되나요? 보호자 없이 가능한지 총정리 2026 | 연세365산부인과',
  description: '임신중절수술 혼자 가도 될까요? 보호자 동반 여부, 혼자 내원 시 주의사항, 당일 귀가 가능 여부까지 사당역 연세365산부인과가 솔직하게 알려드립니다.',
  keywords: [
    '임신중절수술혼자', '임신중절수술보호자없이', '낙태혼자가능',
    '임신중절혼자', '낙태수술혼자', '임신중절수술보호자',
    '사당역산부인과', '연세365산부인과', '임신중절수술당일귀가',
    '낙태수술보호자', '임신중절수술혼자가도되나요'
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/blog/abortion-alone' },
  openGraph: {
    title: '임신중절수술 혼자 가도 되나요? 보호자 없이 가능한지 총정리',
    description: '임신중절수술 혼자 가도 될까요? 보호자 동반 여부와 당일 귀가 가능 여부까지 총정리.',
    url: 'https://www.yeonsei365.com/blog/abortion-alone',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqData = [
  {
    q: '임신중절수술 혼자 가도 되나요?',
    a: `네, 성인이라면 보호자 없이 혼자 내원하셔도 임신중절수술을 받으실 수 있습니다.

2021년 1월 1일 낙태합법화 이후, 임신 14주 이내의 임신중절수술은 임신부 본인의 자기결정권에 따라 합법적으로 시행됩니다. 따라서 성인 기준으로는 법정대리인이나 배우자의 동의 없이도 본인의 의사만으로 수술이 가능합니다.

다만 수술 후 수면마취에서 회복하는 과정에서 일시적으로 어지럼증이나 몽롱함이 남을 수 있기 때문에, 가능하다면 퇴원 시 보호자가 동반해 주시는 것이 가장 안전합니다.

혼자 내원하시는 분들을 위해 연세365산부인과는 수술 후 전용 회복실에서 충분한 시간 동안 1:1 케어를 제공하며, 활력 징후가 완전히 안정된 것을 확인한 후 귀가를 안내해 드립니다. 대중교통 이용이 가능한 상태까지 회복되신 후 귀가하실 수 있으므로, 보호자 없이 오시는 분들도 안심하고 내원해 주셔도 됩니다.`,
  },
  {
    q: '미성년자도 혼자 올 수 있나요?',
    a: `만 19세 미만 미성년자의 경우에는 법정대리인(부모님 또는 법적 보호자)의 동의서가 필요합니다. 이는 의료법상 미성년자 의료 행위에 대한 보호 규정에 따른 것입니다.

다만 아래와 같은 특수한 상황에서는 개별 상담을 통해 진행 가능 여부를 별도로 안내드립니다.

첫째, 성폭력 피해로 인한 임신인 경우 모자보건법 제14조 3항에 따라 피해자 본인의 동의만으로 수술이 가능합니다. 둘째, 부모님께 알리기 어려운 특수한 사정이 있는 경우 사전에 전화 또는 카카오톡 상담을 통해 상황을 먼저 말씀해 주시면 가능한 방법을 함께 찾아드립니다.

연세365산부인과는 미성년자 환자분들의 심리적 부담을 충분히 이해하고 있습니다. 모든 상담과 진료 내용은 철저히 비밀이 보장되므로, 먼저 부담 없이 상담을 받아보시길 권장드립니다.`,
  },
  {
    q: '수술 후 혼자 귀가할 수 있나요? 당일 퇴원이 가능한가요?',
    a: `대부분의 경우 수술 당일 귀가가 가능합니다. 연세365산부인과는 당일 수술·당일 퇴원 원스톱 시스템을 운영하고 있습니다.

수술 후 전용 회복실에서 약 30분~1시간 정도 영양수액 처치를 받으며 회복하게 됩니다. 담당 의료진이 활력 징후(혈압, 맥박, 산소포화도)를 확인하고 어지럼증이나 출혈 등 이상 증상이 없는 것을 확인한 후 귀가를 안내드립니다.

혼자 귀가하실 경우 아래 사항을 꼭 지켜주세요.

운전은 절대 하지 마시고 대중교통이나 택시를 이용하세요. 수면마취 성분이 완전히 빠지는 데 수 시간이 걸리기 때문에 운전은 수술 당일 금지입니다. 지하철이나 버스 이용은 어지럼증이 완전히 사라진 후 가능하며, 안전을 위해 택시 이용을 권장드립니다. 귀가 후에는 충분한 안정을 취하시고, 이상 증상 발생 시 즉시 연락 주시기 바랍니다.`,
  },
  {
    q: '혼자 내원할 때 무엇을 준비해야 하나요?',
    a: `혼자 내원하시는 경우 아래 사항을 미리 준비하시면 당일 진행이 훨씬 수월합니다.

가장 중요한 것은 금식입니다. 수술 전 최소 6시간 이상 물을 포함한 모든 음식과 음료 섭취를 중단해야 합니다. 이는 수면마취 중 구토로 인한 기도 흡인을 예방하기 위한 필수 안전 조치입니다. 보통 아침 일찍 내원하시는 분들은 전날 자정 이후부터 금식을 시작하시면 됩니다.

준비물은 신분증, 생리대, 편안한 복장입니다. 타이트한 바지보다는 치마나 헐렁한 하의가 수술 후 이동이 편리합니다.

마지막 생리 시작일을 미리 메모해 오시면 임신 주수 확인이 빠르게 진행됩니다. 복용 중인 약물이나 알레르기 이력, 기저질환(고혈압, 당뇨 등)이 있다면 반드시 사전에 알려주세요.

사전에 카카오톡 또는 전화로 예약하고 오시면 대기 시간 없이 바로 진행할 수 있어 혼자 오시는 분들께 특히 편리합니다.`,
  },
  {
    q: '주변에 알리지 않고 비밀로 수술받을 수 있나요?',
    a: `네, 완전히 비밀이 보장됩니다. 연세365산부인과는 환자분의 프라이버시 보호를 가장 중요하게 생각합니다.

의료법에 따라 모든 진료 기록과 상담 내용은 본인의 동의 없이는 가족, 배우자, 직장, 보험사 등 어떠한 제3자에게도 절대 공개되지 않습니다. 건강보험 적용이 되지 않는 비급여 항목이기 때문에 실손보험 청구나 직장 건강검진 기록에도 남지 않습니다.

접수부터 퇴원까지 동선이 철저히 분리된 프라이빗 공간에서 진행되며, 다른 환자와 마주치지 않도록 배려합니다. 상담실도 독립된 개인 공간에서 1:1로 진행되므로 외부에 노출될 우려가 없습니다.

카카오톡 상담의 경우 비밀 채팅 기능을 활용하시거나, 상담 후 대화 내용을 삭제하시면 더욱 안전하게 이용하실 수 있습니다. 전화 상담도 진료 내용은 어떠한 경우에도 외부에 알려지지 않으니 안심하고 연락 주세요.`,
  },
]

export default function AbortionAlonePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* 히어로 섹션 */}
      <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
          alt="임신중절수술 혼자 가도 되나요 - 연세365산부인과"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <span className="inline-block bg-primary text-white text-[10px] md:text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            임신중절클리닉
          </span>
          <h1 className="text-xl md:text-4xl font-bold text-white leading-snug md:leading-tight font-serif drop-shadow-lg">
            임신중절수술<br className="md:hidden" /> 혼자 가도 되나요?<br />
            <span className="text-pink-200 text-lg md:text-3xl font-medium">
              보호자 없이 가능한지 총정리
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 md:px-6 py-10 md:py-16">

        {/* 메타 정보 */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-primary text-sm font-bold">연</span>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">연세365산부인과 의료진</p>
            <p className="text-xs text-gray-400 mt-0.5">2026년 4월 · 임신중절클리닉</p>
          </div>
        </div>

        {/* 도입부 */}
        <div className="mb-10 space-y-4 leading-[1.95] md:leading-[2.0]">
          <p className="text-[15px] md:text-base text-gray-700">
            임신 사실을 알게 된 후 가장 먼저 드는 걱정 중 하나가 바로
            <strong className="text-gray-900"> "혼자 가도 될까?"</strong> 입니다.
          </p>
          <p className="text-[15px] md:text-base text-gray-700">
            주변에 알리기 어렵거나, 알리고 싶지 않은 상황에서 혼자 결정하고
            혼자 내원해야 하는 경우가 많습니다. 이 글에서는 임신중절수술을
            혼자 받을 수 있는지, 보호자 없이 가능한지, 수술 후 혼자 귀가는
            어떻게 하는지 등 실질적인 정보를 솔직하게 안내해 드립니다.
          </p>
        </div>

        {/* 핵심 요약 박스 */}
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 md:p-7 mb-10">
          <h2 className="text-base md:text-lg font-bold text-primary mb-4">
            ✅ 핵심 요약
          </h2>
          <ul className="space-y-3">
            {[
              '성인 기준, 보호자 없이 혼자 임신중절수술 가능',
              '미성년자는 법정대리인 동의서 필요 (단, 특수 사유 제외)',
              '수술 당일 귀가 가능, 단 운전은 절대 금지',
              '진료 기록 비밀 보장 - 보험, 직장, 가족에게 알려지지 않음',
              '수술 전 최소 6시간 금식 필수',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 이미지 섹션 1 */}
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="혼자 산부인과 내원하는 여성 - 임신중절수술 혼자 가능"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            성인이라면 보호자 없이 혼자 내원하셔도 수술이 가능합니다
          </p>
        </div>

        {/* 본문 섹션 */}
        <div className="mb-12 space-y-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-snug">
            성인은 혼자 가도 됩니다
          </h2>
          <p className="text-[15px] md:text-base text-gray-700 leading-[1.95] md:leading-[2.0]">
            2021년 1월 낙태합법화 이후, 임신 14주 이내의 임신중절수술은
            임신부 본인의 자기결정권에 따라 합법적으로 시행됩니다.
            성인 기준으로는 배우자나 부모님의 동의 없이도 본인의 의사만으로
            수술을 결정하고 진행할 수 있습니다.
          </p>
          <p className="text-[15px] md:text-base text-gray-700 leading-[1.95] md:leading-[2.0]">
            연세365산부인과는 혼자 내원하시는 분들이 많습니다.
            주변에 알리기 어려운 상황, 바쁜 일상, 혹은 개인적인 이유로
            혼자 오시는 경우를 충분히 이해하고 있으며, 혼자 오시는 분들을
            위한 1:1 프라이빗 케어 시스템을 운영하고 있습니다.
          </p>
        </div>

        {/* 이미지 섹션 2 */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
              alt="산부인과 회복실 - 임신중절수술 후 회복"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            수술 후 전용 회복실에서 충분히 회복한 뒤 귀가하실 수 있습니다
          </p>
        </div>

        {/* 혼자 올 때 체크리스트 */}
        <div className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
            혼자 내원 시 준비 체크리스트
          </h2>
          <div className="space-y-3">
            {[
              { icon: '🚫', title: '6시간 이상 금식', desc: '물 포함 모든 음식·음료 금지. 수면마취 안전을 위해 필수' },
              { icon: '🪪', title: '신분증 지참', desc: '본인 확인을 위해 반드시 지참' },
              { icon: '👗', title: '편안한 복장', desc: '헐렁한 하의 또는 치마 권장. 수술 후 이동 편의' },
              { icon: '🩸', title: '생리대 준비', desc: '수술 후 소량 출혈 대비' },
              { icon: '🚕', title: '귀가 교통편 확인', desc: '운전 절대 금지. 택시 또는 대중교통 이용' },
              { icon: '📅', title: '마지막 생리 시작일 메모', desc: '정확한 임신 주수 확인에 필요' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
            자주 묻는 질문
          </h2>
          <p className="text-sm text-gray-500 mb-7 leading-relaxed">
            혼자 내원하시는 분들이 가장 많이 질문하시는 내용을 정리했습니다
          </p>
          <div className="space-y-5">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-primary/5 px-5 py-4">
                  <h3 className="text-[14px] md:text-[15px] font-bold text-primary leading-snug">
                    Q. {faq.q}
                  </h3>
                </div>
                <div className="px-5 py-5">
                  {faq.a.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="text-[13px] md:text-[14px] text-gray-700 leading-[1.95] mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 마무리 이미지 */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop"
              alt="연세365산부인과 사당역 - 편안한 진료 환경"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            사당역 4번출구 연세365산부인과 — 편안하고 따뜻한 공간에서 진료받으실 수 있습니다
          </p>
        </div>

        {/* 마무리 본문 */}
        <div className="mb-12 space-y-4">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">
            혼자라도 괜찮습니다
          </h2>
          <p className="text-[15px] md:text-base text-gray-700 leading-[1.95] md:leading-[2.0]">
            혼자 결정하고 혼자 내원하는 것은 결코 쉬운 일이 아닙니다.
            연세365산부인과는 그 용기를 충분히 알고 있습니다.
            내원하시는 모든 분들의 상황을 존중하며, 편안하고 안전한
            환경에서 진료를 받으실 수 있도록 최선을 다하겠습니다.
          </p>
          <p className="text-[15px] md:text-base text-gray-700 leading-[1.95] md:leading-[2.0]">
            궁금한 점이 있으시다면 내원 전 카카오톡 또는 전화로
            먼저 상담을 받아보세요. 모든 상담 내용은 철저히 비밀이
            보장되며, 부담 없이 질문하실 수 있습니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="bg-gradient-to-br from-primary/5 to-pink-50 rounded-2xl p-6 md:p-8 border border-primary/10">
          <h3 className="text-base md:text-lg font-bold text-gray-800 text-center mb-2">
            사당역 연세365산부인과
          </h3>
          <p className="text-xs md:text-sm text-gray-500 text-center mb-6 leading-relaxed">
            사당역 4번출구 · 연중무휴 · 당일 수술 가능 · 철저한 비밀 보장
          </p>
          <div className="flex flex-col gap-3">
            
              <a
              href="http://pf.kakao.com/_TpaBj/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#3B1B1B] font-bold py-3.5 rounded-xl text-sm"
            >
              💬 카카오톡 무료 상담
            </a>
            
              <a
              href="tel:02-585-3650"
              className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-xl text-sm"
            >
              📞 02-585-3650 전화 상담
            </a>
          </div>
        </div>

        {/* 의료법 고지 */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-[10px] text-gray-400 leading-[1.8]">
            [의료법 제56조 제1항 준수] 본 콘텐츠는 환자에게 의료 정보를 제공하기 위한 목적으로 작성되었으며, 특정 의료 행위의 효과를 보장하거나 과대 광고하는 것이 아닙니다. 임신중절수술은 개인의 건강 상태에 따라 출혈, 감염, 마취 관련 부작용 등이 발생할 수 있으므로 반드시 전문의와 충분한 상담 후 신중하게 결정하시기 바랍니다.
          </p>
        </div>

      </div>
    </div>
  )
}