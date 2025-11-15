'use client'

import { useState } from "react"
// Интерфейсът Project е същият
export interface Project {
  id: number
  title: string
  short_description: string
  long_description: string
  image_url: string
  extra_images: string[]
}

interface ProjectContainerProps {
  project: Project
}

export function ProjectContainer({ project }: ProjectContainerProps) {
  const [voted, setVoted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // Състояние за управление на разширяването/свиването на описанието
  const [expanded, setExpanded] = useState(false) 

  async function handleVote() {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: project.id }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Something went wrong")
      } else {
        setVoted(true)
      }
    } catch (err) {
      setError("Failed to vote. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    // Използваме един контейнер
    <div className="relative group border border-gray-200 rounded-2xl p-4 shadow-md bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:via-blue-50 hover:to-white">
      {/* Glow hover effect */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-20 bg-blue-200 blur-3xl transition-opacity duration-500 pointer-events-none"></div>

      {/* Project Image */}
      {/* Премахваме onClick, ако не искаш кликването върху снимката да разширява */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
          {/* Краткото описание винаги се показва */}
          <p className="text-sm text-gray-600">{project.short_description}</p>
        </div>

        {/* Vote Button */}
        <button
          onClick={handleVote}
          disabled={voted || loading}
          className={`ml-4 px-3 py-1 rounded-full text-white text-sm font-semibold transition-all duration-500
            ${voted ? "bg-green-500 scale-105 shadow-md" : "bg-blue-500 hover:bg-blue-600 hover:scale-105"}
            ${loading ? "opacity-70 cursor-wait" : ""}`}
        >
          {voted ? "Voted ✅" : loading ? "Voting..." : "Vote"}
        </button>
      </div>

      {/* Long Description (показва се само ако expanded е true) */}
      {expanded && (
        <div className="mt-4 text-gray-700 whitespace-pre-line animate-fadeIn border-t border-gray-100 pt-3">
          {project.long_description}
        </div>
      )}

      {/* Toggle button - за превключване на long_description */}
      <div className="mt-3 text-right">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-500 hover:underline font-medium"
        >
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-xs text-red-500 animate-pulse">{error}</p>
      )}
    </div>
  )
}