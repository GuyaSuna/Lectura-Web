export default function Features() {
  return (
    <section className="px-6 py-32 lg:px-20 fade-up bg-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tightest text-slate-800 mb-8">
              El Viaje
              <br />
              de la Sabiduría
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-12">
              Conectamos la lectura solitaria con la sabiduría colectiva.
              Cada libro es una puerta; cada discusión es una llave.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="flex-none w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">
                    auto_stories
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Descubrimiento Curado</h3>
                  <p className="text-slate-600">
                    Evita el ruido de los algoritmos. Encuentra obras seleccionadas por
                    bibliófilos experimentados por su profundidad y relevancia.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-none w-16 h-16 rounded-2xl bg-rose-200 text-rose-700 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-rose-200/50">
                  <span className="material-symbols-outlined text-3xl">
                    group_work
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Salones Íntimos</h3>
                  <p className="text-slate-600">
                    Entornos de grupos pequeños donde las voces son escuchadas y las ideas
                    son exploradas rigurosamente en seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-green-50 rounded-[4rem] overflow-hidden border-2 border-green-200 rotate-2 translate-x-4"></div>
            <div className="absolute inset-0 aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl border-4 border-white/50 -rotate-2">
              <img
                alt="Reading sanctuary"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNnCknfKvS7clo-cxiI8F_XritBRFQI0Zk_2qi42gw8dvWtXSefEyVnpyes2XJlNfBBzzHnoVxjmDejNye94_eYtbIR2d73UdsGRhXIO4W8ij6bH3gUDOg9zHAjoxIO2-SiS0ier5-rudSOTvcjCkxTbjFk6_0TfoJVFxDB4kbfpkkzK-DylWMI65cn7kvlotkuzRDSRYXHfe8DqmZW-6PVBjbIWHf-JNsP15sCO_tk-ynN2tYuxC_vDamS25erXlQW2dK2OIj380J"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-rose-100/90 backdrop-blur-sm p-8 rounded-3xl border border-rose-200 max-w-[280px]">
              <span className="material-symbols-outlined text-green-600 mb-4">
                history_edu
              </span>
              <p className="text-slate-700 text-lg italic leading-relaxed">
                "El conocimiento es la única riqueza que aumenta al ser compartida."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}