import Link from 'next/link'
import { FEATURED_QUESTIONS } from '@/lib/homeSearchData'
import HomeSearchClient from './HomeSearchClient'

export default function HomeSearchSection() {
  return (
    <section
      id="medical-search"
      aria-labelledby="home-search-heading"
      className="relative scroll-mt-[72px] overflow-x-clip bg-background px-[18px] py-9 max-[320px]:px-4 md:scroll-mt-[88px] md:px-8 md:py-24 lg:py-[100px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl motion-reduce:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl motion-reduce:hidden"
      />

      <div className="relative mx-auto w-full max-w-[1180px] rounded-[22px] border border-primary/15 bg-gradient-to-br from-white via-white to-surface px-[18px] py-5 shadow-[0_10px_40px_rgba(214,51,108,0.08)] max-[320px]:px-4 md:rounded-[28px] md:px-10 md:py-12 lg:px-14 lg:py-14">
        <p className="mb-1.5 text-[10px] font-bold tracking-[0.14em] text-primary md:mb-3 md:text-xs max-[380px]:text-[11px]">
          YONSEI365 HEALTH SEARCH
        </p>
        <h2
          id="home-search-heading"
          className="mb-2 max-w-none text-[clamp(24px,7vw,28px)] font-bold leading-[1.28] tracking-tight text-gray-dark [overflow-wrap:break-word] [text-wrap:balance] [word-break:keep-all] md:mb-3 md:text-3xl md:leading-snug lg:text-[34px]"
        >
          임신중절수술, 무엇이 궁금하신가요?
        </h2>
        <p className="mb-4 max-w-[40em] text-[13.5px] leading-[1.58] text-gray [overflow-wrap:break-word] [word-break:keep-all] md:mb-9 md:text-[15px] md:leading-7">
          임신중절수술의 뜻, 가능한 시기, 비용, 병원 선택 기준과 회복 정보를 필요한 항목부터 확인해 보세요.
        </p>

        <HomeSearchClient />

        <nav aria-label="주요 질문" className="mt-6 border-t border-primary/10 pt-5 md:mt-10 md:pt-8">
          <p className="mb-2.5 text-[12px] font-bold text-primary-dark md:mb-3 md:text-[13px]">주요 질문</p>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_QUESTIONS.map((item) => (
              <li key={item.href + item.question} className="min-w-0">
                <Link
                  href={item.href}
                  className="block rounded-xl border border-primary/10 bg-white/80 px-3.5 py-3 text-[13.5px] font-semibold leading-snug text-gray-dark transition-colors [overflow-wrap:break-word] [word-break:keep-all] hover:border-primary/30 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-[14px]"
                >
                  <span className="line-clamp-2">{item.question}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="h-8 md:hidden" aria-hidden="true" />
    </section>
  )
}
