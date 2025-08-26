// Interfaz sugerida
export interface TechIcon {
  name: string;
  label: string;
  src: string;
  darkSrc?: string;
  lightSrc?: string;
  hue?: string;
}

// Ejemplo de objeto para tus iconos:
export const techIcons: TechIcon[] = [
  {
    name: "bash",
    label: "Bash",
    src: "/icons/Bash_dark.svg",
    darkSrc: "/icons/Bash_dark.svg",
    lightSrc: "/icons/Bash_light.svg",
    hue: "hue-rotate-30",
  },
  {
    name: "css",
    label: "CSS",
    src: "/icons/css.svg",
    darkSrc: "/icons/css_old.svg",
    hue: "",
  },
  {
    name: "docker",
    label: "Docker",
    src: "/icons/docker.svg",
    hue: "hue-rotate-60",
  },
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
  {
    name: "graphql",
    label: "GraphQL",
    src: "/icons/graphql.svg",
    hue: "-hue-rotate-[30deg]",
  },
  {
    name: "html5",
    label: "HTML5",
    src: "/icons/html5.svg",
    hue: "-hue-rotate-[120deg]",
  },
  {
    name: "javascript",
    label: "JavaScript",
    src: "/icons/javascript.svg",
    hue: "hue-rotate-200",
  },
  {
    name: "kubernetes",
    label: "Kubernetes",
    src: "/icons/kubernetes.svg",
    hue: "hue-rotate-30",
  },
  {
    name: "linux",
    label: "Linux",
    src: "/icons/linux.svg",
    hue: "hue-rotate-[250deg]",
  },
  {
    name: "markdown",
    label: "Markdown",
    src: "/icons/Markdown_dark.svg",
    darkSrc: "/icons/Markdown_dark.svg",
    lightSrc: "/icons/Markdown_light.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "mongodb",
    label: "MongoDB",
    src: "/icons/mongodb.svg",
    hue: "hue-rotate-120",
  },
  {
    name: "mysql",
    label: "MySQL",
    src: "/icons/mysql.svg",
    hue: "hue-rotate-75",
  },
  {
    name: "nestjs",
    label: "NestJS",
    src: "/icons/nestjs.svg",
    hue: "-hue-rotate-65",
  },
  {
    name: "nextjs",
    label: "Next.js",
    src: "/icons/Next.js_wordmark_dark.svg",
    darkSrc: "/icons/Next.js_wordmark_dark.svg",
    lightSrc: "/icons/Next.js_wordmark_light.svg",
  },
  {
    name: "nodejs",
    label: "Node.js",
    src: "/icons/nodejs.svg",
    hue: "hue-rotate-160",
  },
  { name: "npm", label: "npm", src: "/icons/npm.svg", hue: "-hue-rotate-100" },
  {
    name: "postman",
    label: "Postman",
    src: "/icons/postman.svg",
    hue: "-hue-rotate-100",
  },
  {
    name: "oracle",
    label: "Oracle",
    src: "/icons/oracle.svg",
    hue: "-hue-rotate-90",
  },
  {
    name: "postgresql",
    label: "PostgreSQL",
    src: "/icons/postgresql.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "prisma",
    label: "Prisma",
    src: "/icons/Prisma_dark.svg",
    darkSrc: "/icons/Prisma_dark.svg",
    lightSrc: "/icons/Prisma_light.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "react",
    label: "React.js",
    src: "/icons/React_dark.svg",
    darkSrc: "/icons/React_dark.svg",
    lightSrc: "/icons/React_light.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "react",
    label: "React Native",
    src: "/icons/React_light.svg",
    darkSrc: "/icons/React_dark.svg",
    lightSrc: "/icons/React_light.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "reactquery",
    label: "React Query",
    src: "/icons/reactquery.svg",
    hue: "-hue-rotate-90",
  },
  {
    name: "reactrouter",
    label: "React Router",
    src: "/icons/reactrouter.svg",
    hue: "-hue-rotate-90",
  },
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
    hue: "hue-rotate-60",
  },
  {
    name: "typeorm",
    label: "TypeORM",
    src: "/icons/typeorm.svg",
    hue: "-hue-rotate-90",
  },
  {
    name: "typescript",
    label: "TypeScript",
    src: "/icons/typescript.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "ubuntu",
    label: "Ubuntu",
    src: "/icons/ubuntu.svg",
    hue: "-hue-rotate-60",
  },
  {
    name: "vscode",
    label: "VSCode",
    src: "/icons/vscode.svg",
    hue: "hue-rotate-60",
  },
  {
    name: "windows",
    label: "Windows",
    src: "/icons/windows.svg",
    hue: "hue-rotate-60",
  },
];
