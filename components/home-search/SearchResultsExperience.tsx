'use client'

import Link from 'next/link'
import type { SearchExperience, GridItem } from '@/lib/healthSearchIntent'
import type { SiteSearchResult } from '@/lib/siteSearch'

type Props = {
  experience: SearchExperience | null
  fallbackResults: SiteSearchResult[]
  onNavigate: () => void
  onGoToSearch: () => void
}

function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="none" className={className}>
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GridTile({ tile, onNavigate }: { tile: GridItem; onNavigate: () => void }) {
  return (
    <Link
      href={tile.item.url}
      onClick={onNavigate}
      className="flex min-h-[44px] flex-col justify-center gap-0.5 rounded-xl border border-primary/12 bg-white px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-surface/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="text-[10.5px] font-bold text-primary">{tile.label}</span>
      <span className="line-clamp-2 text-[12.5px] font-semibold leading-snug text-gray-dark [word-break:keep-all]">
        {tile.item.title}
      </span>
    </Link>
  )
}

function QnaRow({ item, onNavigate }: { item: SiteSearchResult; onNavigate: () => void }) {
  return (
    <Link
      href={item.url}
      onClick={onNavigate}
      className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl border border-primary/12 bg-white px-3.5 py-2.5 transition-colors hover:border-primary/30 hover:bg-surface/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-[10.5px] font-bold text-primary">{item.category}</span>
        <span className="mt-0.5 line-clamp-2 block text-[13px] font-semibold leading-snug text-gray-dark [word-break:keep-all]">
          {item.title}
        </span>
      </span>
      <ChevronIcon className="shrink-0 text-primary/60" />
    </Link>
  )
}

function GoToSearchFooter({ onGoToSearch }: { onGoToSearch: () => void }) {
  return (
    <div className="border-t border-primary/10 pt-3.5 text-center md:pt-4">
      <p className="text-[12.5px] font-semibold text-gray-dark md:text-[13px]">찾으시는 내용이 다른가요?</p>
      <p className="mt-1 text-[12px] leading-relaxed text-gray md:text-[12.5px]">
        위 검색창에 궁금한 내용을 다른 표현으로 입력해 보세요.
      </p>
      <button
        type="button"
        onClick={onGoToSearch}
        className="mt-2 inline-flex h-9 items-center rounded-full border border-primary/25 px-3.5 text-[12px] font-semibold text-primary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        검색창으로 이동
      </button>
    </div>
  )
}

/** experience 데이터가 없거나 비어있을 때 쓰는 기존 flat-tier 폴백 렌더링 (회귀 안전판) */
function FlatFallback({
  results,
  onNavigate,
  onGoToSearch,
}: {
  results: SiteSearchResult[]
  onNavigate: () => void
  onGoToSearch: () => void
}) {
  if (results.length === 0) return null
  return (
    <div className="space-y-3 md:space-y-4">
      <article className="rounded-[14px] border border-primary/20 bg-white shadow-sm md:rounded-xl">
        <Link
          href={results[0].url}
          onClick={onNavigate}
          className="block rounded-[14px] px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-xl md:px-5 md:py-5"
        >
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-[10.5px] font-bold text-primary">
            가장 관련 있는 안내
          </span>
          <p className="mt-2.5 text-[11px] font-bold text-primary md:text-[11.5px]">{results[0].category}</p>
          <p className="mt-1 text-[16px] font-bold leading-snug text-gray-dark [overflow-wrap:break-word] [word-break:keep-all] md:text-[17px]">
            {results[0].title}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-gray [overflow-wrap:break-word] [word-break:keep-all] md:text-[13.5px]">
            {results[0].description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-bold text-primary">
            자세히 확인하기
            <ChevronIcon />
          </span>
        </Link>
      </article>

      {results.length > 1 && (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2.5">
          {results.slice(1, 4).map((item) => (
            <QnaRow key={item.url} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      )}

      <GoToSearchFooter onGoToSearch={onGoToSearch} />
    </div>
  )
}

export default function SearchResultsExperience({ experience, fallbackResults, onNavigate, onGoToSearch }: Props) {
  if (!experience || !experience.primary) {
    return <FlatFallback results={fallbackResults} onNavigate={onNavigate} onGoToSearch={onGoToSearch} />
  }

  const { primary, checklist, companion, relatedQna, relatedPages } = experience
  const hasWeek = experience.weekEntity != null

  return (
    <div className="space-y-3 md:space-y-4">
      {/* 핵심 답변 */}
      <article className="rounded-[14px] border border-primary/20 bg-white shadow-sm md:rounded-xl">
        <Link
          href={primary.url}
          onClick={onNavigate}
          className="block rounded-[14px] px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-xl md:px-5 md:py-5"
        >
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-[10.5px] font-bold text-primary">
            핵심 답변
          </span>
          <p className="mt-2.5 text-[11px] font-bold text-primary md:text-[11.5px]">{primary.category}</p>
          <p className="mt-1 text-[16px] font-bold leading-snug text-gray-dark [overflow-wrap:break-word] [word-break:keep-all] md:text-[17px]">
            {primary.title}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-gray [overflow-wrap:break-word] [word-break:keep-all] md:text-[13.5px]">
            {primary.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-bold text-primary">
            자세히 확인하기
            <ChevronIcon />
          </span>
        </Link>
      </article>

      {/* 지금 같이 확인하세요 — 2x2 compact grid */}
      {checklist.length > 0 && (
        <div>
          <p className="mb-1.5 text-[12px] font-bold text-primary-dark md:text-[12.5px]">
            {hasWeek ? '지금 같이 확인하세요' : '함께 확인하면 좋은 정보'}
          </p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5">
            {checklist.map((tile) => (
              <GridTile key={`${tile.tag}-${tile.item.url}`} tile={tile} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      {/* 함께 확인하면 좋은 정보 (주수 검색 전용 2번째 그리드) */}
      {companion.length > 0 && (
        <div>
          <p className="mb-1.5 text-[12px] font-bold text-primary-dark md:text-[12.5px]">
            {primary.title.slice(0, 8)}와 함께 확인하면 좋은 정보
          </p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5">
            {companion.map((tile) => (
              <GridTile key={`${tile.tag}-${tile.item.url}`} tile={tile} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      {/* 관련 Q&A */}
      {relatedQna.length > 0 && (
        <div>
          <p className="mb-1.5 text-[12px] font-bold text-primary-dark md:text-[12.5px]">관련 Q&A</p>
          <div className="space-y-2 md:grid md:grid-cols-2 md:gap-2.5 md:space-y-0">
            {relatedQna.map((item) => (
              <QnaRow key={item.url} item={item} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      {/* 관련 의료정보 */}
      {relatedPages.length > 0 && (
        <div>
          <p className="mb-1.5 text-[12px] font-bold text-primary-dark md:text-[12.5px]">관련 의료정보</p>
          <div className="space-y-2">
            {relatedPages.map((item) => (
              <QnaRow key={item.url} item={item} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      <GoToSearchFooter onGoToSearch={onGoToSearch} />
    </div>
  )
}
