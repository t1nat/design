"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image  from 'next/image'

const COLORS = {
  deepTwilight: '#000E50',   // Background
  brightAmber: '#FFD001',    // Text color
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <nav style={{ backgroundColor: COLORS.deepTwilight }} className="shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
{/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* ТУК ПОСТАВЯШ НОВАТА СНИМКА ВМЕСТО ЖЪЛТИЯ КВАДРАТ */}
        <Image
          src="/Favicon WHT.svg" // <- Промени на името на твоя файл
          alt="Trak-a-trak Icon"
          width={40} // Задава същата ширина като жълтия квадрат (w-10)
          height={40} // Задава същата височина като жълтия квадрат (h-10)
          className="rounded-lg" // Запазва заоблените ъгли (ако снимката няма прозрачен фон)
        />
        {/* Край на променената секция за иконата */}
            <span className="text-xl font-bold" style={{ color: COLORS.brightAmber }}>
              Trak-a-trak
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: COLORS.brightAmber,
                  opacity: pathname === link.href ? 1 : 0.7,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: COLORS.brightAmber }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-colors"
                  style={{
                    color: COLORS.brightAmber,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
