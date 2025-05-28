# Sağlık Asistanı Kurulum Rehberi

Bu rehber, Sağlık Asistanı uygulamasını lokal ortamınızda çalıştırmak için gerekli adımları içerir.

## Gereksinimler

- Node.js (v14.0.0 veya üzeri)
- npm veya yarn
- OpenAI API anahtarı

## Kurulum Adımları

### 1. Node.js Kurulumu

Eğer sisteminizde Node.js kurulu değilse, [Node.js resmi sitesinden](https://nodejs.org/) indirip kurabilirsiniz.

Kurulumun başarılı olup olmadığını kontrol etmek için terminal veya komut istemcisinde şu komutu çalıştırın:

```
node -v
```

### 2. Projeyi Klonlama

Projeyi bilgisayarınıza klonlayın:

```
git clone https://github.com/kullaniciadi/saglik-asistani.git
cd saglik-asistani
```

### 3. Bağımlılıkları Yükleme

Proje klasörüne girdikten sonra gerekli bağımlılıkları yükleyin:

```
npm install
```

veya yarn kullanıyorsanız:

```
yarn install
```

### 4. OpenAI API Anahtarı Ayarlama

1. [OpenAI Platform](https://platform.openai.com/) sitesine giriş yapın. Hesabınız yoksa yeni bir hesap oluşturun.
2. API anahtarları bölümüne gidin ve yeni bir API anahtarı oluşturun.
3. Proje ana dizininde `.env` adlı bir dosya oluşturun.
4. Dosyaya API anahtarınızı aşağıdaki formatta ekleyin:

```
REACT_APP_OPENAI_API_KEY=sk-your_api_key_here
```

### 5. Uygulamayı Çalıştırma

Tüm kurulum adımlarını tamamladıktan sonra uygulamayı çalıştırabilirsiniz:

```
npm start
```

veya yarn kullanıyorsanız:

```
yarn start
```

Uygulama başarıyla başlatıldığında, tarayıcınızda otomatik olarak açılacaktır. Eğer açılmazsa, tarayıcınızı açıp [http://localhost:3000](http://localhost:3000) adresine gidebilirsiniz.

## Sorun Giderme

- **API anahtarı hatası**: OpenAI API'den "Authentication error" alıyorsanız, `.env` dosyasındaki API anahtarınızı kontrol edin.
- **Bağımlılık hataları**: `npm install` sırasında hata alırsanız, Node.js sürümünüzü kontrol edin ve gerekirse güncelleyin.
- **Uygulama çalışmıyor**: Tarayıcı konsolunda hataları kontrol edin ve gerekirse ilgili bağımlılıkları manuel olarak yükleyin.

## İletişim

Kurulumla ilgili sorunlar yaşıyorsanız, aşağıdaki adreslerden destek alabilirsiniz:

- E-posta: [email@example.com](mailto:email@example.com)
- GitHub: [https://github.com/kullaniciadi/saglik-asistani/issues](https://github.com/kullaniciadi/saglik-asistani/issues) 