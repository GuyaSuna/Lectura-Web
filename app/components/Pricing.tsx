export default function Pricing() {
  return (
    <section className="px-6 py-40 lg:px-20 fade-up bg-cream dark:bg-emerald-deep relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tightest text-emerald-deep dark:text-cream mb-6">
            Elige tu Nivel
          </h2>
          <p className="text-xl text-emerald-deep/50 dark:text-cream/50 max-w-2xl mx-auto">
            Desde exploradores hasta académicos dedicados, selecciona el nivel de compromiso
            que se ajuste a tu apetito intelectual.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-[2.5rem] flex flex-col gap-10 hover:border-accent/30 transition-all group bg-white/50 dark:bg-emerald-deep/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-emerald-deep/40 dark:text-cream/40 group-hover:text-accent transition-colors uppercase tracking-widest text-sm">
                Explorador
              </h3>
              <div className="text-6xl font-black tracking-tighter text-emerald-deep dark:text-cream">
                $0
              </div>
            </div>
            <ul className="flex flex-col gap-4 text-emerald-deep/70 dark:text-cream/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  check
                </span>{" "}
                Salones Públicos
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  check
                </span>{" "}
                Acceso a la Biblioteca
              </li>
            </ul>
            <button className="mt-auto w-full py-5 rounded-full border-2 border-emerald-deep dark:border-cream/20 text-emerald-deep dark:text-cream font-bold hover:bg-emerald-deep hover:text-white transition-all">
              Comenzar Exploración
            </button>
          </div>
          <div className="glass-dark p-10 rounded-[2.5rem] flex flex-col gap-10 border-2 border-accent relative scale-105 z-20 shadow-2xl shadow-accent/10">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-emerald-deep text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em]">
              Experiencia Premium
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-accent uppercase tracking-widest text-sm">
                Bibliófilo
              </h3>
              <div className="text-6xl font-black tracking-tighter text-cream">
                $12<span className="text-xl font-normal opacity-40">/mo</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 text-cream/80">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  verified
                </span>{" "}
                Salones Ilimitados
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  verified
                </span>{" "}
                Círculos Privados
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  verified
                </span>{" "}
                Sesiones Q&amp;A Exclusivas
              </li>
            </ul>
            <button className="mt-auto w-full py-5 bg-accent text-emerald-deep font-black rounded-full hover:scale-105 btn-glow transition-all uppercase tracking-widest text-xs">
              Obtener Privilegio
            </button>
          </div>
          <div className="glass p-10 rounded-[2.5rem] flex flex-col gap-10 hover:border-accent/30 transition-all group bg-white/50 dark:bg-emerald-deep/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-emerald-deep/40 dark:text-cream/40 group-hover:text-accent transition-colors uppercase tracking-widest text-sm">
                Académico
              </h3>
              <div className="text-6xl font-black tracking-tighter text-emerald-deep dark:text-cream">
                $29<span className="text-xl font-normal opacity-40">/mo</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 text-emerald-deep/70 dark:text-cream/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  check
                </span>{" "}
                Todos los Beneficios de Bibliófilo
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  check
                </span>{" "}
                Entregas Trimestrales
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  check
                </span>{" "}
                Herramientas de Archivo
              </li>
            </ul>
            <button className="mt-auto w-full py-5 rounded-full border-2 border-emerald-deep dark:border-cream/20 text-emerald-deep dark:text-cream font-bold hover:bg-emerald-deep hover:text-white transition-all">
              Consultar Registro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
