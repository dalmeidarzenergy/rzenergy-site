import React from 'react';
import { seoSections } from '../mock';

const SeoContent = () => {
  return (
    <section className="bg-[#fbf4ea] py-20 lg:py-24">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 space-y-14">
        {seoSections.map((section, i) => (
          <div key={i}>
            <h2 className="text-[#0a2a1e] font-serif text-[26px] md:text-[30px] font-semibold leading-[1.25] mb-8">
              {section.title}
            </h2>
            <div className="space-y-8">
              {section.subs.map((sub, j) => (
                <div key={j}>
                  <h3 className="text-[#009640] font-serif text-lg md:text-xl font-semibold mb-3">
                    {sub.heading}
                  </h3>
                  <p className="text-[#0a2a1e]/80 text-[15px] leading-[1.9] text-justify">
                    {sub.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeoContent;
