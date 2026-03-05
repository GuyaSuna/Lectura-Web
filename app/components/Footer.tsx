export default function Footer() {
  return (
    <footer className="bg-emerald-deep text-cream/40 px-6 py-20 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-accent">
            <span className="material-symbols-outlined text-3xl">
              auto_stories
            </span>
            <span className="font-black text-2xl text-cream tracking-tightest">
              RUTA POSITIVA
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Conectando mentes a través del poder de la literatura. Un legado digital
            de pensamiento y comunidad.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-cream mb-8 uppercase tracking-widest text-xs">
            Descubrimiento
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Archivos de la Biblioteca
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Salones de Discusión
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Directorio de Miembros
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-cream mb-8 uppercase tracking-widest text-xs">
            Gremio
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Nuestra Filosofía
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Programa de Curadores
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Santuario de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <h4 className="font-bold text-cream mb-4 uppercase tracking-widest text-xs">
            La Crónica
          </h4>
          <div className="flex gap-2 p-2 bg-white/5 rounded-full border border-white/10 focus-within:border-accent transition-colors">
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full px-4 placeholder:text-white/20"
              placeholder="Dirección de correo"
              type="email"
            />
            <button className="bg-accent text-emerald-deep w-10 h-10 rounded-full flex items-center justify-center flex-none">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <span>© 2024 Ruta Positiva. Todos los derechos reservados.</span>
        <div className="flex gap-8">
          <a className="hover:text-accent transition-colors" href="#">
            Instagram
          </a>
          <a className="hover:text-accent transition-colors" href="#">
            Threads
          </a>
          <a className="hover:text-accent transition-colors" href="#">
            Letterboxd
          </a>
        </div>
      </div>
    </footer>
  );
}
