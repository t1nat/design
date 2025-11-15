-- Seed ambassadors
insert into public.ambassadors (name, bio, year, image_url) values
  ('Maria Silva', 'Passionate about European culture and international cooperation. Leading projects on sustainability and youth engagement.', '2024', '/placeholder.svg?height=400&width=400'),
  ('João Santos', 'Focused on digital innovation and technology in education. Organizing coding workshops for younger students.', '2024', '/placeholder.svg?height=400&width=400'),
  ('Ana Costa', 'Dedicated to promoting cultural exchange and language learning across European countries.', '2023', '/placeholder.svg?height=400&width=400'),
  ('Pedro Oliveira', 'Working on environmental projects and climate action initiatives within the EU framework.', '2023', '/placeholder.svg?height=400&width=400');

-- Seed teachers
insert into public.teachers (name, subject, bio, image_url) values
  ('Dr. Teresa Rodrigues', 'European Studies', 'Coordinator of the ITPG Ambassadors program with 15 years of experience in international education.', '/placeholder.svg?height=400&width=400'),
  ('Prof. Carlos Mendes', 'History & Politics', 'Specializes in EU history and contemporary European politics. Mentor for student research projects.', '/placeholder.svg?height=400&width=400'),
  ('Dr. Sofia Almeida', 'Languages', 'Multilingual educator promoting language diversity and intercultural communication.', '/placeholder.svg?height=400&width=400');

-- Seed projects
insert into public.projects (title, description, year, image_url) values
  ('Green Campus Initiative', 'A comprehensive sustainability project that reduced school waste by 40% through recycling programs and awareness campaigns. Students collaborated with local environmental organizations.', '2024', '/placeholder.svg?height=600&width=800'),
  ('Digital Bridge Europe', 'Created an online platform connecting students from 8 EU countries for virtual cultural exchanges and collaborative learning projects.', '2024', '/placeholder.svg?height=600&width=800'),
  ('EU Youth Summit', 'Organized a three-day conference bringing together 200 students to discuss youth perspectives on European integration and future challenges.', '2023', '/placeholder.svg?height=600&width=800'),
  ('Cultural Heritage Map', 'Developed an interactive digital map showcasing historical sites and cultural landmarks across Portugal with connections to European history.', '2023', '/placeholder.svg?height=600&width=800'),
  ('Language Exchange Program', 'Established partnerships with schools in France, Germany, and Spain for student language immersion experiences and pen pal programs.', '2023', '/placeholder.svg?height=600&width=800');
