import axios from 'axios';
import { DiagnosisResponse } from '../types';

export const getSymptomAnalysis = async (symptoms: string): Promise<DiagnosisResponse> => {
  try {
    console.log('API isteği gönderiliyor...');
    console.log('API Anahtarı var mı:', !!process.env.REACT_APP_OPENAI_API_KEY);
    
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Sen bir sağlık asistanısın. Kullanıcının verdiği semptomlar hakkında bilgi vereceksin. 
            Cevabını her zaman JSON formatında dön. Format şu şekilde olmalı:
            {
              "possibleConditions": [
                { "name": "Hastalık adı", "probability": 0.8, "description": "Hastalık hakkında kısa bilgi" },
                // diğer olasılıklar...
              ],
              "recommendedActions": ["Öneri 1", "Öneri 2", ...],
              "disclaimer": "Tıbbi uyarı metni"
            }
            NOT: Teşhis koymadığını, sadece olası durumlar hakkında bilgi verdiğini ve mutlaka bir doktora danışılması gerektiğini belirt.
            Sadece JSON döndür, başka açıklama yapma.`
          },
          {
            role: 'user',
            content: `Semptomlarım: ${symptoms}`
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const result = response.data.choices[0].message.content;
    console.log('API yanıtı alındı:', result.substring(0, 100) + '...');
    // Parse the JSON response
    return JSON.parse(result);
  } catch (error) {
    console.error('OpenAI API hatası detayı:', error);
    if (axios.isAxiosError(error)) {
      console.error('API yanıt detayı:', error.response?.data);
      console.error('API durum kodu:', error.response?.status);
      
      if (error.response?.status === 401) {
        throw new Error('API anahtarı geçersiz veya eksik. Lütfen API anahtarınızı kontrol edin.');
      } else if (error.response?.status === 429) {
        throw new Error('API kullanım limiti aşıldı. Lütfen daha sonra tekrar deneyin.');
      } else {
        throw new Error(`API hatası: ${error.response?.status} - ${error.message}`);
      }
    }
    throw new Error('Semptom analizi yapılırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
  }
}; 