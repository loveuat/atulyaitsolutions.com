import React from 'react';

interface Testimonial {
  name: string;
  handle: string;
  text: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-green-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-red-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-blue-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-white-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-orange-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },
  { name: 'Pawan Choubey', handle: 'Founder, Investaxresearch', text: 'Atulys IT Solutions has been extremely supportive throughout our website development journey. Some specific customizations were challenging and couldnt be handled by other developers, but Atul delivered them exactly as we expected. His dedication, responsiveness, and technical skills are truly commendable.', gradient: 'from-purple-600 to-indigo-600' },

];

export  function TestimonialEmblaSlider() {
  // We double the data to create a seamless infinite rolling loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials].reverse(); // Reverse for alternate tracking

  return (
    <section className="w-full bg-[#0b0b0c] py-16 overflow-hidden select-none">
      
      {/* 1. Direct CSS Injection for absolute reliable cross-browser behavior */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: marqueeLeft 90s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: marqueeRight 90s linear infinite;
        }
        .marquee-track-left:hover, .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
                <div className="text-center mb-16">

         <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Testimonials
          </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
          What Our Clients Say
        </h2>
      </div>
      </div>

      {/* 2. Slider Container with Faded Edges (Blur effect like Saasfly) */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#0b0b0c] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#0b0b0c] after:to-transparent">
        
        {/* Layout Wrapper: Spacing out Row 1 and Row 2 */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Row 1 Wrapper */}
          <div className="w-full overflow-hidden">
            <div className="marquee-track-left">
              {row1.map((item, index) => (
                <TestimonialCard key={`row1-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 Wrapper (Offset layout tracking in reverse direction) */}
          <div className="w-full overflow-hidden">
            <div className="marquee-track-right">
              {row2.map((item, index) => (
                <TestimonialCard key={`row2-${index}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable individual Card matching "image_be6c5c.jpg" visual weight
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[300px] sm:w-[350px] shrink-0 bg-[#161618] border border-[#262629] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#3e3e42] hover:bg-[#1c1c1f]">
      <div className="p-[10px]">
        <p className="text-gray-400 text-md leading-relaxed font-normal mb-8">{item.text}</p>

        {/* Top Info Area */}
        <div className="flex items-center gap-5 mb-3">

          {/* Profile Radial Gradient design */}
          <div className={`w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr ${item.gradient}`} />
          <div className="truncate">
            <div className="text-white text-sm font-semibold truncate tracking-wide">{item.name}</div>
            <div className="text-gray-500 text-xs truncate mt-0.5">{item.handle}</div>
          </div>
        </div>
        {/* Comment Text */}
      </div>
    </div>
  );
}