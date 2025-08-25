// Interfaz sugerida
export interface TechIcon {
  name: string;
  label: string;
  src: string;
  darkSrc?: string;
  lightSrc?: string;
}

// Ejemplo de objeto para tus iconos:
export const techIcons: TechIcon[] = [
  {
    name: "bash",
    label: "Bash",
    src: "/icons/Bash_dark.svg",
    darkSrc: "/icons/Bash_dark.svg",
    lightSrc: "/icons/Bash_light.svg",
  },
  {
    name: "css",
    label: "CSS",
    src: "/icons/css.svg",
    darkSrc: "/icons/css_old.svg",
  },
  { name: "docker", label: "Docker", src: "/icons/docker.svg" },
  {
    name: "express",
    label: "Express.js",
    src: "/icons/Express.js_dark.svg",
    darkSrc: "/icons/Express.js_dark.svg",
    lightSrc: "/icons/Express.js_light.svg",
  },
  {
    name: "github-copilot",
    label: "GitHub Copilot",
    src: "/icons/GitHub Copilot_dark.svg",
    darkSrc: "/icons/GitHub Copilot_dark.svg",
    lightSrc: "/icons/GitHub Copilot_light.svg",
  },
  {
    name: "github",
    label: "GitHub",
    src: "/icons/GitHub_dark.svg",
    darkSrc: "/icons/GitHub_dark.svg",
    lightSrc: "/icons/GitHub_light.svg",
  },
  { name: "graphql", label: "GraphQL", src: "/icons/graphql.svg" },
  { name: "html5", label: "HTML5", src: "/icons/html5.svg" },
  { name: "javascript", label: "JavaScript", src: "/icons/javascript.svg" },
  { name: "kubernetes", label: "Kubernetes", src: "/icons/kubernetes.svg" },
  { name: "linux", label: "Linux", src: "/icons/linux.svg" },
  {
    name: "markdown",
    label: "Markdown",
    src: "/icons/Markdown_dark.svg",
    darkSrc: "/icons/Markdown_dark.svg",
    lightSrc: "/icons/Markdown_light.svg",
  },
  { name: "mysql", label: "MySQL", src: "/icons/mysql.svg" },
  { name: "nestjs", label: "NestJS", src: "/icons/nestjs.svg" },
  {
    name: "nextjs",
    label: "Next.js",
    src: "/icons/Next.js_wordmark_dark.svg",
    darkSrc: "/icons/Next.js_wordmark_dark.svg",
    lightSrc: "/icons/Next.js_wordmark_light.svg",
  },
  { name: "nodejs", label: "Node.js", src: "/icons/nodejs.svg" },
  { name: "npm", label: "npm", src: "/icons/npm.svg" },
  { name: "postman", label: "Postman", src: "/icons/postman.svg" },
  { name: "oracle", label: "Oracle", src: "/icons/oracle.svg" },
  { name: "postgresql", label: "PostgreSQL", src: "/icons/postgresql.svg" },
  {
    name: "prisma",
    label: "Prisma",
    src: "/icons/Prisma_dark.svg",
    darkSrc: "/icons/Prisma_dark.svg",
    lightSrc: "/icons/Prisma_light.svg",
  },
  {
    name: "react",
    label: "React.js",
    src: "/icons/React_dark.svg",
    darkSrc: "/icons/React_dark.svg",
    lightSrc: "/icons/React_light.svg",
  },
  {
    name: "react",
    label: "React Native",
    src: "/icons/React_light.svg",
    darkSrc: "/icons/React_dark.svg",
    lightSrc: "/icons/React_light.svg",
  },
  { name: "reactquery", label: "React Query", src: "/icons/reactquery.svg" },
  { name: "reactrouter", label: "React Router", src: "/icons/reactrouter.svg" },
  { name: "shadcn", label: "ShadCN", src: "/icons/shadcn-ui_dark.svg" },
  {
    name: "socketio",
    label: "Socket.io",
    src: "/icons/Socket.io_dark.svg",
    darkSrc: "/icons/Socket.io_dark.svg",
    lightSrc: "/icons/Socket.io_light.svg",
  },
  {
    name: "tailwind",
    label: "Tailwind CSS",
    src: "/icons/tailwindcss.svg",
    darkSrc: "/icons/tailwindcss.svg",
    lightSrc: "/icons/tailwindcss.svg",
  },
  { name: "typeorm", label: "TypeORM", src: "/icons/typeorm.svg" },
  { name: "typescript", label: "TypeScript", src: "/icons/typescript.svg" },
  { name: "ubuntu", label: "Ubuntu", src: "/icons/ubuntu.svg" },
  { name: "vscode", label: "VSCode", src: "/icons/vscode.svg" },
  { name: "windows", label: "Windows", src: "/icons/windows.svg" },
];
