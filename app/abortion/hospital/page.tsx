import type { Metadata } from 'next';
import HospitalClient from './HospitalClient';

export const metadata: Metadata = {
  title: '임신중절수술병원 낙태병원 서울 | 연세365산부인과',
  description:
    '낙태병원, 낙태수술병원, 임신중절수술병원, 중절수술병원, 서울중절수술병원, 임신초기낙태병원, 중절수술병원찾기, 중절수술병원예약, 중절수술병원후기 안내.',
  alternates: {
    canonical: 'https://yeonsei365.vercel.app/abortion/hospital',
  },
};

export default function HospitalPage() {
  return <HospitalClient />;
}
