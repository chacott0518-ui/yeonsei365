'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FEATURED_QUESTIONS } from '@/lib/homeSearchData'

type SearchResult = {
  title: string
  url: string
  description: string
  category: string
}

type SearchStatus = 'idle' | 'loading' | 'success' | 'empty' | 'error'

type PersistedSearchState = {
  query: string
  activeQuery: string
  results: SearchResult[]
  status: 'success' | 'empty'
  errorMessage: string | null
  page: number
}

const STORAGE_KEY = 'yeonsei365:home-search-state:v1'
const PC_PER_PAGE = 2
const MOBILE_PER_PAGE = 1
const INPUT_ID = 'medical-search-input'

function usePerPage() {
  const [perPage, setPerPage] = useState(PC_PER_PAGE)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setPerPage(mq.matches ? PC_PER_PAGE : MOBILE_PER_PAGE)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return perPage
}

function readPersistedState(): PersistedSearchState | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PersistedSearchState
    if (parsed.status !== 'success' && parsed.status !== 'empty') return null
    if (typeof parsed.query !== 'string' || typeof parsed.activeQuery !== 'string') return null
    if (!Array.isArray(parsed.results)) return null
    return {
      query: parsed.query,
      activeQuery: parsed.activeQuery,
      results: parsed.results,
      status: parsed.status,
      errorMessage: typeof parsed.errorMessage === 'string' ? parsed.errorMessage : null,
      page: typeof parsed.page === 'number' ? parsed.page : 0,
    }
  } catch {
    return null
  }
}

