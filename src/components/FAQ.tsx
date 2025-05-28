import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Bu platform hastalık teşhisi koyabilir mi?",
      answer: "Hayır, platformumuz teşhis koymak üzere tasarlanmamıştır. Amacımız, belirttiğiniz semptomlara dayalı olarak olası hastalıklar hakkında bilgi vermek ve genel tedavi önerileri sunmaktır. Kesin teşhis için mutlaka bir sağlık uzmanına başvurmanızı öneririz."
    },
    {
      question: "Kullandığınız veriler ne kadar güvenilir?",
      answer: "Platformumuz, tıbbi literatüre dayanan ve sürekli güncellenen bir veri tabanı kullanmaktadır. Tüm bilgiler, güvenilir tıbbi kaynaklardan alınmakta ve düzenli olarak kontrol edilmektedir. Bununla birlikte, sağlık sorunlarınız için her zaman bir doktorun görüşünü almanızı öneririz."
    },
    {
      question: "Verilerim güvende mi?",
      answer: "Kesinlikle. Kişisel verileriniz ve sağlık bilgileriniz en yüksek güvenlik standartlarıyla korunmaktadır. Bilgileriniz hiçbir üçüncü tarafla paylaşılmaz ve sadece semptom analizi için kullanılır."
    },
    {
      question: "Bu hizmeti kullanmak ücretli mi?",
      answer: "Platformumuzun temel özellikleri ücretsizdir. Basit semptom kontrolü ve genel sağlık bilgileri herkes tarafından erişilebilirdir. Ancak daha kapsamlı analizler ve özelleştirilmiş öneriler için premium üyelik seçeneklerimiz mevcuttur."
    },
    {
      question: "Acil durumda bu platformu kullanmalı mıyım?",
      answer: "Hayır, acil durumlarda platform kullanmak yerine hemen tıbbi yardım almalısınız. Ciddi veya ani başlayan semptomlarınız varsa, lütfen acil servisi arayın veya en yakın sağlık kuruluşuna başvurun."
    },
    {
      question: "Platformunuzun doğruluk oranı nedir?",
      answer: "Platformumuz yaklaşık %85-90 doğruluk oranına sahiptir ve sürekli olarak geliştirilmektedir. Ancak, yapay zeka modelleri her zaman bir hata payına sahiptir ve bu nedenle sunduğumuz bilgiler yalnızca rehberlik amaçlıdır."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sağlık Asistanımız hakkında merak ettiklerinize yanıt bulun.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">Başka sorularınız mı var?</p>
            <a href="#" className="btn-outline">
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 