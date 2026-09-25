import React from 'react';
import { ArrowRight, UserCog, Handshake, FileCog, LayoutDashboard, Headset, Megaphone, BadgeDollarSign, Server, SunMedium, CarFront } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  UserCog, Handshake, FileCog, LayoutDashboard, Headset, Megaphone, BadgeDollarSign, Server, SunMedium, CarFront,
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];
  return (
    <div
      className={`group relative rounded-2xl bg-[#009640] hover:bg-[#00a94a] transition-all duration-300 p-6 md:p-7 cursor-pointer overflow-hidden shadow-[0_6px_20px_-8px_rgba(0,150,64,0.4)] hover:shadow-[0_14px_28px_-10px_rgba(0,150,64,0.55)] hover:-translate-y-1`}
    >
      <div className="flex flex-col h-full min-h-[140px] justify-between">
        <div>
          {Icon && <Icon size={38} strokeWidth={1.4} className="text-white mb-4" />}
          <h3 className="text-white font-semibold text-[17px] leading-[1.35] max-w-[240px]">
            {service.title}
          </h3>
        </div>
        <ArrowRight
          size={22}
          className="text-white self-end mt-4 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="bg-[#fbf4ea] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <p className="text-[#009640] font-medium text-[15px] mb-4">Serviços</p>
            <p className="text-[#0a2a1e] text-[17px] md:text-[19px] leading-[1.7] font-medium">
              Em colaboração com a RZEnergy, a Iberdrola apoia os seus parceiros comerciais para garantir um fornecimento energético de sucesso. Através de recursos e formação, os parceiros comerciais podem oferecer serviços de alta qualidade aos seus clientes e, ao mesmo tempo, desenvolver as suas competências profissionais na Iberdrola.
            </p>
          </div>
          <a
            href="#servicos"
            className="group self-start inline-flex items-center gap-2 bg-[#0a2a1e] hover:bg-[#00583a] text-white px-6 py-3 rounded-full font-medium text-[15px] transition-colors whitespace-nowrap"
          >
            Serviços
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bento-style grid replicating source layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <div className="md:col-span-3"><ServiceCard service={services[0]} /></div>
          <div className="md:col-span-3"><ServiceCard service={services[1]} /></div>

          <div className="md:col-span-2"><ServiceCard service={services[2]} /></div>
          <div className="md:col-span-2"><ServiceCard service={services[3]} /></div>
          <div className="md:col-span-2"><ServiceCard service={services[4]} /></div>

          <div className="md:col-span-3"><ServiceCard service={services[5]} /></div>
          <div className="md:col-span-3"><ServiceCard service={services[6]} /></div>

          <div className="md:col-span-2"><ServiceCard service={services[7]} /></div>
          <div className="md:col-span-2"><ServiceCard service={services[8]} /></div>
          <div className="md:col-span-2"><ServiceCard service={services[9]} /></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
