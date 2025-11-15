"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}


export default function HomePage() {
  const stats = [
    { number: "15", label: "Горди посланици" },
    { number: "х", label: "Държави партньори" },
    { number: "1", label: "Завършени проекти" },
    { number: "500+", label: "Ангажирани ученици" },
  ]

  const features = [
    { icon: <Users className="h-6 w-6 text-blue-500" />, title: "Обмяна на знания", description: "Връзка с ученици от цяла Европа. Обогатяване на културните знания." },
    { icon: <GraduationCap className="h-6 w-6 text-blue-500" />, title: "Образователни проекти", description: "Инициативи за съвместно обучение в различни държави." },
    { icon: <Lightbulb className="h-6 w-6 text-blue-500" />, title: "Иновации", description: "Цифрови решения и креативни подходи към предизвикателствата." },
    { icon: <Award className="h-6 w-6 text-blue-500" />, title: "Устойчиво развитие", description: "Насърчаване на зелени практики и действия за климата. Разпространяване на идеи." },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans">
      
      {/* Hero Section */}
      <motion.section
        className="py-28 mx-4 rounded-3xl flex flex-col items-center text-center shadow-xl bg-white backdrop-blur-sm border border-neutral-200"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-4">
          ITPG Ambassadors
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl">
         Посланици на ПГКМКС „Акад. Благовест Сендов" в програмата „Училища – посланици на Европейския парламент"
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-500 text-white rounded-2xl hover:bg-blue-400 transition">
            <Link href="/projects">Виж проекти</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-500 rounded-2xl hover:bg-blue-50 transition">
            <Link href="/ambassadors">Запознай се с нашия екип</Link>
          </Button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition bg-white border border-neutral-200 backdrop-blur-sm"
              variants={fadeUp}
            >
              <div className="text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="py-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 text-center" variants={staggerContainer}>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" variants={fadeUp}>Какво правим?</motion.h2>
            <motion.p className="text-neutral-700 max-w-xl mx-auto" variants={fadeUp}>Нашата програма се фокусира върху четири ключови области на развитие на студентите</motion.p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="rounded-3xl shadow-xl hover:shadow-2xl transition border border-neutral-200 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 text-center rounded-3xl mx-4 shadow-xl border border-neutral-200 backdrop-blur-sm bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Гласувай за любим проект</h2>
        <p className="mb-8 text-neutral-700 max-w-2xl mx-auto">Помогнете ни да признаем изключителните постижения на студентите, като гласувате за най-добрите проекти</p>
        <Button asChild size="lg" className="bg-blue-500 text-white rounded-2xl hover:bg-blue-400 transition">
          <Link href="/projects">Гласувай сега</Link>
        </Button>
      </motion.section>
    </div>
  )
}
