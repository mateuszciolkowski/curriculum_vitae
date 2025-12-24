export const TECHNOLOGIES = [
  { name: "React", className: "devicon-react-original colored" },
  { name: "Django", className: "devicon-django-plain colored" },
  { name: "Node.js", className: "devicon-nodejs-plain colored" },
  { name: "TS", className: "devicon-typescript-plain colored" },
  { name: "JS", className: "devicon-javascript-plain colored" },
  { name: "Python", className: "devicon-python-plain" },
  { name: "Postgres", className: "devicon-postgresql-plain colored" },
  { name: "SQL Ser", className: "devicon-microsoftsqlserver-plain colored" },
  { name: "Docker", className: "devicon-docker-plain colored" },
  { name: "Java", className: "devicon-java-plain colored" },
  { name: "Redis", className: "devicon-redis-plain colored" },
  { name: "Git", className: "devicon-git-plain colored" },
  { name: "HTML", className: "devicon-html5-plain colored" },
  { name: "CSS", className: "devicon-css3-plain colored" },
  { name: "Tailwind", className: "devicon-tailwindcss-plain colored" },
  { name: "MongoDB", className: "devicon-mongodb-plain colored" },
] as const;

export type Technology = (typeof TECHNOLOGIES)[number];
