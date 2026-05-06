# Sağlık Asistanı

Yapay zeka tabanlı sağlık asistanı web uygulaması. Kullanıcıların belirttiği semptomlara dayalı olarak hastalıklar hakkında bilgi veren ve tedavi önerileri sunan bir platform.

## Proje Hakkında

Bu platform, kullanıcıların semptomlarını girerek olası hastalıklar hakkında bilgi almalarını sağlar. Yapay zeka modeli, girilen semptomları analiz ederek olası hastalıkları listeler ve tedavi önerileri sunar.

**Not:** Bu uygulama, sağlık bilgilendirme amacı güder ve teşhis koymayı amaçlamaz. Yalnızca kullanıcıların sağlık sorunlarına dair temel rehberlik sağlar.

## Özellikler

- Semptom analizi
- Olası hastalıklar listesi
- Tedavi önerileri
- Kullanıcı dostu arayüz
- Tamamen responsive tasarım
- Modern ve kolay kullanım

## Teknolojiler

Bu projede kullanılan teknolojiler:

- React
- TypeScript
- TailwindCSS
- OpenAI API
- React Router
- Axios
- Framer Motion
- React Icons

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Node.js'i yükleyin (https://nodejs.org/)
2. Bu repo'yu klonlayın:
   ```
   git clone https://github.com/kullaniciadi/saglik-asistani.git
   ```
3. Proje klasörüne gidin:
   ```
   cd saglik-asistani
   ```
4. Bağımlılıkları yükleyin:
   ```
   npm install
   ```
5. OpenAI API anahtarını ayarlayın:
   - Projenin ana dizininde `.env` dosyası oluşturun
   - Dosyaya şu satırı ekleyin (API anahtarınızı buraya yazın):
     ```
     REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
     ```
6. Geliştirme sunucusunu başlatın:
   ```
   npm start
   ```
7. Tarayıcınızda http://localhost:3000 adresini açın

## OpenAI API Anahtarı Edinme

1. [OpenAI](https://platform.openai.com/) sitesine giriş yapın veya hesap oluşturun
2. API anahtarları bölümüne gidin
3. "Create new secret key" butonuna tıklayın
4. Oluşturulan API anahtarını `.env` dosyasına ekleyin

## Proje Yapısı

```
src/
  ├── components/   # Tüm UI bileşenleri
  ├── services/     # API servisleri
  ├── assets/       # Görseller ve diğer statik dosyalar
  ├── styles/       # CSS dosyaları
  ├── App.tsx       # Ana uygulama bileşeni
  └── index.tsx     # Giriş noktası
```

## Katkıda Bulunma

1. Bu repo'yu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

Proje Sahibi - [email@example.com](mailto:email@example.com)

Proje Link: [https://github.com/kullaniciadi/saglik-asistani](https://github.com/kullaniciadi/saglik-asistani) 