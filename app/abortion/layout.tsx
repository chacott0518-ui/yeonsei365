/* Header는 app/layout.tsx 루트 레이아웃에서 렌더링됩니다. */
export default function AbortionLayout({ children }: { children: React.ReactNode }) {
  return <div className="abortion-page-wrap">{children}</div>
}
