"use client" // Needed for Framer Motion and useState

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion" // Import motion for animations
// import Image from 'next/image' // Note: Image component should be imported for proper asset handling

// Define the colors used in the design
const COLORS = {
  deepTwilight: '#000E50', // Dark Blue
  brightAmber: '#FFD001', // Bright Yellow
  brightLavender: '#CC8DE1', // Lavender Accent
  white: '#FEFFFE',       // White Text
}

// Framer Motion variants for the pop-up animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.2,   // Delay before the first child starts
    },
  },
}

export default function ProjectsPage() {
  const projectImages = [
    { 
        id: 1, 
        src: "/mascot-drums (1).svg", 
        alt: "Mascot Drums", 
        title: "Етап 1 (5-7 г.)",
        description: "Развитие на основни моторни умения, координация, първи стъпки в логиката, звука и ритъма." 
    },
    { 
        id: 2, 
        src: "/mascot-piano (1).svg", 
        alt: "Mascot Piano", 
        title: "Етап 2 (8-10 г.)",
        description: "Създаване на по-сложни конструкции, първи алгоритми, основи на инженерното мислене, музикални модели." 
    },
    { 
        id: 3, 
        src: "/mascot-gaida (1).svg", 
        alt: "Mascot Gaida", 
        title: "Етап 3 (11-12 г.)",
        description: "Реални инженерни проекти, по-сложни механизми, елементи на звукотехника и автоматизация." 
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-sans py-12"
      style={{ backgroundColor: COLORS.deepTwilight }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title - Increased from text-4xl to text-5xl */}
        <h1 className="mb-4 text-5xl font-bold" style={{ color: COLORS.white }}>
          Нашите проекти
        </h1>

        {/* Description - Increased from text-lg to text-xl */}
        <p className="mx-auto max-w-2xl text-balance text-xl mb-10" style={{ color: COLORS.white, opacity: 0.8 }}>
          Разгледайте някои от иновативните проекти, върху които работят нашите екипи.
        </p>

        {/* Project Image Containers Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projectImages.map((image) => (
            <div key={image.id}>
                <motion.div
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg border-2 flex items-center justify-center"
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
                    {/* Project Title - Increased from text-xl to text-2xl */}
                    <h3 className="text-2xl font-semibold" style={{ color: COLORS.white }}>
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
                
                {/* Stage Description - Increased from text-sm to text-base */}
                <p 
                    className="mt-2 text-base px-1 font-medium" 
                    style={{ color: COLORS.brightAmber }}
                >
                    {image.description}
                </p>

            </div>
          ))}
        </motion.div>

        {/* ЗАПИШИ СЕ Button */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            // size="lg" already handles large size, but ensure text is large if needed
            className="rounded-2xl transition hover:opacity-90 text-xl px-8 py-4" // Explicitly setting text size and padding
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
        </div>
      </div>
    </div>
  )
}