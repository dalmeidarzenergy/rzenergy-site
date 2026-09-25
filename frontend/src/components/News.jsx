import React from 'react';
import { ArrowRight } from 'lucide-react';
import { news } from '../mock';

const News = () => {
  return (
    <section id="noticias" className="bg-[#fbf4ea] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-[#009640] font-medium text-[15px] mb-4">Notícias</p>
            <p className="text-[#0a2a1e] text-[17px] md:text-[19px] leading-[1.6] font-medium">
              Descubra as últimas notícias e atualizações no mundo da energia com as nossas notícias em destaque. Mantenha-se atualizado com as tendências do setor, dicas de economia de energia e notícias relevantes
            </p>
          </div>

          <a
            href="#noticias"
            className="group self-start inline-flex items-center gap-2 bg-[#0a2a1e] hover:bg-[#00583a] text-white px-6 py-3 rounded-full font-medium text-[15px] transition-colors whitespace-nowrap"
          >
            Ver tudo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-[#009640] rounded-2xl overflow-hidden shadow-[0_6px_20px_-8px_rgba(0,150,64,0.4)] hover:shadow-[0_14px_28px_-10px_rgba(0,150,64,0.55)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#f4801f] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  {item.date}
                </span>
              </div>
              <div className="p-6 text-white">
                <p className="text-white/85 text-sm mb-3">{item.category}</p>
                <div className="h-px bg-white/30 mb-4" />
                <h3 className="font-semibold text-[17px] leading-[1.35] mb-5 min-h-[70px]">
                  {item.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-white text-[14px] font-medium">
                  Leia mais
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
