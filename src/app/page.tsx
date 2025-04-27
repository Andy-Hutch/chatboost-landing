'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from '@/components/ThemeToggle';

export function ChatbotBubble() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-xl cursor-pointer z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="text-white text-3xl">💬</span>
    </motion.div>
  );
}

function Home() {
  const [selectedFeature, setSelectedFeature] = useState<null | string>(null);
  const [isClient, setIsClient] = useState(false);

  const features = [
    {
      id: 'instant-response',
      icon: '⚡',
      title: 'Instant Response',
      shortDescription: "Never miss a customer's question again with real-time AI support.",
      longDescription:
        "With our Instant Response feature, your customers get immediate answers to their queries at any time of the day or night. This feature enhances user engagement and ensures that no question goes unanswered. It’s the perfect tool for businesses that need round-the-clock customer support.",
    },
    {
      id: 'natural-conversations',
      icon: '💬',
      title: 'Natural Conversations',
      shortDescription: 'Engage visitors with human-like, helpful interactions.',
      longDescription:
        "Natural Conversations ensures that your AI can hold conversations just like a real person. The AI adapts to the user’s tone, context, and needs, making your visitors feel heard and understood. It helps build trust with your customers while ensuring a seamless experience.",
    },
    {
      id: 'boost-conversions',
      icon: '🚀',
      title: 'Boost Conversions',
      shortDescription: 'Turn chats into customers with immediate assistance.',
      longDescription:
        "Our Boost Conversions feature empowers your AI to guide users towards making a purchase decision or taking action. By providing helpful suggestions and real-time assistance, the AI helps convert hesitant visitors into paying customers.",
    },
  ];

  const handleCardClick = (id: string) => {
    setSelectedFeature((prevSelectedFeature) => (prevSelectedFeature === id ? null : id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, -100, 0],
            x: ['-50%', '-40%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {isClient &&
          [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-10"
              initial={{
                y: '100%',
                x: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: '-10%',
                x: `${Math.random() * 100}%`,
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 20 + 10,
                ease: 'linear',
                delay: Math.random() * 10,
              }}
            />
          ))}
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-20 space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 bg-clip-text text-transparent">
          Welcome to <span className="text-blue-300">ChatBoost</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
          Turn your website into a 24/7 customer service agent with AI. Enhance user experience with automated support that never sleeps!
        </p>
        <button className="px-8 py-4 mt-6 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 text-xl">
          <ScrollLink to="pricing" smooth={true} duration={500}>
            Get Started
          </ScrollLink>
        </button>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="mt-32 max-w-6xl w-full text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-16">Why Choose ChatBoost?</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature) => {
            const isSelected = selectedFeature === feature.id;

            return (
              <motion.div
                key={feature.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
                }}
                initial={{ borderRadius: 20 }}
                className={`relative flex flex-col items-center p-8 rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer ${
                  isSelected ? 'bg-blue-600 scale-105 shadow-blue-400/30 shadow-lg' : 'bg-blue-700 hover:scale-105'
                }`}
                onClick={() => handleCardClick(feature.id)}
              >
                <motion.div className="absolute top-6 right-6" whileHover={{ scale: 1.2 }}>
                  {/* Plus/Minus Icon */}
                  <motion.div
                    initial={false}
                    animate={{ rotate: isSelected ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white text-3xl font-bold"
                  >
                    +
                  </motion.div>
                </motion.div>

                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-center text-gray-100">{feature.shortDescription}</p>

                {/* Animated Expansion */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                      className="text-white text-lg font-medium mt-6 overflow-hidden"
                    >
                      {feature.longDescription}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="mt-32 max-w-3xl w-full text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Simple Pricing</h2>
        <p className="text-lg md:text-xl mb-16 text-gray-200">Get started with our easy-to-use tools at a fraction of the cost!</p>

        {/* Pricing Plans (Mock) */}
        <div className="flex justify-center">
          {/* Free Trial */}
          <div className="bg-blue-600 p-8 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Free Trial</h3>
            <p className="text-lg text-gray-200 mb-4">Experience the basic features for free.</p>
            <motion.button
              className="px-8 py-4 mt-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 text-xl"
            >
              Start Free Trial
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Scroll Link Back to Features */}
      <motion.div whileTap={{ scale: 0.95 }}>
        <ScrollLink to="features" smooth={true} duration={500} className="underline cursor-pointer hover:text-blue-300 transition">
          Explore Features Again
        </ScrollLink>
      </motion.div>
    </main>
  );
}

export default Home;  {/* Make sure you have the default export */}