function clearPersistedState() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export default function HomeSearchClient() {
  const inputRef = useRef<HTMLInputElement>(null)
  const touchStartX = useRef<number | null>(null)
  const requestIdRef = useRef(0)
  const abortRef = useRef<AbortController | null>(null)
  const restoredRef = useRef(false)
  const perPage = usePerPage()

  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('')
  const [page, setPage] = useState(0)
  const [results, setResults] = useState<SearchResult[]>([])
  const [status, setStatus] = useState<SearchStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const totalPages = Math.max(1, Math.ceil(FEATURED_QUESTIONS.length / perPage))
  const safePage = Math.min(page, totalPages - 1)
  const slideItems = FEATURED_QUESTIONS.slice(safePage * perPage, safePage * perPage + perPage)
  const loading = status === 'loading'
  const showResults = status === 'success' || status === 'empty' || status === 'error'

  // 최초 mount에서 sessionStorage 복원 1회
  useEffect(() => {
    if (restoredRef.current) return
    restoredRef.current = true
    const saved = readPersistedState()
    if (!saved) return
    setQuery(saved.query)
    setActiveQuery(saved.activeQuery)
    setResults(saved.results)
    setStatus(saved.status)
    setErrorMessage(saved.errorMessage)
    setPage(saved.page)
  }, [])

  // /#medical-search 진입 시 input focus
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash !== '#medical-search') return
    const timer = window.setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true })
    }, 400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const persistCurrentState = useCallback(
    (next?: PersistedSearchState) => {
      const payload: PersistedSearchState | null =
        next ??
        (status === 'success' || status === 'empty'
          ? {
              query,
              activeQuery,
              results,
              status,
              errorMessage,
              page: safePage,
            }
          : null)
      if (!payload) return
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
      } catch {
        /* ignore */
      }
    },
    [query, activeQuery, results, status, errorMessage, safePage]
  )

  const goPrev = useCallback(() => {
    setPage((p) => (p <= 0 ? totalPages - 1 : p - 1))
  }, [totalPages])

  const goNext = useCallback(() => {
    setPage((p) => (p >= totalPages - 1 ? 0 : p + 1))
  }, [totalPages])

  const resetSearch = useCallback(() => {
    abortRef.current?.abort()
    requestIdRef.current += 1
    clearPersistedState()
    setQuery('')
    setActiveQuery('')
    setResults([])
    setStatus('idle')
    setErrorMessage(null)
    setPage(0)
    window.setTimeout(() => inputRef.current?.focus(), 0)
  }, [])

  const runSearch = useCallback(async () => {
    const q = query.trim()
    if (!q) return

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller
    const requestId = ++requestIdRef.current

    setResults([])
    setErrorMessage(null)
    setActiveQuery(q)
    setStatus('loading')
    inputRef.current?.blur()

    try {
      const res = await fetch('/api/site-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
        signal: controller.signal,
      })
      const data = (await res.json()) as {
        results?: SearchResult[]
        message?: string
        status?: string
      }

      if (requestId !== requestIdRef.current) return

      if (!res.ok) {
        setResults([])
        setStatus('error')
        setErrorMessage(data.message || '검색 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')
        return
      }

      const next = Array.isArray(data.results) ? data.results : []
      setResults(next)
      if (next.length === 0) {
        setStatus('empty')
        setErrorMessage(data.message || null)
        persistCurrentState({
          query: q,
          activeQuery: q,
          results: [],
          status: 'empty',
          errorMessage: data.message || null,
          page: safePage,
        })
      } else {
        setStatus('success')
        persistCurrentState({
          query: q,
          activeQuery: q,
          results: next,
          status: 'success',
          errorMessage: null,
          page: safePage,
        })
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      if (requestId !== requestIdRef.current) return
      setResults([])
      setStatus('error')
      setErrorMessage('검색 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')
    }
  }, [query, persistCurrentState, safePage])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void runSearch()
  }

  const onQueryChange = (value: string) => {
    setQuery(value)
    if (status !== 'idle' && status !== 'loading') {
      setResults([])
      setStatus('idle')
      setActiveQuery('')
      setErrorMessage(null)
    }
  }

  const onResultNavigate = () => {
    persistCurrentState()
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    if (delta < 0) goNext()
    else goPrev()
  }

  return (
    <div className="min-w-0">
      <form onSubmit={onSubmit} className="mx-auto w-full max-w-[820px]" role="search">
        <label
          htmlFor={INPUT_ID}
          className="mb-1.5 block text-[12.5px] font-semibold text-gray-dark md:mb-2 md:text-[14px]"
        >
          의료정보 검색
        </label>
        <div className="flex min-w-0 items-stretch overflow-hidden rounded-2xl border border-primary/25 bg-white shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <div className="relative min-w-0 flex-1">
            <input
              ref={inputRef}
              id={INPUT_ID}
              type="search"
              name="q"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="예: 임신중절수술 비용은 어떻게 확인하나요?"
              autoComplete="off"
              enterKeyHint="search"
              className="h-[52px] w-full min-w-0 bg-transparent py-0 pl-3.5 pr-10 text-[14.5px] text-gray-dark outline-none placeholder:text-gray/70 max-[360px]:pl-3 md:h-[62px] md:pl-5 md:pr-12 md:text-[16px] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={resetSearch}
                aria-label="검색어 지우기"
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-primary transition-colors hover:bg-surface hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" fill="none">
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="h-[52px] w-[70px] shrink-0 bg-primary text-[14px] font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 max-[360px]:w-[68px] md:h-[62px] md:w-auto md:px-7 md:text-[16px]"
          >
            {loading ? '검색 중' : '검색'}
          </button>
        </div>
        <p className="mt-1.5 text-[12px] leading-relaxed text-gray md:mt-2 md:text-[13px]">
          개인정보나 연락처는 입력하지 마세요. 게시된 의료정보 안에서 관련 내용을 찾아드립니다.
        </p>
      </form>

      <div className="relative mx-auto mt-4 w-full max-w-[820px] min-w-0 md:mt-9">
        <div className="mb-1.5 flex w-full min-w-0 items-center justify-between gap-2 md:mb-3 md:gap-3">
          <p className="text-[12px] font-bold text-primary-dark md:text-[13px]">추천 질문</p>
          <div className="flex shrink-0 items-center gap-2 md:gap-2.5">
            <button
              type="button"
              onClick={goPrev}
              aria-label="이전 추천 질문"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-primary/20 bg-white text-[12px] leading-none text-primary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary max-[320px]:h-8 max-[320px]:w-8 md:h-10 md:w-10 md:text-[13px]"
            >
              ‹
            </button>
            <span
              className="min-w-[3rem] text-center text-[12px] font-semibold text-gray"
              aria-live="polite"
            >
              {safePage + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={goNext}
              aria-label="다음 추천 질문"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-primary/20 bg-white text-[12px] leading-none text-primary transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary max-[320px]:h-8 max-[320px]:w-8 md:h-10 md:w-10 md:text-[13px]"
            >
              ›
            </button>
          </div>
        </div>

        <div
          className="grid w-full min-w-0 grid-cols-1 gap-2 md:grid-cols-2 md:gap-2.5"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slideItems.map((item) => (
            <Link
              key={`${safePage}-${item.href}-${item.question}`}
              href={item.href}
              className="flex w-full min-w-0 items-center rounded-xl border border-primary/15 bg-surface/80 px-3.5 py-3 text-[13px] font-semibold leading-[1.4] text-gray-dark transition-colors hover:border-primary/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none md:min-h-0 md:px-4 md:py-3.5 md:text-[14px] md:leading-snug md:[overflow-wrap:break-word] md:[word-break:keep-all]"
            >
              <span className="block w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal md:overflow-visible md:text-clip md:line-clamp-2">
                {item.question}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-[820px] md:mt-8" aria-live="polite">
        {status === 'loading' && (
          <p className="rounded-[14px] border border-primary/10 bg-white px-4 py-3 text-[13px] text-gray md:rounded-xl">
            관련 안내를 찾고 있습니다…
          </p>
        )}

        {showResults && status === 'error' && (
          <div className="rounded-[14px] border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
            {errorMessage || '검색 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.'}
          </div>
        )}

        {status === 'success' && results.length > 0 && (
          <div className="space-y-2.5 md:space-y-2">
            <p className="text-[12px] font-bold text-primary-dark">
              검색 결과 {results.length}건
            </p>
            {results.map((item) => (
              <article
                key={item.url}
                className="rounded-[14px] border border-primary/15 bg-white px-4 py-3.5 shadow-sm md:rounded-xl md:py-3.5"
              >
                <p className="mb-0.5 text-[10.5px] font-bold text-primary md:text-[11px]">{item.category}</p>
                <Link
                  href={item.url}
                  onClick={onResultNavigate}
                  className="block text-[14.5px] font-bold leading-snug text-gray-dark [overflow-wrap:break-word] [text-wrap:balance] [word-break:keep-all] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-[15px]"
                >
                  <span className="line-clamp-2">{item.title}</span>
                </Link>
                <p className="mt-1 line-clamp-3 text-[12.5px] leading-[1.52] text-gray [overflow-wrap:break-word] [word-break:keep-all] md:line-clamp-2 md:text-[13px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        )}

        {status === 'empty' && (
          <div className="rounded-[14px] border border-primary/15 bg-white px-4 py-3.5 md:rounded-xl md:py-4">
            <p className="text-[13.5px] font-bold leading-snug text-gray-dark [word-break:keep-all] md:text-[14px]">
              “{activeQuery}”와 일치하는 의료정보가 없습니다.
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-gray md:text-[13px]">
              {errorMessage || '다른 검색어를 입력하거나 추천 질문을 확인해 주세요.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
