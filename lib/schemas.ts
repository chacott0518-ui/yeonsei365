export const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: '연세365산부인과',
    url: 'https://www.yeonsei365.com',
    telephone: '02-585-3650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '과천대로 939 3층',
      addressLocality: '관악구',
      addressRegion: '서울',
      addressCountry: 'KR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 37.4875, longitude: 126.9822 },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-13:00'],
    medicalSpecialty: '산부인과',
    sameAs: ['http://pf.kakao.com/_TpaBj', 'https://map.naver.com/v5/search/연세365산부인과'],
  }