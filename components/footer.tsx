import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">ITPG Ambassadors</h3>
            <p className="text-sm text-muted-foreground">
              Промотиране на европейски ценности и международно сътрудничество чрез инициативи, водени от студенти.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/ambassadors" className="text-muted-foreground hover:text-primary">
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
            <h3 className="mb-4 text-lg font-semibold">Контакт</h3>
            <p className="text-sm text-muted-foreground">
              Instituto Técnico Profissional de Gestão
              <br />
              ambassadors@itpg.edu
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ITPG Ambassadors. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  )
}
