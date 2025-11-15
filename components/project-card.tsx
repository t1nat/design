"use client"

import { useState } from "react"
import Image from "next/image"

export interface Project {
  id: string
  title: string
  short_description: string
  long_description: string | null
  image_url: string | null
  extra_images?: string[]
}

interface ProjectContainerProps {
  project: Project
}

export function ProjectContainer({ project }: ProjectContainerProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Основна карта */}
      <div
        className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
        onClick={() => setIsPreviewOpen(true)}
      >
        {project.image_url && (
          <div className="relative h-64 w-full">
            <Image src={project.image_url} alt={project.title} fill className="object-cover" />
          </div>
        )}
        <div className="p-4 bg-white">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-muted-foreground">{project.short_description}</p>
        </div>
      </div>

      {/* Лек overlay preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white/95 rounded-lg max-w-2xl w-full shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-lg"
              onClick={() => setIsPreviewOpen(false)}
            >
              ✕
            </button>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.long_description && <p className="text-sm">{project.long_description}</p>}
              {project.extra_images && project.extra_images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {project.extra_images.map((img, idx) => (
                    <div key={idx} className="relative h-32 w-full">
                      <Image src={img} alt={`${project.title} ${idx}`} fill className="object-cover rounded" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
