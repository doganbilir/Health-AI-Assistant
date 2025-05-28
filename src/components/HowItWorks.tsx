import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Semptomları Girin',
      description: 'Yaşadığınız semptomları detaylı bir şekilde sisteme girin. Ne kadar detaylı olursa, analiz o kadar doğru olur.'
    },
    {
      number: '02',
      title: 'Yapay Zeka Analizi',
      description: 'Gelişmiş yapay zeka modelimiz, semptomlarınızı analiz ederek olası hastalıkları belirler.'
    },
    {
      number: '03',
      title: 'Sonuçları Görüntüleyin',
      description: 'Olası hastalıkların listesini ve bunlara ilişkin tedavi önerilerini görüntüleyin.'
    },
    {
      number: '04',
      title: 'Sağlık Profesyoneline Danışın',
      description: 'Gerekli durumlarda bir sağlık profesyoneline başvurun. Sistemimiz teşhis amaçlı değil, bilgilendirme amaçlıdır.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sağlık Asistanımız, semptomlarınızı analiz ederek size olası hastalıklar ve tedavi önerileri sunar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-24 h-[calc(100%-180px)] w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="card relative z-10 transform transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              
              {/* Arrows connecting steps (visible only on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-10 transform translate-x-full">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#symptom-checker" className="btn-primary">
            Hemen Deneyin
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 