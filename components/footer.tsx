import Link from "next/link"

const COLORS = {
  deepTwilight: '#000E50',   // Основен тъмносин фон
  brightAmber: '#FFD001',    // Жълт/Кехлибарен за акценти и заглавия
  white: '#FEFFFE',          // Бял за основен текст
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50"style={{ backgroundColor: COLORS.deepTwilight, borderColor: COLORS.brightAmber }} 
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold"style={{ color: COLORS.brightAmber }}>Trak-a-trak</h3>
            <p className="text-sm text-muted-foreground">
               МОТО МОТО МОТО            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold"style={{ color: COLORS.brightAmber }}>Бързи връзки</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/ambassadors" className="text-muted-foreground hover:text-primary" style={{ color: '#000e50' }}>
                Посланици
              </Link>
              <Link href="/teachers" className="text-muted-foreground hover:text-primary">
                Учители
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary">
                Проекти
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold"style={{ color: COLORS.brightAmber }}>Контакти</h3>
            <p className="text-sm text-muted-foreground">
              Trak-a-trak
              <br />
              trakatrak@edu.bg
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Trak-a-trak. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}
