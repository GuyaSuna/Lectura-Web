'use client';

export default function ScrollingNews() {
  return (
    <>
      <div className="bg-rose-100/60 backdrop-blur-sm px-6 md:px-20 py-2 border-b border-green-200 overflow-hidden scrolling-container">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-green-500 px-2 py-0.5 rounded border border-green-200 shrink-0">
            Tendencias
          </span>
          <div className="relative flex-1 overflow-hidden h-6">
            <div className="scrolling-text flex items-center gap-12 text-sm text-slate-600 font-medium">
              <span>📖 Nuevo Grupo de Lectura: "Cien años de soledad" empieza en 2 horas!</span>
              <span>✨ @María acaba de terminar "El amor en los tiempos del cólera"</span>
              <span>🔥 Tema Trending: ¿La lectura digital cambia nuestra comprensión?</span>
              <span>📅 Encuentro de la Comunidad en Madrid el próximo sábado</span>
              <span>🌿 45 nuevos miembros se unieron al Círculo de Serenidad hoy</span>
              <span>📚 Nueva recomendación: "Rayuela" de Cortázar</span>
              <span>💭 Debate abierto: Ficción vs No-ficción en el desarrollo personal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}