import type { Metadata } from 'next';
import LegalClient from './LegalClient';
import { clinicSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: '낙태 합법화 안내 | 임신중절수술 합법 시기·기간·금액 | 연세365산부인과',
  description:
    '낙태 합법화가 궁금하신가요? 2021년 낙태죄 폐지 이후 임신중절수술 합법 시기와 기간을 정확히 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  keywords: [
    '낙태합법화', '낙태시기', '낙태기간', '낙태법',
    '낙태수술합법', '낙태수술합법시기', '임신중절수술합법',
    '임신중절수술합법기간', '중절수술합법', '낙태죄폐지',
    '임신중절수술금액', '임신중절수술비용', '낙태비용가격',
  ],
  alternates: { canonical: 'https://www.yeonsei365.com/abortion/legal' },
  openGraph: {
    title: '낙태 합법화 안내 | 임신중절수술 합법 시기·기간·금액 | 연세365산부인과',
    description: '낙태 합법화, 낙태죄 폐지 후 임신중절 합법 기준·금액 안내. 사당역 연세365산부인과.',
    url: 'https://www.yeonsei365.com/abortion/legal',
    images: [{ url: 'https://www.yeonsei365.com/og-image.jpg', width: 1200, height: 630, alt: '낙태 합법화 임신중절수술 금액 연세365산부인과' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '낙태 합법화 안내 | 임신중절수술 합법 시기·기간·금액 | 연세365산부인과',
    description:
      '낙태 합법화가 궁금하신가요? 2021년 낙태죄 폐지 이후 임신중절수술 합법 시기와 기간을 정확히 안내합니다. 낙태 비용 가격·임신중절수술 금액·비용까지 한눈에 확인하세요. 사당역 연세365산부인과.',
  },
};
const PAGE_URL = 'https://www.yeonsei365.com/abortion/legal'
const PAGE_DATE = '2026-04-01'
const PAGE_MODIFIED = '2026-05-22'
const articleSchema = { '@context':'https://schema.org','@type':'Article', headline:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준 완벽 정리', datePublished:PAGE_DATE, dateModified:PAGE_MODIFIED, image:'https://www.yeonsei365.com/og-image.jpg', author:{'@type':'Organization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, publisher:{'@type':'MedicalOrganization',name:'연세365산부인과',logo:{'@type':'ImageObject',url:'https://i.imgur.com/f7h5DY0.png'}}, mainEntityOfPage:{'@type':'WebPage','@id':PAGE_URL}, url:PAGE_URL }
const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[ {'@type':'Question',name:'낙태 합법화 이후 임신중절수술이 가능한 기간은 언제인가요?',acceptedAnswer:{'@type':'Answer',text:'2021년 낙태죄 폐지 이후 임신 14주 이내는 본인 동의만으로 합법적으로 수술이 가능합니다. 14~24주는 모자보건법 제14조 사유(강간·근친임신·유전질환·모체건강위협)에 해당하는 경우 가능합니다.'}}, {'@type':'Question',name:'낙태죄는 언제 폐지되었나요?',acceptedAnswer:{'@type':'Answer',text:'2019년 헌법재판소 헌법불합치 결정 이후 2021년 1월 1일부터 형법 제269조·제270조 낙태죄 처벌 조항이 효력을 상실했습니다.'}}, {'@type':'Question',name:'미성년자도 임신중절수술이 가능한가요?',acceptedAnswer:{'@type':'Answer',text:'원칙적으로 법정대리인(부모·후견인) 동의가 필요합니다. 강간·가정폭력 등 특수 상황인 경우 개별 상담을 통해 최선의 방안을 모색합니다. 먼저 전화나 카카오톡으로 문의해 주세요.'}} ] }
const medicalWebPageSchema = { '@context':'https://schema.org','@type':'MedicalWebPage', name:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준', url:PAGE_URL, specialty:{'@type':'MedicalSpecialty',name:'산부인과'}, medicalAudience:{'@type':'MedicalAudience',audienceType:'여성 환자'}, lastReviewed:PAGE_DATE, reviewedBy:{'@type':'MedicalOrganization',name:'연세365산부인과',url:'https://www.yeonsei365.com'}, about:{'@type':'MedicalCondition',name:'임신중절수술 합법 기준'} }
const howToSchema = { '@context':'https://schema.org','@type':'HowTo', name:'합법적 임신중절수술 진행 방법', description:'합법적으로 임신중절수술을 받는 4단계', step:[ {'@type':'HowToStep',position:1,name:'신분 확인',text:'신분증 지참 필수. 본인 확인 후 진행합니다.'}, {'@type':'HowToStep',position:2,name:'동의서 작성',text:'충분한 설명 후 서면 동의를 구합니다.'}, {'@type':'HowToStep',position:3,name:'초음파 진단',text:'정확한 주수 확인 후 방법을 결정합니다.'}, {'@type':'HowToStep',position:4,name:'합법 시술',text:'산부인과 전문의가 안전하게 집도합니다.'} ], tool:{'@type':'HowToTool',name:'연세365산부인과'} }
const speakableSchema = { '@context':'https://schema.org','@type':'WebPage', name:'낙태 합법화 안내 | 임신중절수술 합법 시기·기준', url:PAGE_URL, speakable:{'@type':'SpeakableSpecification',cssSelector:['h1','h2']} }
const breadcrumbSchema = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ {'@type':'ListItem',position:1,name:'홈',item:'https://www.yeonsei365.com'}, {'@type':'ListItem',position:2,name:'임신중절클리닉',item:'https://www.yeonsei365.com/abortion'}, {'@type':'ListItem',position:3,name:'합법화 안내',item:PAGE_URL} ] }

export default function LegalPage() {
  return (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <LegalClient />
    </>
  );
}