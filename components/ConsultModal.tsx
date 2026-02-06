import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = 'https://script.google.com/macros/s/AKfycbw8vBdb2FuJ4-QluyrGm7D2_FdSdn5ET237Y2Qra5ioZzu0-wVsKVKCIEIbcWDjYqvk/exec';

interface FormData {
  category: string;
  name: string;
  phone: string;
  memo: string;
}

/* ───────────────────────────────────────────
   개인정보 처리방침 전문
   ─────────────────────────────────────────── */
const PRIVACY_POLICY = `< 연세365산부인과의원 >('https://www.ipgyn.com' 이하 '연세365산부인과의원')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

○ 이 개인정보처리방침은 2023년 7월 20일부터 적용됩니다.


제1조(개인정보의 처리 목적)

< 연세365산부인과의원 >('https://www.ipgyn.com' 이하 '연세365산부인과의원')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

• 홈페이지 회원가입 및 관리
  회원 가입의사 확인, 회원자격 유지·관리, 각종 고지·통지 등을 목적으로 개인정보를 처리합니다.

• 재화 또는 서비스 제공
  서비스 제공, 콘텐츠 제공을 목적으로 개인정보를 처리합니다.

• 마케팅 및 광고에의 활용
  접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.


제2조(개인정보의 처리 및 보유 기간)

① < 연세365산부인과의원 >은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

<홈페이지 회원가입 및 관리>
수집·이용에 관한 동의일로부터 <준영구>까지 위 이용목적을 위하여 보유·이용됩니다.
보유근거 : 회원가입일로부터 서비스를 제공하는 기간 동안에 한하여 이용자의 개인정보를 보유 및 이용

관련법령 :
• 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
• 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
• 대금결제 및 재화 등의 공급에 관한 기록 : 5년
• 계약 또는 청약철회 등에 관한 기록 : 5년
• 표시/광고에 관한 기록 : 6개월


제3조(처리하는 개인정보의 항목)

① < 연세365산부인과의원 >은(는) 다음의 개인정보 항목을 처리하고 있습니다.

<홈페이지 회원가입 및 관리>
필수항목 : 이메일, 비밀번호 질문과 답, 비밀번호, 로그인ID, 이름, 쿠키
선택항목 : 없음


제5조(개인정보처리의 위탁에 관한 사항)

① < 연세365산부인과의원 >은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

<개인정보 처리 위탁>
위탁받는 자 (수탁자) : 애니라인(주)
위탁하는 업무의 내용 : 회원가입
위탁기간 : 처리목적 달성 시 또는 위탁계약 종료시까지

② < 연세365산부인과의원 >은(는) 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.

③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.


제6조(개인정보의 파기절차 및 파기방법)

① < 연세365산부인과의원 >은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 개인정보 파기의 절차 및 방법은 다음과 같습니다.

• 파기절차 : 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
• 파기방법 : 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.


제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)

① 정보주체는 연세365산부인과의원에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.

② 제1항에 따른 권리 행사는 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 연세365산부인과의원은(는) 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑥ 연세365산부인과의원은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.


제8조(개인정보의 안전성 확보조치에 관한 사항)

< 연세365산부인과의원 >은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
• 내부관리계획의 수립 및 시행
• 개인정보의 암호화


제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)

① 연세365산부인과의원은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 쿠키(cookie)를 사용합니다.
② 쿠키의 사용 목적, 거부 방법 및 거부 시 불이익은 원문과 동일합니다.


제10조(추가적인 이용·제공 판단기준)

< 연세365산부인과의원 >은(는) ｢개인정보 보호법｣에 따라 추가 이용·제공 판단기준을 고려합니다.


제11조(개인정보 보호책임자에 관한 사항)

① 연세365산부인과의원은(는) 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자 / 개인정보 보호 담당부서
  연세365산부인과의원


제12조(개인정보의 열람청구를 접수·처리하는 부서)

▶ 개인정보 열람청구 접수·처리 부서
  연세365산부인과의원


제13조(정보주체의 권익침해에 대한 구제방법)

정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원(KISA) 개인정보침해신고센터, 대검찰청, 경찰청 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.


제14조(개인정보 처리방침 변경)

① 이 개인정보처리방침은 2023년 7월 20일부터 적용됩니다.`;


