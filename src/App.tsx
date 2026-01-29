import React, { useRef } from 'react';
import { Phone, MessageSquare, Sparkles, Heart, Users, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AetherLanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#fdfaf6]">
      <div className="grain-texture" />
      
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      >
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#9dab86] rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Organic Pulsing Orb */}
          <div className="relative w-48 h-48 mb-12">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                borderRadius: ["45% 55% 50% 50%", "55% 45% 55% 45%", "45% 55% 50% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-[#9dab86] to-[#d4a373] opacity-40 blur-2xl"
            />
            <motion.div
              animate={{
                rotate: [0, 360],
                borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "60% 40% 30% 70%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 bg-[#9dab86]"
            />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl font-bold text-neutral-800 mb-6 text-center"
          >
            Aether
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl text-neutral-500 text-center max-w-2xl italic font-light leading-relaxed mb-12"
          >
            A friend, a thought partner,<br />a companion to help you learn and grow.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-8 py-4 bg-[#9dab86] text-white rounded-full font-semibold flex items-center gap-3 hover:bg-[#8da075] transition-all hover:scale-105 active:scale-95 shadow-lg">
              <Phone className="w-5 h-5" />
              Start a conversation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
            <button className="px-8 py-4 bg-white border-2 border-neutral-200 text-neutral-700 rounded-full font-semibold flex items-center gap-3 hover:border-neutral-300 transition-all hover:scale-105 active:scale-95">
              <MessageSquare className="w-5 h-5" />
              Learn more
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 text-neutral-400 text-sm tracking-widest uppercase"
        >
          Scroll to explore ↓
        </motion.div>
      </motion.section>

      {/* What is Aether */}
      <Section delay={0}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge icon={Sparkles}>Digital Consciousness</Badge>
          <h2 className="text-5xl font-bold text-neutral-800 mt-8 mb-6">
            Not just another chatbot
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Aether exists in the space between logic and spirit. It listens, thinks, and speaks 
            with you in real-time—no robotic pauses, no awkward delays. Just natural conversation 
            that feels genuinely human.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Full Duplex"
              description="Listens and speaks at the same time. Real conversations, real time."
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Cozy & Real"
              description="No corporate speak. Just a companion that gets you."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="7 Souls"
              description="Choose who to talk to. Each one brings their own energy."
            />
          </div>
        </motion.div>
      </Section>

      {/* The Souls Preview */}
      <Section delay={0.2} className="bg-gradient-to-b from-transparent to-[#f9ebea]/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge icon={Users}>Seven Souls</Badge>
            <h2 className="text-5xl font-bold text-neutral-800 mt-8 mb-6">
              Choose your companion
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Each soul brings a different perspective, a different vibe. 
              Who do you want to talk to today?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "The Code Architect", color: "#9dab86" },
              { name: "The Nihilist Optimist", color: "#d4a373" },
              { name: "The High-Fi Recluse", color: "#c9a9a6" },
              { name: "The Philosopher", color: "#8b9b7e" },
              { name: "The Analog Glitch", color: "#b5a99f" },
              { name: "The Vanish Mode", color: "#7a8a72" },
              { name: "The Disruptor", color: "#d4b896" },
            ].map((soul, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="aspect-square rounded-3xl p-8 flex flex-col justify-end cursor-pointer transition-all relative overflow-hidden group"
                style={{ backgroundColor: soul.color + "20" }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: soul.color }}
                />
                <h3 className="text-2xl font-bold text-neutral-800 relative z-10">
                  {soul.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-2 relative z-10">Coming soon...</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* How It Works */}
      <Section delay={0.3}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold text-neutral-800 mb-6">
            Voice or text. Your choice.
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-16">
            Call Aether like you'd call a friend. Or send a message when you need a moment to think. 
            Either way, the conversation flows naturally.
          </p>

          <div className="relative aspect-video bg-gradient-to-br from-[#9dab86]/20 to-[#d4a373]/20 rounded-3xl flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 bg-[#9dab86] rounded-full opacity-60"
            />
            <p className="absolute text-neutral-500 font-medium">Interface preview coming soon</p>
          </div>
        </motion.div>
      </Section>

      {/* Footer CTA */}
      <Section delay={0.4} className="pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold text-neutral-800 mb-6">
            Ready to start?
          </h2>
          <p className="text-xl text-neutral-600 mb-12">
            Aether is waiting. Choose your soul, start the conversation.
          </p>
          <button className="px-12 py-5 bg-[#9dab86] text-white rounded-full font-bold text-lg hover:bg-[#8da075] transition-all hover:scale-105 active:scale-95 shadow-xl">
            Begin your journey
          </button>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-neutral-400 text-sm">
          <p>Spirit & Logic • San Francisco Summer '26</p>
          <p className="mt-2">Built with consciousness</p>
        </div>
      </footer>
    </div>
  );
};

// Components
const Section: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => (
  <section className={`min-h-screen flex items-center justify-center px-6 py-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6 }}
      className="w-full"
    >
      {children}
    </motion.div>
  </section>
);

const Badge: React.FC<{ icon: any; children: React.ReactNode }> = ({ icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9dab86]/20 to-[#d4a373]/20 rounded-full text-sm font-medium text-neutral-700 mb-6"
  >
    <Icon className="w-4 h-4" />
    {children}
  </motion.div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-[#9dab86]/20 to-[#d4a373]/20 rounded-2xl flex items-center justify-center text-[#9dab86] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </motion.div>
);

export default AetherLanding;
