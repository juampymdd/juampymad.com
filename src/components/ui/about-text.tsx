import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ServerCog,
  Database,
  ShieldCheck,
  Rocket,
  Brain,
  Gauge,
  Layers,
  GitBranch,
  CheckCircle2,
  Timer,
} from "lucide-react";
import { ScrollArea } from "./scroll-area";

/**
 * AboutMe.tsx
 *
 * Drop-in React component for your landing page "About Me" section.
 * - Tailwind CSS for styling
 * - Framer Motion for subtle animations
 * - lucide-react for icons
 *
 * Usage:
 *   import AboutMe from "./AboutMe";
 *   export default function Page() { return <AboutMe /> }
 */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const chip =
  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur";

export default function AboutMe({
  heightClass = "h-full",
}: {
  heightClass?: string;
}) {
  return (
    <section className="relative w-full py-14 sm:py-20 z-[999]">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-400/30 to-sky-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70">
            Desarrollador <strong>Full‑stack & DevOps</strong> con{" "}
            <strong>+10 años</strong> construyendo apps web seguras, rápidas y
            escalables.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-black/60 dark:text-white/60">
            <span className={chip}>
              <Layers className="h-4 w-4" /> Next.js · NestJS · Docker · K8s
            </span>
            <span className={chip}>
              <GitBranch className="h-4 w-4" /> CI/CD · Observabilidad
            </span>
            <span className={chip}>
              <ShieldCheck className="h-4 w-4" /> Seguridad & JWT
            </span>
          </div>
        </motion.div>

        {/* Grid */}
        <ScrollArea className={`w-full ${heightClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Summary / Value */}
            <motion.div
              {...fadeUp}
              className="md:col-span-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-lg p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <Rocket className="mt-0.5 h-5 w-5 text-indigo-400" />
                <div>
                  <h3 className="text-lg font-semibold">Lo que hago</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/80 dark:text-white/80">
                    <li className="flex items-center justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400" />{" "}
                      Diseño y desarrollo <strong>end‑to‑end</strong>: UI → API
                      → DB → infraestructura.
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400" />{" "}
                      <p>
                        <strong>APIs</strong> (REST/SOAP/GraphQL) con
                        autenticación (<strong>JWT/OAuth2</strong>) e
                        integraciones externas.
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400" />{" "}
                      <p>
                        <strong>CI/CD</strong> y despliegues en{" "}
                        <strong>Kubernetes</strong> con monitoreo, logs y
                        alertas.
                      </p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400" />{" "}
                      <p>
                        Modelado de datos y optimización en{" "}
                        <strong>PostgreSQL/Oracle/MySQL</strong>.
                      </p>
                    </li>
                    <li className="flex gap-2 ">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400" />{" "}
                      IA aplicada (RAG/chatbots sobre PDFs) cuando aporta valor
                      real.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { Icon: Code2, label: "Frontend · Next.js" },
                  { Icon: ServerCog, label: "Backend · NestJS" },
                  { Icon: Database, label: "Datos · SQL" },
                  { Icon: ShieldCheck, label: "OWASP · JWT" },
                  { Icon: Gauge, label: "Performance" },
                ].map(({ Icon, label }) => (
                  <span key={label} className={chip}>
                    <Icon className="h-4 w-4" /> {label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* How I work */}
            <motion.div
              {...fadeUp}
              className="md:col-span-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <Brain className="mt-0.5 h-5 w-5 text-fuchsia-600" />
                <div>
                  <h3 className="text-lg font-semibold">Cómo trabajo</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/80 dark:text-white/80">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-600" />{" "}
                      Discovery rápido → roadmap claro y priorización por
                      impacto.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-600" />{" "}
                      Entregas cortas: feature flags, PRs chicos, feedback
                      continuo.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-600" />{" "}
                      Calidad por defecto: tests, linting, tipos y documentación
                      viva.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-600" />{" "}
                      Infra como código y automatización para evitar tareas
                      manuales.
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-600" />{" "}
                      Comunicación simple, sin humo, con métricas y resultados.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stack & Pros/Cons */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Stack */}
            <motion.div
              {...fadeUp}
              className="md:col-span-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Mi stack favorito</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-indigo-400" /> Frontend
                  </h4>
                  <ul className="space-y-1 text-black/80 dark:text-white/80">
                    <li>Next.js (App Router), React, Tailwind, shadcn‑ui</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <ServerCog className="h-4 w-4 text-indigo-400" /> Backend
                  </h4>
                  <ul className="space-y-1 text-black/80 dark:text-white/80">
                    <li>NestJS (TypeORM/Prisma), Node.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <Database className="h-4 w-4 text-indigo-400" /> Datos
                  </h4>
                  <ul className="space-y-1 text-black/80 dark:text-white/80">
                    <li>PostgreSQL, Oracle, MySQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <Layers className="h-4 w-4 text-indigo-400" /> DevOps
                  </h4>
                  <ul className="space-y-1 text-black/80 dark:text-white/80">
                    <li>Docker, Kubernetes, GitLab CI/CD, observabilidad</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="mb-2 font-medium flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-indigo-400" />{" "}
                    Seguridad
                  </h4>
                  <ul className="space-y-1 text-black/80 dark:text-white/80">
                    <li>JWT/OAuth2, RBAC, buenas prácticas OWASP</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pros & Cons */}
            <motion.div
              {...fadeUp}
              className="md:col-span-2 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">Pros & Contras</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 text-sm">
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <h4 className="mb-2 font-medium text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-black/80 dark:text-white/80">
                    <li>Visión integral (producto + tech + plataforma).</li>
                    <li>
                      Pragmático: entrego valor sin perder calidad técnica.
                    </li>
                    <li>Data‑driven: mido, itero y optimizo con métricas.</li>
                    <li>Escalabilidad y performance como requisitos.</li>
                    <li>Autonomía y comunicación clara con stakeholders.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 p-4">
                  <h4 className="mb-2 font-medium text-rose-700 dark:text-rose-300 flex items-center gap-2">
                    <Timer className="h-4 w-4" /> Contras
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-black/80 dark:text-white/80">
                    <li>
                      Perfeccionista: tiendo a pulir de más si no hay límites
                      claros.
                    </li>
                    <li>
                      Agenda exigente: elijo proyectos por impacto y alineación.
                    </li>
                    <li>
                      No soy diseñador gráfico; me apoyo en UX/guías de estilo.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-sky-500/10 p-6"
          >
            <p className="text-sm sm:text-base text-black/80 dark:text-white/80">
              ¿Hacemos algo juntos? Enviame un mensaje y armamos un plan en
              minutos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black shadow hover:opacity-90 transition"
            >
              Contactarme
            </a>
          </motion.div>
        </ScrollArea>
      </div>
    </section>
  );
}
