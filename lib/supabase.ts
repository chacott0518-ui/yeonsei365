import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function incrementPageView(slug: string) {
  try {
    await supabase.rpc('increment_page_view', { p_slug: slug })
  } catch (e) {
    console.error('[조회수 오류]', e)
  }
}

export async function getPageView(slug: string): Promise<number> {
  try {
    const { data } = await supabase
      .from('page_views')
      .select('view_count')
      .eq('slug', slug)
      .single()
    return data?.view_count || 0
  } catch {
    return 0
  }
}