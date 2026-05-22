import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
  description:
    '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 임신중절수술 금액·비용·가격과 부작용 사례까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태후기', '낙태수술후기', '임신중절수술후기', '중절수술후기',
    '임신초기중절수술후기', '임신초기낙태후기', '낙태부작용',
    '임신중절수술부작용', '약물중절후기',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/review' },
  openGraph: {
    title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
    description: '임신중절수술 후기, 낙태수술 부작용 사례 안내. 임신중절수술 금액·비용. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/review',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후기 낙태 비용 가격 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후기 | 낙태 비용 가격·부작용·사례 안내 | 연세365산부인과',
    description:
      '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 임신중절수술 금액·비용·가격과 부작용 사례까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/review'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 후기 | 낙태수술 후기·사례 연세365산부인과', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'연세365산부인과 임신중절수술 후기는 어떤가요?',acceptedAnswer:{'@type':'Answer',text:'방문자들의 공통 후기는 따뜻한 상담, 빠른 수술, 철저한 비밀보장, 추가 비용 없음입니다. 산부인과 전문의가 직접 집도하며 수면마취로 통증 없이 진행됩니다.'}}, {'@type':'Question',name:'임신중절수술 후 부작용이 있나요?',acceptedAnswer:{'@type':'Answer',text:'전문의가 안전하게 시행할 경우 부작용이 드뭅니다. 38도 이상 고열, 과다출혈, 심한 복통, 악취 분비물 발생 시 즉시 연세365산부인과(02-585-3650)에 내원하세요.'}}, {'@type':'Question',name:'임신중절수술 후기를 믿어도 되나요?',acceptedAnswer:{'@type':'Answer',text:'연세365산부인과는 실제 방문자의 경험을 바탕으로 후기를 안내하며, 개인정보 보호를 위해 이름 등 일부 내용은 변경되었습니다. 직접 전화(02-585-3650) 또는 카카오톡으로 상담하시면 더 자세한 안내를 받으실 수 있습니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 후기 낙태수술 후기 연세365산부인과', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'연세365산부인과 임신중절수술 예약 방법', description:'예약부터 수술까지 3단계 안내', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다. 익명 상담 가능.'}, {'@type':'HowToStep',position:2,name:'내원 및 검사',text:'사당역 4번출구 도보 1분. 초음파 주수 확인 후 비용 안내.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'수면마취 후 10~30분 수술. 1~2시간 회복 후 당일 귀가.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 후기 낙태수술 후기 연세365산부인과', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'수술 후기·사례',item:PAGE_URL} ] }

export default function ReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <ReviewClient />
    </>
  );
}