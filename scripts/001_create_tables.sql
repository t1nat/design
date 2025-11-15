-- Create ambassadors table
create table if not exists public.ambassadors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text,
  image_url text,
  year text,
  created_at timestamp with time zone default now()
);

-- Create teachers table
create table if not exists public.teachers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  subject text,
  bio text,
  image_url text,
  created_at timestamp with time zone default now()
);

-- Create projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  image_url text,
  year text,
  created_at timestamp with time zone default now()
);

-- Create votes table
create table if not exists public.votes (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  voter_ip text not null,
  created_at timestamp with time zone default now(),
  unique(project_id, voter_ip)
);

-- Enable Row Level Security
alter table public.ambassadors enable row level security;
alter table public.teachers enable row level security;
alter table public.projects enable row level security;
alter table public.votes enable row level security;

-- Public read access for ambassadors, teachers, and projects
create policy "ambassadors_select_all"
  on public.ambassadors for select
  using (true);

create policy "teachers_select_all"
  on public.teachers for select
  using (true);

create policy "projects_select_all"
  on public.projects for select
  using (true);

-- Anyone can vote (insert), but can only vote once per project per IP
create policy "votes_insert_all"
  on public.votes for insert
  with check (true);

-- Anyone can view vote counts
create policy "votes_select_all"
  on public.votes for select
  using (true);
