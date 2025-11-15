import { createClient } from "@/lib/supabase/server"
import { ProjectContainer, Project } from "@/components/project-container"

export default async function ProjectsPage() {
  const supabase = await createClient()

  const { data: projectsRaw, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching projects:", error)
  }

  if (!projectsRaw || projectsRaw.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Няма намерени проекти. Моля, проверете отново по-късно.</p>
      </div>
    )
  }

  // Мапваме данните към интерфейса Project
  const projects: Project[] = projectsRaw.map((p) => ({
    id: p.id,
    title: p.title,
    short_description: p.short_description,
    long_description: p.long_description,
    image_url: p.image_url,
    extra_images: p.extra_images || [],
    created_at: p.created_at,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Нашите проекти</h1>
        <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
          Разгледайте прекрасните инициативи, създадени от нашите посланици. Гласувайте за любимите си проекти!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectContainer key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
