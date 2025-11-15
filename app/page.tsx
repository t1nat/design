import { Button } from "@/components/ui/button"
// Removed Card, CardContent imports
import { Users, GraduationCap, Lightbulb, Award } from "lucide-react"

const COLORS = {
  deepTwilight: "#000E50",
  brightAmber: "#FFD001",
  brightLavender: "#CC8DE1",
  white: "#FEFFFE",
}

export default function HomePage() {
  const stats = [
    { number: "X ", label: "Горди посланици" },
    { number: "х", label: "Държави партньори" },
    { number: "1", label: "Завършени проекти" },
    { number: "500+", label: "Ангажирани ученици" },
  ]

  const features = [
    { icon: <Users className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Обмяна на знания", description: "Връзка с ученици от цяла Европа. Обогатяване на културните знания." },
    { icon: <GraduationCap className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Образователни проекти", description: "Инициативи за съвместно обучение в различни държави." },
    { icon: <Lightbulb className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Иновации", description: "Цифрови решения и креативни подходи към предизвикателствата." },
    { icon: <Award className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Устойчиво развитие", description: "Насърчаване на зелени практики и действия за климата. Разпространяване на идеи." },
  ]

  return (
    <div
      className="flex flex-col min-h-screen font-sans bg-repeat"
      style={{
        backgroundImage: "url('/pattern_02.png')", 
        backgroundRepeat: "repeat",
        backgroundColor: COLORS.deepTwilight,
        backgroundPosition: "0 0",
        backgroundSize: "300px 300px", 
      }}
    >
      {/* HERO */}
      <section
        className="py-28 mx-4 my-8 rounded-3xl flex flex-col items-center text-center"
        style={{ backgroundColor: "rgba(0, 14, 80, 0.9)" }} 
      >
        <h1
          className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 uppercase"
          style={{ color: COLORS.brightAmber }}
        >
          ТРАК-А-ТРАК
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl" style={{ color: COLORS.white }}>
          Разкрий света на роботиката в "Трак-а-трак". Задръж интереса на своето дете.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-2xl transition hover:opacity-90"
            style={{ backgroundColor: COLORS.brightLavender }}
          >
            <a href="/projects" style={{ color: COLORS.deepTwilight, fontWeight: 800 }}>
              ЗАПИШИ СЕ
            </a>
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
              КАКВО ПРАВИМ?
            </h2>

            <p className="max-w-xl mx-auto" style={{ color: COLORS.white, opacity: 0.9 }}>
              Нашата програма се фокусира върху четири ключови области на развитие на студентите
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-3xl"
                style={{ 
                    backgroundColor: "rgba(254, 255, 254, 0.1)",
                    border: `1px solid ${COLORS.brightLavender}`,
                }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition duration-300"
                  style={{ backgroundColor: COLORS.brightLavender, opacity: 0.3 }}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.white }}>
                  {feature.title}
                </h3>

                <p className="text-sm" style={{ color: COLORS.white, opacity: 0.8 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The CTA section that was here is now removed */}

      <div className="pt-8" />
    </div>
  )
}