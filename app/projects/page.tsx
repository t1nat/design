"use client"

import Link from "next/link"
// Този импорт е коментиран, тъй като не знам дали имате достъп до пътя
// За да работи, трябва да имате компонент Button на този път: "@/components/ui/button"
// import { Button } from "@/components/ui/button" 
import { motion } from "framer-motion"

// Дефиниция на цветовете, използвани в компонента
const COLORS = {
  deepTwilight: '#000E50', // Тъмно синьо (Deep Blue) - Основен фон
  brightAmber: '#FFD001', // Ярко жълто (Bright Yellow) - Акцент
  brightLavender: '#CC8DE1', // Ярка лавандула (Lavender Accent) - Рамки и интерактивни елементи
  white: '#FEFFFE',       // Бял текст
}

// Framer Motion вариант за плавно появяване
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Framer Motion вариант за контейнера с "stagger" ефект
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Забавяне между появяването на децата елементи
      delayChildren: 0.2, // Начално забавяне
    },
  },
}


export default function ProjectsPage() {
  const projectImages = [
    { 
        id: 1, 
        src: "/mascot-drums (1).svg", 
        alt: "Mascot Drums", 
        title: "УОЛ-И (5-7 г.)",
        description: "Развитие на основни моторни умения, координация, първи стъпки в логиката, звука и ритъма.",
        stage: "stage1" // Параметър, който ще изпратим
    },
    { 
        id: 2, 
        src: "/mascot-piano (1).svg", 
        alt: "Mascot Piano", 
        title: "Андроиди (8-10 г.)",
        description: "Създаване на по-сложни конструкции, първи алгоритми, основи на инженерното мислене, музикални модели.",
        stage: "stage2" // Параметър, който ще изпратим
    },
    { 
        id: 3, 
        src: "/mascot-gaida (1).svg", 
        alt: "Mascot Gaida", 
        title: "Трансформъри (11-13 г.)",
        description: "Реални инженерни проекти, по-сложни механизми, елементи на звукотехника и автоматизация.",
        stage: "stage3" // Параметър, който ще изпратим
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-sans py-12"
            style={{
        // Използваме предоставения фон
        backgroundImage: "url('/pattern_02.png')", 
        backgroundRepeat: "repeat",
       backgroundColor: `rgba(0, 14, 80, 0.5)`, 
        backgroundPosition: "0 0",
        backgroundSize: "300px 300px", 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold" style={{ color: COLORS.white }}>
          Запиши своето дете
        </h1>

        <p className="mx-auto max-w-2xl text-balance text-xl mb-10" style={{ color: COLORS.white, opacity: 0.8 }}>
          И открий силата на оригиналността.
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projectImages.map((image) => (
            <div key={image.id}>
                {/* 👈 ОБВИТО С <Link> КОЙТО ВОДИ КЪМ /register С ПАРАМЕТЪР */}
                <Link href={`/register?stage=${image.stage}`} passHref>
                    <motion.div
                      // Добавена анимация при hover, за да изглежда като интерактивен бутон
                      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${COLORS.brightLavender}` }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative aspect-video rounded-lg overflow-hidden shadow-lg border-2 cursor-pointer"
                      style={{ borderColor: COLORS.brightLavender }}
                      variants={fadeIn}
                    >
                      {/* Note: Recommend replacing <img> with <Image> for stability */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Title Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <h3 className="text-2xl font-semibold" style={{ color: COLORS.white }}>
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                </Link>
                
                {/* Stage Description */}
                <p 
                    className="mt-2 text-base px-1 font-medium" 
                    style={{ color: COLORS.brightAmber }}
                >
                    {image.description}
                </p>

            </div>
          ))}
        </motion.div>

        {/* ЗАПИШИ СЕ Button (Може да се премахне, ако всяка кутия е бутон) */}
       {/** <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            className="rounded-2xl transition hover:opacity-90 text-xl px-8 py-4"
            style={{
              backgroundColor: COLORS.brightLavender,
              color: COLORS.deepTwilight,
              fontWeight: 800
            }}
          >
            <Link href="/register">
              ЗАПИШИ СЕ
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  )
}