import type { Metadata } from 'next';
import ReviewClient from './ReviewClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '임신중절수술 후기 | 사례·주의점 안내 | 연세365산부인과의원',
  description:
    '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 후기를 읽을 때 확인할 기준과 개인차를 안내합니다. 사당역 연세365산부인과의원.',
  keywords: [
    '낙태후기', '낙태수술후기', '임신중절수술후기', '중절수술후기',
    '임신초기중절수술후기', '임신초기낙태후기', '낙태부작용',
    '임신중절수술부작용', '약물중절후기',
    ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/review' },
  openGraph: {
    title: '임신중절수술 후기 | 사례·주의점 안내 | 연세365산부인과의원',
    description: '임신중절수술 후기, 낙태수술 부작용 사례 안내. 사당역 연세365산부인과의원.',
    url: 'https://www.yeonsei365.com/abortion/review',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '임신중절수술 후기 낙태 비용 가격 연세365산부인과의원' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '임신중절수술 후기 | 사례·주의점 안내 | 연세365산부인과의원',
    description:
      '임신중절수술 후기가 궁금하신가요? 낙태수술 후기, 중절수술 후기, 임신초기낙태 후기를 솔직하게 안내합니다. 후기를 읽을 때 확인할 기준과 개인차를 안내합니다. 사당역 연세365산부인과의원.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/review'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'임신중절수술 후기 | 낙태수술 후기·사례 연세365산부인과의원', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과의원',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과의원',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'임신중절수술 후기는 어떤 기준으로 참고해야 하나요?',acceptedAnswer:{'@type':'Answer',text:'후기에서 통증, 회복 기간, 당일 과정에 대한 내용은 참고할 수 있지만 개인마다 경험이 다를 수 있습니다. 수술 방법, 주수, 건강 상태에 따라 회복 속도와 통증 정도가 달라지므로 특정 후기의 경험이 자신에게도 동일하게 적용된다고 단정하지 않는 것이 좋습니다. 후기보다는 직접 상담을 통해 본인 상황에 맞는 정보를 얻으시길 권장합니다.'}}, {'@type':'Question',name:'수술 후 통증은 얼마나 심한가요?',acceptedAnswer:{'@type':'Answer',text:'수면마취 중에는 통증을 느끼지 않는 것이 일반적입니다. 수술 후 마취에서 깨어난 뒤 일정 기간 생리통과 유사한 불편감이 있을 수 있으며, 정도는 개인마다 차이가 있습니다. 심한 통증이 지속되거나 악화된다면 즉시 의료기관에 연락하시기 바랍니다.'}}, {'@type':'Question',name:'수술 당일 귀가는 어떻게 이루어지나요?',acceptedAnswer:{'@type':'Answer',text:'회복실에서 1~2시간 안정을 취한 후 귀가하는 것이 일반적입니다. 수면마취 후에는 자가 운전이 불가하므로 대중교통을 이용하거나 보호자와 함께 귀가하셔야 합니다. 귀가 가능 여부는 회복 상태를 확인한 의료진이 최종적으로 안내합니다.'}}, {'@type':'Question',name:'수술 후 일상 복귀까지 얼마나 걸리나요?',acceptedAnswer:{'@type':'Answer',text:'가벼운 일상생활이나 사무직 업무는 수술 다음 날부터 가능한 경우가 많습니다. 개인 상태에 따라 차이가 있으므로 격렬한 운동이나 장시간 서 있는 업무는 의료진 안내에 따라 복귀 시기를 결정하시기 바랍니다. 무리한 활동은 회복에 영향을 줄 수 있습니다.'}}, {'@type':'Question',name:'후기에서 비용이 다르게 나오는데 어떤 기준인가요?',acceptedAnswer:{'@type':'Answer',text:'비용은 임신 주수에 따라 다르며, 연세365산부인과의원의 기준은 8주 미만 45만원, 8주 60만원, 9주 70만원, 10주 80만원입니다. 정확한 주수는 초음파 검사로 확인하며, 추가 처치가 필요한 경우 최종 비용은 진료 후 달라질 수 있습니다. 비용에 대한 궁금한 사항은 상담 시 사전에 확인하시기 바랍니다.'}}, {'@type':'Question',name:'혼자 방문해도 비밀이 보장되나요?',acceptedAnswer:{'@type':'Answer',text:'의료법에 따라 진료 내용은 본인 동의 없이 외부에 공개되지 않습니다. 접수부터 상담, 수술, 회복, 귀가까지 독립된 동선으로 진행되어 다른 방문자와 마주치는 상황을 최소화합니다. 카드 결제 내역에도 수술 내용이 직접 노출되지 않습니다.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'임신중절수술 후기 낙태수술 후기 연세365산부인과의원', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, about:{'@type':'MedicalCondition',name:'임신중절수술'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'연세365산부인과의원 임신중절수술 예약 방법', description:'예약부터 수술까지 3단계 안내', step:[ {'@type':'HowToStep',position:1,name:'상담 예약',text:'전화(02-585-3650) 또는 카카오톡으로 예약합니다. 익명 상담 가능.'}, {'@type':'HowToStep',position:2,name:'내원 및 검사',text:'사당역 4번 출구 도보 3분. 초음파 주수 확인 후 비용 안내.'}, {'@type':'HowToStep',position:3,name:'수술 및 귀가',text:'수면마취 후 10~30분 수술. 1~2시간 회복 후 당일 귀가.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과의원'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'임신중절수술 후기 낙태수술 후기 연세365산부인과의원', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
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