// /app/register/page.tsx

"use client"

import { useSearchParams } from 'next/navigation'
import Roadmap from '@/components/roadmap' 

const COLORS = {
  deepTwilight: '#000E50', 
  brightAmber: '#FFD001', 
  brightLavender: '#CC8DE1', 
  white: '#FEFFFE',     
};

// 🚨 КОРЕКЦИЯ: ФУНКЦИЯТА ТРЯБВА ДА Е ДЕФИНИРАНА ТУК, ПРЕДИ КОМПОНЕНТА RegisterPage
const formatStageName = (stage: string | null): string => {
  if (!stage) {
    return 'Няма избран етап';
  }

  // Приемаме, че stage ще бъде в долния регистър (напр. 'stage1', 'stage2')
  switch (stage.toLowerCase()) {
    case 'stage1':
    case 'етап 1': 
      return ' Етап 1'; // Използвам пълното име от image_854840.png
    case 'stage2':
    case 'етап 2':
      return ' Етап 2'; // Използвам пълното име от image_854840.png
    case 'stage3':
    case 'етап 3':
      return ' Етап 3'; // Използвам пълното име от image_854840.png
    default:
      // Връща оригиналната стойност, ако не е разпозната
      return stage.toUpperCase();
  }
};


export default function RegisterPage() {
  const searchParams = useSearchParams();
  const selectedStage = searchParams.get('stage');
  
  // ✅ formatStageName ВЕЧЕ Е ДОСТЪПНА
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
             {/* ✅ КОРЕКЦИЯ: Използваме span с font-extrabold вместо Markdown ** */}
             <span className="font-extrabold" style={{ color: COLORS.white }}>
                 {displayedStage}
             </span>
        </p>

        {/* 🗺️ Компонентът с интерактивната пътна карта */}
        <Roadmap selectedStageName={displayedStage} />

      </div>
    </div>
  )
}