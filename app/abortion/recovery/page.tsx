import type { Metadata } from 'next';
import RecoveryClient from './RecoveryClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
  description:
    '임신중절수술 후 관리가 궁금하신가요? 낙태 수술 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 임신중절수술 금액·비용·가격도 함께 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태수술후관리', '낙태수술회복기간', '낙태수술후출혈',
    '낙태수술후음식', '낙태수술후음주', '낙태후유증',
    '중절수술후관리', '중절수술후생리', '임신중절수술후관리',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/recovery' },
  openGraph: {
    title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
    description: '낙태 수술 후 회복기간, 주의사항, 생리 재개 시기 안내. 임신중절수술 금액·비용. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/recovery',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후 관리 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후 관리 | 낙태 비용 가격·회복기간·주의사항 | 연세365산부인과',
    description:
      '임신중절수술 후 관리가 궁금하신가요? 낙태 수술 회복기간, 수술 후 음식·음주·출혈·생리 재개 시기를 안내합니다. 임신중절수술 금액·비용·가격도 함께 확인하세요. 사당역 연세365산부인과.',
  },
};

const PAGE_URL = 'https://www.yeonsei365.com/abortion/recovery'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 후 관리 | 회복기간·주의사항·생리 재개 완벽 안내', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 후 회복기간은 얼마나 되나요?',acceptedAnswer:{'@type':'Answer',text:'수술 다음 날부터 가벼운 일상생활이 가능하며 사무직은 2~3일 후 복귀 가능합니다. 격렬한 운동·성관계·음주는 2주간 금지입니다. 생리는 보통 4~6주 내에 재개됩니다.'}}, {'@type':'Question',name:'임신중절수술 후 생리는 언제 시작되나요?',acceptedAnswer:{'@type':'Answer',text:'수술 후 4~6주 내에 첫 생리가 재개되는 것이 일반적입니다. 첫 생리는 평소보다 양이 많거나 통증이 강할 수 있으며 이는 정상입니다. 8주 이상 생리가 없다면 내원하여 확인하세요.'}}, {'@type':'Question',name:'임신중절수술 후 즉시 병원에 가야 하는 증상은 무엇인가요?',acceptedAnswer:{'@type':'Answer',text:'38도 이상 고열, 생리량보다 많은 과다 출혈, 약으로 조절되지 않는 심한 복통, 악취 나는 분비물이 있다면 즉시 연세365산부인과(02-585-3650)에 내원하세요.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 후 관리 회복기간 주의사항', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술 후 관리'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'임신중절수술 후 회복 단계별 관리', description:'수술 당일부터 4주까지 단계별 회복 안내', step:[ {'@type':'HowToStep',position:1,name:'수술 당일',text:'회복실 1~2시간 안정 후 대중교통으로 귀가. 처방약 복용 시작.'}, {'@type':'HowToStep',position:2,name:'1~3일',text:'가벼운 샤워·산책 가능. 출혈·복통 관찰. 사무직 업무 복귀 가능.'}, {'@type':'HowToStep',position:3,name:'1~2주',text:'성관계·격렬한 운동·음주·탕목욕 금지. 사후 검진 내원.'}, {'@type':'HowToStep',position:4,name:'4~6주',text:'첫 생리 재개. 정상 활동 가능. 피임 상담 권장.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 후 관리 회복기간 주의사항', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 후 관리',item:PAGE_URL} ] }
export default function RecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <RecoveryClient />
    </>
  );
}