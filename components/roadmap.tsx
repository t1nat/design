// /components/Roadmap.tsx

"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// 🚨 ИМПОРТ ЗА NEXT.JS НАВИГАЦИЯ
import { useRouter } from 'next/navigation'; 
import { Button } from "@/components/ui/button"
// ⚠️ Предполагам, че пътят за Input е коригиран до "@/components/ui/input" във вашето реално приложение
import { Input } from "@/components/input" 
import { Checkbox } from "@/components/ui/checkbox" 
import { Label } from "@/components/ui/label"
import Link from 'next/link'; // 🚨 ИМПОРТ ЗА LINK


// Цветове (трябва да се дефинират или импортират, за да работят навсякъде)
const COLORS = {
  deepTwilight: '#000E50', 
  brightAmber: '#FFD001', 
  brightLavender: '#CC8DE1', 
  white: '#FEFFFE',
};

// 🚨 НОВИ СТЪПКИ
const STEPS = [
  { id: 1, title: "Данни за детето", description: "Въведете име, фамилия, възраст и училище." },
  { id: 2, title: "Контактна информация", description: "Информация за контакт с родител/настойник." },
  { id: 3, title: "Избор на график", description: "Изберете удобни часове за посещение." },
  { id: 4, title: "Допълнителна информация", description: "Медицински особености, разрешения и начин на плащане." },
];

interface RoadmapProps {
  initialStep?: number;
  selectedStageName?: string; 
}

// стр. успешна регистрация 
const RegistrationSuccess = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-12 rounded-xl shadow-2xl space-y-8"
        style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            border: `2px solid ${COLORS.brightLavender}`,
            color: COLORS.white
        }}
    >
        <h2 className="text-4xl font-extrabold" style={{ color: COLORS.brightAmber }}>
            Успешна регистрация!
        </h2>
        <p className="text-xl">
            Вие успешно записахте своето дете! <br />
            Очаквайте повече информация на Вашия имейл или телефонен номер.
        </p>

        {/* Използваме Link за пренасочване към началната страница */}
        <Link href="/" passHref>
            <Button 
                style={{ 
                    backgroundColor: COLORS.brightLavender, 
                    color: COLORS.deepTwilight, 
                    fontWeight: 800,
                    marginTop: '2rem'
                }}
                className="rounded-lg px-8 py-4 text-lg transition hover:opacity-80"
            >
                Начална страница
            </Button>
        </Link>
    </motion.div>
);


export default function Roadmap({ initialStep = 1 }: RoadmapProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const router = useRouter(); 

    const goToNextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
        console.log("Данните са изпратени.");
        setIsRegistrationComplete(true); 
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepCompleted = (stepId: number) => stepId < currentStep;

  const renderStepContent = () => {
    switch (currentStep) {
        case 1:
            return (
                <div className="space-y-4">
                    <Input placeholder="Име и фамилия на детето" />
                    <Input type="number" placeholder="Възраст" />
                    <Input placeholder="Училище" />
                </div>
            );
        case 2:
            return (
                <div className="space-y-4">
                    <Input placeholder="Име и фамилия на родител/настойник" />
                    <Input type="tel" placeholder="Телефон" />
                    <Input type="email" placeholder="Email" />
                </div>
            );
        case 3:
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold" style={{ color: COLORS.brightAmber }}>График</h3>
                    <Input placeholder="Желана група (напр. вторник, 16:00)" />
                </div>
            );
       /** */ case 4:
            return (
             <div className="space-y-6">
                    <Input placeholder="Медицински особености (ако има)" />
                   {/**  <div className="flex items-center space-x-3">
                        <Checkbox id="photos" />
                        <Label htmlFor="photos" style={{ color: COLORS.white, opacity: 0.9 }}>
                            Давам разрешение за участие на детето ми във фото/видео материал.
                        </Label>
                    </div> */}
                    <h3 className="text-xl font-semibold mt-4" style={{ color: COLORS.brightAmber }}>Начин на плащане</h3>
                    <Input placeholder="Метод на плащане (напр. по банков път, в брой)" />
                </div>
            );
        default:
            return null;
    }
  };


  if (isRegistrationComplete) {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 flex justify-center items-center">
            <RegistrationSuccess />
        </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
        <div className="flex justify-between items-start mb-10 relative">
            <motion.div
                className="absolute top-4 h-1 rounded-full bg-gray-600"
                style={{ left: '5%', right: '5%', backgroundColor: '#384050' }}
            />
            <motion.div
                className="absolute top-4 h-1 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 90}%` }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ left: '5%', backgroundColor: COLORS.brightLavender }}
            />
            {STEPS.map((step, index) => (
                <motion.div key={step.id} className="flex flex-col items-center z-10 w-1/4">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-colors duration-300 ${isStepCompleted(step.id) ? 'bg-green-500' : 'bg-gray-700'}`}
                        style={{
                            backgroundColor: step.id === currentStep ? COLORS.brightLavender : isStepCompleted(step.id) ? COLORS.brightAmber : '#384050',
                            color: step.id === currentStep ? COLORS.deepTwilight : isStepCompleted(step.id) ? COLORS.deepTwilight : COLORS.white,
                            boxShadow: step.id === currentStep ? `0 0 0 4px ${COLORS.brightLavender}` : 'none'
                        }}
                    >
                        {isStepCompleted(step.id) ? '✓' : step.id}
                    </div>
                    <p className={`mt-2 text-center text-sm font-semibold ${step.id === currentStep ? 'font-extrabold' : 'text-gray-400'}`} style={{ color: step.id === currentStep ? COLORS.white : 'rgba(255, 255, 255, 0.6)' }}>
                        {step.title}
                    </p>
                </motion.div>
            ))}
        </div>

        <motion.div
            key={currentStep} 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-6 rounded-lg shadow-2xl"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${COLORS.brightLavender}` }}
        >
            <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.brightLavender }}>
                {STEPS[currentStep - 1].title}
            </h2>
            <p className="text-lg mb-6" style={{ color: COLORS.white, opacity: 0.8 }}>
                {STEPS[currentStep - 1].description}
            </p>
            {renderStepContent()}
        </motion.div>

        <div className="flex justify-between mt-8">
            <Button
                onClick={goToPrevStep}
                disabled={currentStep === 1}
                style={{ 
                    backgroundColor: COLORS.deepTwilight, 
                    color: COLORS.white, 
                    borderColor: COLORS.brightLavender, 
                    borderWidth: '1px' 
                }}
                className="rounded-lg px-6 py-3 transition hover:opacity-80 disabled:opacity-50"
            >
                ← Назад
            </Button>
            <Button
                onClick={goToNextStep}
                style={{ 
                    backgroundColor: COLORS.brightLavender, 
                    color: COLORS.deepTwilight, 
                    fontWeight: 800 
                }}
                className="rounded-lg px-6 py-3 transition hover:opacity-80 disabled:opacity-50"
            >
                {currentStep === STEPS.length ? 'Завърши Записването' : 'Напред →'}
            </Button>
        </div>
    </div>
  );
}