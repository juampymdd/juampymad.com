"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  IdCard,
  AppWindow,
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Zap,
  Gauge,
  Layers,
  ServerCog,
  Database,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/**
 * ProjectsSection.tsx — Grid estilo pricing (sin precios obligatorios)
 *
 * Cards para ofertar: Landing Page, Portfolio, Web APP, App Mobile.
 * - Tailwind + framer-motion + lucide-react
 * - Envuelto en ScrollArea (shadcn/ui)
 * - Prop heightClass para controlar la altura con Tailwind (default h-[75vh])
 *
 * Uso:
 *   import ProjectsSection from "./ProjectsSection";
 *   <ProjectsSection heightClass="h-[80vh]" />
 */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export type PlanKey = "landing" | "portfolio" | "webapp" | "mobile";

type Plan = {
  key: PlanKey;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  idealFor: string[];
  benefits: string[];
  tech: string[];
  delivery?: string; // opcional
  price?: string; // opcional (ej: "Desde USD 400")
  highlight?: boolean; // resalta la carta
};

const PLANS: Plan[] = [
  {
    key: "landing",
    title: "Landing Page",
    subtitle: "Tu carta de presentación, optimizada para convertir",
    icon: Globe2,
    description:
      "Una página de una sola vista, rápida, responsive y con SEO básico. Ideal para campañas, servicios puntuales y captar leads.",
    idealFor: ["Lanzamientos", "Servicios profesionales", "Campañas de Ads"],
    benefits: [
      "1–3 secciones + CTA claro",
      "Formulario de contacto / WhatsApp",
      "SEO y performance básicos (Lighthouse)",
      "Diseño responsive y accesible",
      "Deploy + dominio + analítica básica",
    ],
    tech: ["Next.js", "Tailwind", "Vercel/Docker"],
    delivery: "3–5 días hábiles",
  },
  {
    key: "portfolio",
    title: "Portfolio",
    subtitle: "Mostrá lo que sabés hacer (sin depender de Dribbble/GitHub)",
    icon: IdCard,
    description:
      "Sitio personal con secciones de habilidades, experiencia y publicaciones. Orientado a explicar tecnologías y cómo las usás.",
    idealFor: ["Freelancers", "Dev senior", "Consultores"],
    benefits: [
      "Secciones: Sobre mí, Stack, Servicios, Contacto",
      "Blog / artículos opcional (CMS headless)",
      "Dark mode + microinteracciones",
      "SEO on-page y OpenGraph",
      "Formularios con protección anti‑spam",
    ],
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    delivery: "5–7 días hábiles",
  },
  {
    key: "webapp",
    title: "Web APP",
    subtitle: "Aplicación web con auth, roles y datos en serio",
    icon: AppWindow,
    description:
      "MVP o módulo completo con frontend + backend + base de datos + CI/CD. Pensado para escalar sin dolores de cabeza.",
    idealFor: ["SaaS", "Intranets", "Paneles de gestión"],
    benefits: [
      "Auth (credenciales/Social) + RBAC",
      "API REST/GraphQL con NestJS",
      "PostgreSQL/Oracle + migrations",
      "Testing + lint + tipos",
      "CI/CD y contenedores (Docker/K8s)",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Kubernetes"],
    delivery: "MVP típico: 2–4 semanas (según alcance)",
    highlight: true,
  },
  {
    key: "mobile",
    title: "App Mobile",
    subtitle: "Experiencia nativa con React Native (Expo)",
    icon: Smartphone,
    description:
      "Aplicación móvil para iOS/Android con login, notificaciones push y sincronización con backend.",
    idealFor: ["Negocios locales", "Productos B2C", "Equipos en campo"],
    benefits: [
      "Login social/email + perfiles",
      "Push notifications y deep linking",
      "Modo offline + sincronización",
      "QR/escáner y cámara",
      "Publicación en stores (opcional)",
    ],
    tech: ["React Native", "Expo", "NestJS", "Supabase/Firestore"],
    delivery: "MVP típico: 2–4 semanas (según alcance)",
  },
];

export default function ProjectsSection({
  heightClass = "h-full",
}: {
  heightClass?: string;
}) {
  return (
    <>
      <section className="relative w-full py-14 sm:py-20">
        {/* Background flair */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/10 to-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent">
                Proyectos que puedo construir
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70">
              Elegí el tipo de proyecto y veamos juntos el alcance. Cada opción
              incluye buenas prácticas, performance y seguridad.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-black/60 dark:text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/10 bg-white/5 backdrop-blur">
                <ShieldCheck className="h-4 w-4" /> OWASP · Auth · RBAC
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/10 bg-white/5 backdrop-blur">
                <Gauge className="h-4 w-4" /> Performance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/10 bg-white/5 backdrop-blur">
                <Layers className="h-4 w-4" /> Next.js · NestJS · SQL
              </span>
            </div>
          </motion.div>

          {/* Grid */}
          {/* <ScrollArea className={`w-full ${heightClass}`}> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <motion.div
                key={plan.key}
                {...fadeUp}
                className={`relative rounded-2xl border p-6 shadow-sm backdrop-blur bg-white/50 dark:bg-white/5 ${
                  plan.highlight
                    ? "border-indigo-400/40 ring-2 ring-indigo-400/30"
                    : "border-black/10 dark:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-4 inline-block rounded-full bg-indigo-600 text-white text-xs px-3 py-1 shadow">
                    Recomendado
                  </span>
                )}

                {/* Title */}
                <div className="flex items-start gap-3">
                  <plan.icon className="mt-0.5 h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-black/80 dark:text-white/80">
                  {plan.description}
                </p>

                {/* Benefits */}
                <ul className="mt-4 space-y-2 text-sm">
                  {plan.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-black/80 dark:text-white/80"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[Rocket, Zap, ServerCog, Database].map((Icon, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {plan.tech[idx] || plan.tech[plan.tech.length - 1]}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                  <div className="text-black/70 dark:text-white/70">
                    {plan.delivery && (
                      <span className="mr-3">⏱ {plan.delivery}</span>
                    )}
                    {plan.price && <span>💰 {plan.price}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {plan.idealFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`#contacto?plan=${plan.key}`}
                    data-plan={plan.key}
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black shadow hover:opacity-90 transition"
                  >
                    Quiero esto
                  </a>
                  <a
                    href={`#contacto?plan=${plan.key}&detalle=true`}
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    Ver detalle
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          {/* </ScrollArea> */}
        </div>
      </section>
    </>
  );
}
