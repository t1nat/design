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
    { icon: <Users className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Технологична грамотност", description: "Децата овладяват основни дигитални и инженерни умения в роботиката." },
    { icon: <GraduationCap className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Любознателност", description: "Децата изследват връзката между технология и музика, свързвайки звука с роботите." },
    { icon: <Lightbulb className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Работа в екип", description: "Работата в екип научава децата още по-бързо как да програмират и сглобяват инструменти." },
    { icon: <Award className="h-6 w-6" style={{ color: COLORS.brightAmber }} />, title: "Креативност", description: "Насърчаваме децата да мислят 'извън картинката', като ги провокираме със задачи." },
  ]

  return (
    <div
      className="relative flex flex-col min-h-screen font-sans bg-repeat"
      style={{
        backgroundImage: "url('/pattern_02.png')",
        backgroundRepeat: "repeat",
        backgroundColor: COLORS.deepTwilight,
        backgroundPosition: "0 0",
        backgroundSize: "300px 300px", 
      }}
    >
      {/* Overlay for background image opacity (Adjust the 0.5 value for desired lightness) */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundColor: `rgba(0, 14, 80, 0.5)`, 
        }}
      ></div>

      {/* HERO content */}
      <section
        className="relative z-10 py-10 mt-24 mb-16 flex flex-col items-center text-center"
      >
        <h1
          className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 uppercase"
          style={{ color: COLORS.brightAmber }}
        >
          ТРАК-А-ТРАК
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl px-4" style={{ color: COLORS.white }}>
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
      <section className="relative z-10 py-5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
              Каква е нашата цел?
            </h2>

            <p className="max-w-xl mx-auto" style={{ color: COLORS.white, opacity: 0.9 }}>
              Нашата школа се цели да провокира интереса на Вашето дете и да развие критичното му мислене.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-3xl"
                style={{ 
                    // Background blue, low opacity (0.2)
                    backgroundColor: `rgba(${parseInt(COLORS.deepTwilight.slice(1, 3), 16)}, ${parseInt(COLORS.deepTwilight.slice(3, 5), 16)}, ${parseInt(COLORS.deepTwilight.slice(5, 7), 16)}, 0.2)`, 
                    border: `1px solid ${COLORS.brightLavender}`,
                }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition duration-300"
                  style={{ backgroundColor: COLORS.brightLavender, opacity: 0.6 }} // UPDATED: Opacity increased from 0.3 to 0.6
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

      <div className="relative z-10 pt-8" />
    </div>
  )
}