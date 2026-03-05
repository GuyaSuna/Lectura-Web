export default function Dialogues() {
  return (
    <section className="px-6 py-32 lg:px-20 bg-emerald-deep text-cream fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">
              Círculos Activos
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tightest">
              Diálogos Activos
            </h2>
          </div>
          <button className="flex items-center gap-3 text-accent font-bold hover:gap-5 transition-all group">
            <span>Ver Todos los Salones</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_right_alt
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
            <img
              alt="Stoic Philosophy"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
              src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733589895i/222346375.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent p-8 flex flex-col justify-end">
              <div className="space-y-3">
                <div className="text-accent text-xs font-black uppercase tracking-widest">
                  Tendencia
                </div>
                <h3 className="text-3xl font-bold">Sabiduría Estoica</h3>
                <p className="text-cream/60">
                  Leyendo: Meditaciones de Marco Aurelio
                </p>
                <button className="mt-4 w-full py-4 glass text-white font-bold rounded-xl hover:bg-accent hover:text-emerald-deep transition-all">
                  Unirse a la Discusión
                </button>
              </div>
            </div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-white/5 border border-white/10 md:translate-y-12">
            <img
              alt="Modern Classics"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpUZxhk4dVHQrC4VpFYTWPWFWCs-PmEFFbytQKB2UAG17MR1qgxtDwT3Tg1wKqdwM_Hh8Mgycn36ydLIJNp-G8GJWtMaCPjEkU01HgTcaR7WIQdXu6XeUEF-3ETVYVdhDjUsCCd54I9_916ta8XqD5mOI3x-TNGZeN2YPiA9M0WZtsJDW5GQ3ExCVucodTlLgjtmeF1f4Bavkw1Yv96DSxGw4Q3yz5drkaa4OLtpbCy1n_laO0GZZofB8I4d7kRAIQJq5ZJzyvV6iZ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent p-8 flex flex-col justify-end">
              <div className="space-y-3">
                <div className="text-accent text-xs font-black uppercase tracking-widest">
                  Selección del Curador
                </div>
                <h3 className="text-3xl font-bold">Generaciones Perdidas</h3>
                <p className="text-cream/60">Leyendo: El Gran Gatsby</p>
                <button className="mt-4 w-full py-4 glass text-white font-bold rounded-xl hover:bg-accent hover:text-emerald-deep transition-all">
                  Entrar a la Sala
                </button>
              </div>
            </div>
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-white/5 border border-white/10">
            <img
              alt="The Sci-Fi Frontier"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmGynZdHz0xovut-Mt3ivABakiRbCmR4vkgI0wwkesQ885KiJn3VZo2cB7AFaeAPY8Nvt_W9x7GXZ_WllTiaei718LZt0X1PkqXEYvx7qsxtOJO5DxT5K-lqaMk4CRrtIS4K2OOb9dJgQsg6hdvne10U-lRnOqe2YaaavqkzGs2Cy67Ikk_Fx8X_jnXytlZl75hW9c3HRrPwwdp8Wo-zTSxPkcoo5AZzwgtpDabRgJO73NlU6dNKmFIYPSBW8gsCxuy7dIy1QROAMc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent p-8 flex flex-col justify-end">
              <div className="space-y-3">
                <div className="text-accent text-xs font-black uppercase tracking-widest">
                  Limitado
                </div>
                <h3 className="text-3xl font-bold">Ecos del Futuro</h3>
                <p className="text-cream/60">Leyendo: Mesías de Dune</p>
                <button className="mt-4 w-full py-4 glass text-white font-bold rounded-xl hover:bg-accent hover:text-emerald-deep transition-all">
                  Reservar Lugar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
