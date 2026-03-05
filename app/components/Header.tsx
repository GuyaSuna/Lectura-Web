import ScrollingNews from './ScrollingNews';

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] flex flex-col w-full">
      <div className="flex items-center justify-between px-6 py-4 lg:px-20 glass-dark border-b border-accent/10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-accent">
            <span className="material-symbols-outlined text-3xl">
              auto_stories
            </span>
            <h2 className="text-2xl font-black tracking-tightest text-cream uppercase">
              Ruta Positiva
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a
              className="text-cream/70 text-sm font-medium hover:text-accent transition-colors"
              href="#"
            >
              Explorar
            </a>
            <a
              className="text-cream/70 text-sm font-medium hover:text-accent transition-colors"
              href="#"
            >
              Grupos
            </a>
            <a
              className="text-cream/70 text-sm font-medium hover:text-accent transition-colors"
              href="#"
            >
              Comunidad
            </a>
            <a
              className="text-cream/70 text-sm font-medium hover:text-accent transition-colors"
              href="#"
            >
              Precios
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden lg:flex items-center gap-2 text-cream/80 hover:text-accent transition-colors">
            <span className="material-symbols-outlined text-xl">search</span>
            <span className="text-sm">Buscar en la Biblioteca</span>
          </button>
          <button className="px-6 py-2 bg-accent text-emerald-deep text-sm font-bold rounded-full transition-transform hover:scale-105 btn-glow">
            Únete Ahora
          </button>
        </div>
      </div>
      <ScrollingNews />
    </header>
  );
}