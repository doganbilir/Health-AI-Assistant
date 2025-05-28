import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Sağlık Asistanı, gece yarısı bebeğim ateşlendiğinde endişelendiğimde bana yardımcı oldu. Sunduğu bilgiler sayesinde doğru önlemleri alabildim.",
      name: "Ayşe Yılmaz",
      title: "Anne, 32 yaş",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
      quote: "Kronik bir rahatsızlığım var ve Sağlık Asistanı sayesinde yeni belirtiler hakkında hızlıca bilgi alabiliyorum. Doktora gitmeden önce fikir sahibi olmak için mükemmel bir uygulama.",
      name: "Mehmet Demir",
      title: "Öğretmen, 45 yaş",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
      quote: "Yoğun iş temposu içinde sağlık sorunlarım için araştırma yapmaya vaktim olmuyor. Bu uygulama sayesinde semptomlarımı hızlıca kontrol edebiliyorum.",
      name: "Zeynep Kaya",
      title: "Yazılım Mühendisi, 29 yaş",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Kullanıcılarımız Ne Diyor?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sağlık Asistanımızın hayatınızı nasıl kolaylaştırabileceğini kullanıcılarımızın deneyimlerinden öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              {/* Quote mark icon */}
              <div className="absolute -top-4 -left-2 text-primary/10">
                <svg className="w-12 h-12 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-600 italic relative z-10">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex -space-x-4">
              {testimonials.map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold border-2 border-white">
                +2K
              </div>
            </div>
            <p className="text-slate-600">
              <span className="font-medium text-primary">2,000+ mutlu kullanıcı</span> sağlık konusunda bilgilenmiş hissediyor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 