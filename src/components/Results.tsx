import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SymptomAnalysisResult } from '../types';

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from location state
  const { possibleConditions, recommendedActions, disclaimer, symptoms } = 
    location.state as SymptomAnalysisResult || {
      possibleConditions: [], 
      recommendedActions: [], 
      disclaimer: "Veri bulunamadı", 
      symptoms: ""
    };

  // If no data, redirect to symptom checker
  React.useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  return (
    <section className="py-12 bg-background-light min-h-screen">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Semptom Analizi Sonuçları
          </h1>
          <p className="text-lg text-slate-600">
            <span className="font-medium">Belirtilen semptomlar:</span> {symptoms}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Olası Rahatsızlıklar</h2>
              <div className="space-y-6">
                {possibleConditions.map((condition, index) => (
                  <div key={index} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-slate-800">{condition.name}</h3>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round(condition.probability * 100)}% olasılık
                      </div>
                    </div>
                    <p className="text-slate-600">{condition.description}</p>
                    
                    <div className="mt-3 w-full bg-slate-100 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${condition.probability * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Önerilen Eylemler</h2>
              <ul className="space-y-3">
                {recommendedActions.map((action, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    {disclaimer}
                  </p>
                </div>
              </div>
            </div>

            <button 
              className="btn-primary w-full"
              onClick={() => navigate('/')}
            >
              Yeni Semptom Kontrolü
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 