/* ───────────────────────────────────────────
   개인정보 처리방침 팝업 컴포넌트
   ─────────────────────────────────────────── */
const PrivacyPolicyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
    className="fixed inset-0 z-[110] flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/40" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
    >
      {/* 헤더 */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h4 className="font-bold text-gray-800 text-sm">개인정보 처리방침</h4>
        <button onClick={onClose} className="ml-auto text-gray-400 hover:text-gray-700 transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* 본문 (스크롤) */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <pre className="whitespace-pre-wrap text-xs text-gray-600 leading-relaxed font-sans">
          {PRIVACY_POLICY}
        </pre>
      </div>

      {/* 하단 닫기 */}
      <div className="flex-shrink-0 px-5 py-3 border-t border-gray-100 bg-gray-50">
        <button
          onClick={onClose}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
        >
          확인
        </button>
      </div>
    </motion.div>
  </motion.div>
);


/* ───────────────────────────────────────────
   메인 상담 모달
   ─────────────────────────────────────────── */
const ConsultModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    category: '임신중절',
    name: '',
    phone: '',
    memo: '',
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; agreed?: string }>({});

  // 커스텀 이벤트로 모달 열기
  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setErrors({});
    };
    window.addEventListener('open-consult-modal', handler);
    return () => window.removeEventListener('open-consult-modal', handler);
  }, []);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setShowPrivacy(false);
    setFormData({ category: '임신중절', name: '', phone: '', memo: '' });
    setAgreed(false);
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!/^[0-9]{9,11}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '올바른 연락처를 입력해주세요.';
    }
    if (!agreed) newErrors.agreed = '개인정보 수집에 동의해주세요.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const cleanPhone = formData.phone.replace(/-/g, '');
      const payload = {
        category: formData.category,
        name: formData.name,
        phone: cleanPhone,
        memo: formData.memo,
      };

      // POST with JSON body — Content-Type: text/plain to avoid CORS preflight
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      setFormData({ category: '임신중절', name: '', phone: '', memo: '' });
      setAgreed(false);
    } catch {
      alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* 모달 본체 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* 헤더 */}
              <div className="bg-gradient-to-r from-primary to-pink-500 px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-xs font-bold tracking-widest uppercase">Quick Booking</p>
                  <h3 className="text-white text-xl font-bold mt-1">간편 상담예약</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X size={22} />
                </button>
              </div>

              {/* 성공 화면 */}
              {isSuccess ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={36} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">상담 신청 완료</h4>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    상담 신청이 완료되었습니다.<br />
                    빠르게 확인 후 연락드리겠습니다.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-colors"
                  >
                    확인
                  </button>
                </div>
              ) : (
                /* 폼 */
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                  {/* 상담 분야 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">상담 분야</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                    >
                      <option value="임신중절">임신중절</option>
                      <option value="여성검진">여성검진</option>
                      <option value="피부과">피부과</option>
                    </select>
                  </div>

                  {/* 이름 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      이름 <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="이름을 입력해주세요"
                      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm ${
                        errors.name ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      연락처 <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="하이픈(-) 없이 입력"
                      className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm ${
                        errors.phone ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* 메모 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">메모</label>
                    <textarea
                      name="memo"
                      value={formData.memo}
                      onChange={handleChange}
                      rows={2}
                      placeholder="궁금하신 내용을 간단히 적어주세요"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  {/* 개인정보 동의 */}
                  <div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacy-agree"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          if (errors.agreed) setErrors(prev => ({ ...prev, agreed: undefined }));
                        }}
                        className="mt-0.5 w-4 h-4 accent-pink-600 rounded cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="privacy-agree" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                        상담 목적의{' '}
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}
                          className="text-primary font-bold underline underline-offset-2 hover:text-primary-dark transition-colors"
                        >
                          개인정보 수집 및 이용
                        </button>
                        에 동의합니다.
                        <br />
                        <span className="text-gray-400">(이름, 연락처는 상담 연락 목적으로만 사용됩니다.)</span>
                      </label>
                    </div>
                    {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
                  </div>

                  {/* 제출 버튼 */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>상담 신청하기</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 개인정보 처리방침 팝업 (모달 위 모달) */}
      <AnimatePresence>
        {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ConsultModal;
