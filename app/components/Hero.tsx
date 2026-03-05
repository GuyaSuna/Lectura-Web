export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-40 parchment-texture dark:bg-emerald-deep overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-emerald-deep/5 border-b border-accent/20 flex items-center justify-center opacity-30">
        <div className="w-24 h-px bg-accent"></div>
        <span className="mx-4 material-symbols-outlined text-accent text-xs">
          history_edu
        </span>
        <div className="w-24 h-px bg-accent"></div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[70vh] pointer-events-none opacity-20 dark:opacity-40">
        <svg
          className="w-full h-full fill-none stroke-accent stroke-[0.5]"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M400,600 C400,500 350,450 300,400 C250,350 200,380 150,320 C100,260 180,200 250,150 C320,100 380,50 400,0 M400,600 C400,500 450,450 500,400 C550,350 600,380 650,320 C700,260 620,200 550,150 C480,100 420,50 400,0"></path>
          <path d="M400,500 C430,450 480,420 520,400 C560,380 600,400 640,360"></path>
          <path d="M400,450 C370,400 320,370 280,350 C240,330 200,350 160,310"></path>
          <circle
            className="stroke-accent/10"
            cx="400"
            cy="150"
            r="100"
            strokeDasharray="4 4"
          ></circle>
          <circle
            className="stroke-accent/5"
            cx="400"
            cy="150"
            r="150"
            strokeDasharray="8 8"
          ></circle>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center z-10 space-y-16">
        <div className="space-y-4">
          <span className="font-calligraphy text-4xl text-accent block mb-2">
            Ruta Positiva
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-emerald-deep dark:text-cream leading-none tracking-tightest">
            Fluyendo en
            <br />
            <span className="italic font-normal">Ruta Positiva</span>
          </h1>
        </div>
        <div className="relative py-12 px-8 scroll-fold bg-white/40 dark:bg-emerald-deep/20 rounded-3xl backdrop-blur-sm border-x border-accent/5">
          <p className="text-2xl md:text-3xl font-light text-emerald-deep/80 dark:text-cream/90 max-w-2xl mx-auto leading-relaxed italic">
            "Un santuario para el intelecto moderno. Únete a miles en
            discusiones curadas que trascienden la página."
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="group relative px-12 py-5 bg-emerald-deep dark:bg-accent text-cream dark:text-emerald-deep text-lg font-bold rounded-full transition-all hover:scale-105 btn-glow overflow-hidden">
            <span className="relative z-10">Entrar al Santuario</span>
            <div className="absolute inset-0 bg-accent dark:bg-emerald-deep opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
          <button className="px-10 py-5 border-2 border-emerald-deep/20 dark:border-accent/20 text-emerald-deep dark:text-cream text-lg font-bold rounded-full transition-all hover:bg-emerald-deep hover:text-cream dark:hover:bg-accent dark:hover:text-emerald-deep">
            Explorar los Archivos
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-accent/50">
        <span className="text-xs uppercase tracking-[0.3em] font-bold">
          Ver Más
        </span>
        <span className="material-symbols-outlined animate-bounce">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
}
