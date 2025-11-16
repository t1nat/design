// /app/register/page.tsx

"use client" // Този 'use client' се запазва за RegisterContent

import React, { Suspense } from 'react'; // 🚨 Добавяме Suspense
import { useSearchParams } from 'next/navigation';
import Roadmap from '@/components/roadmap'; 

const COLORS = {
  deepTwilight: '#000E50', 
  brightAmber: '#FFD001', 
  brightLavender: '#CC8DE1', 
  white: '#FEFFFE',     
};

// 🚨 ФУНКЦИЯТА formatStageName се запазва
const formatStageName = (stage: string | null): string => {
  if (!stage) {
    return 'Няма избран етап';
  }

  switch (stage.toLowerCase()) {
    case 'stage1':
    case 'етап 1': 
      return ' Етап 1';
    case 'stage2':
    case 'етап 2':
      return ' Етап 2';
    case 'stage3':
    case 'етап 3':
      return ' Етап 3';
    default:
      return stage.toUpperCase();
  }
};

// ******************************************************
// 1. НОВ КЛИЕНТСКИ КОМПОНЕНТ, който използва useSearchParams
// ******************************************************
function RegisterContent() {
  const searchParams = useSearchParams();
  const selectedStage = searchParams.get('stage');
  
  const displayedStage = formatStageName(selectedStage);
  
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start font-sans py-12"
      style={{ backgroundColor: COLORS.deepTwilight }}
    >
      <div className="container mx-auto px-4 text-center">
        
        <h1 className="mb-4 text-5xl font-bold" style={{ color: COLORS.white }}>
          Форма за записване в Trak-a-trak
        </h1>

        <p className="mx-auto max-w-2xl text-balance text-xl mb-10" style={{ color: COLORS.brightLavender, opacity: 0.9 }}>
          Записвате се за: 
             <span className="font-extrabold" style={{ color: COLORS.white }}>
                 {displayedStage}
             </span>
        </p>

        <Roadmap selectedStageName={displayedStage} />

      </div>
    </div>
  )
}

// ******************************************************
// 2. ГЛАВЕН ЕКСПОРТ (Server Component) - Обвива в Suspense
// ******************************************************
export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: COLORS.deepTwilight, color: COLORS.white, fontSize: '2rem', height: '100vh' }}>
                Зареждане на формата...
            </div>
        }>
            <RegisterContent />
        </Suspense>
    );
}