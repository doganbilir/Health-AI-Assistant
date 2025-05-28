import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-background-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Yapay Zeka ile <span className="text-primary">Sağlığınıza</span> Işık Tutun
            </h1>
            <p className="text-lg text-slate-600">
              Semptomlarınıza dayalı olarak olası hastalıklar hakkında bilgi alın ve tedavi önerileri ile sağlığınız konusunda daha bilinçli kararlar verin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#symptom-checker" className="btn-primary">
                Semptomlarınızı Kontrol Edin
              </a>
              <a href="#how-it-works" className="btn-outline">
                Nasıl Çalışır?
              </a>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/41.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/55.jpg" alt="User" />
              </div>
              <span className="text-sm text-slate-600">10,000+ kullanıcı tarafından güvenilir</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Healthcare professional"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">%93 doğruluk oranı</p>
                      <p className="text-xs text-slate-600">Yapay zeka modelimiz sürekli gelişiyor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 