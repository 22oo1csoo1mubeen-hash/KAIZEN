import { Target, Wallet, CheckCircle2 } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Habits',
    icon: <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={1.5} />,
    glowColor: 'rgba(52, 211, 153, 1.0)', // Emerald glow - enhanced
    hoverClass: 'hover:glow-emerald',
  },
  {
    title: 'Goals',
    icon: <Target className="w-12 h-12 text-white" strokeWidth={1.5} />,
    glowColor: 'rgba(255, 107, 107, 1.0)', // Red/Coral glow - enhanced
    hoverClass: 'hover:glow-coral',
  },
  {
    title: 'Wealth',
    icon: <Wallet className="w-12 h-12 text-white" strokeWidth={1.5} />,
    glowColor: 'rgba(59, 130, 246, 1.0)', // Light blue glow - enhanced
    hoverClass: 'hover:glow-blue',
  }
];

export function DashboardPreview() {
  return (
    <section id="capabilities" className="relative min-h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden py-32 px-4 border-t border-white/5">
      
      {/* Background Video */}
      <FadingVideo 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-white text-5xl md:text-7xl lg:text-[7rem] leading-none tracking-tighter uppercase stacked-text-shadow"
          >
            Core Systems
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`liquid-glass rounded-3xl p-10 min-h-[320px] flex flex-col items-center justify-center group cursor-pointer transition-all relative ${feature.hoverClass}`}
              style={{
                boxShadow: 'inset 0 0 0 0px rgba(0,0,0,0.5), 0 0 0 0px rgba(255,255,255,0.05)'
              }}
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-30" style={{ background: `radial-gradient(circle at center, ${feature.glowColor.replace('1.0', '0.3')} 0%, transparent 100%)`, filter: 'blur(20px)', zIndex: 0 }} />
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-30 blur-3xl" style={{ background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 40%)`, width: '200px', height: '200px', transform: 'translate(-60px, -60px)', boxShadow: `0 0 60px 20px ${feature.glowColor}`, zIndex: 0 }} />
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 12 }}
                    className="w-24 h-24 liquid-glass rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/50 transition-all duration-30"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                
                <h3 className="relative z-20 font-display font-bold text-white text-4xl tracking-tight uppercase group-hover:text-white transition-colors duration-200">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
