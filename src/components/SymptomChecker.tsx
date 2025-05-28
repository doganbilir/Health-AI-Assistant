import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSymptomAnalysis } from '../services/openaiService';
import { DiagnosisResponse } from '../types';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const commonSymptoms = [
    'Ateş', 'Öksürük', 'Baş ağrısı', 'Karın ağrısı', 'Yorgunluk',
    'Mide bulantısı', 'Baş dönmesi', 'Nefes darlığı', 'Eklem ağrısı', 'İshal'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptoms.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Get analysis from OpenAI
      const analysis: DiagnosisResponse = await getSymptomAnalysis(symptoms);
      
      // Navigate to results page with the data
      navigate('/results', { 
        state: { 
          ...analysis,
          symptoms 
        } 
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu, lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSymptomClick = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.replace(new RegExp(`${symptom},?\\s*`), '').trim());
    } else {
      setSymptoms(symptoms ? `${symptoms}, ${symptom}` : symptom);
    }
  };

  return (
    <section id="symptom-checker" className="py-20 bg-background-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Semptomlarınızı Kontrol Edin
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Semptomlarınızı yazın, yapay zeka asistanımız size olası hastalıklar ve tedavi önerileri sunsun.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="symptoms" className="block text-slate-700 font-medium mb-2">
                  Semptomlarınız
                </label>
                <textarea
                  id="symptoms"
                  className="input min-h-[120px]"
                  placeholder="Örn: Ateş, öksürük, baş ağrısı..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-slate-600 mb-3">Yaygın semptomlar:</p>
                <div className="flex flex-wrap gap-2">
                  {commonSymptoms.map((symptom, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                        symptoms.includes(symptom) 
                          ? 'bg-primary text-white' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      onClick={() => handleSymptomClick(symptom)}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting || !symptoms.trim()}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analiz Ediliyor...
                  </>
                ) : (
                  'Semptomları Analiz Et'
                )}
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Bu analiz sadece bilgilendirme amaçlıdır ve tıbbi teşhis yerine geçmez. 
              Sağlık sorunlarınız için lütfen bir sağlık kuruluşuna başvurun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker; 