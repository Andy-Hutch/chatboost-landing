'use client';

import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-20 space-y-8">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Welcome to <span className="text-blue-300">ChatBoost</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Turn your website into a 24/7 customer service agent with AI. Enhance user experience with automated support that never sleeps!
        </p>
        <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 text-xl">
          <ScrollLink to="pricing" smooth={true} duration={500}>
            Get Started
          </ScrollLink>
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-32 max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Why Choose ChatBoost?</h2>
        
        <div className="grid md:grid-cols-3 gap-12 px-6">
          {/* Feature Cards */}
          {[ 
            { icon: '⚡', title: 'Instant Response', description: "Never miss a customer's question again with real-time AI support." },
            { icon: '💬', title: 'Natural Conversations', description: "Engage visitors with human-like, helpful interactions." },
            { icon: '🚀', title: 'Boost Conversions', description: "Turn chats into customers with immediate assistance." }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-blue-700 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-center text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mt-32 max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Simple Pricing</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-12">Start with a 7-day free trial. Cancel anytime. No hidden fees.</p>
        
        <div className="bg-blue-700 rounded-2xl p-10 shadow-2xl">
          <h3 className="text-5xl font-extrabold mb-4 text-white">$29<span className="text-2xl font-normal">/month</span></h3>
          <p className="mb-8 text-gray-100">Unlimited chats. Full access.</p>
          <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Scroll Link Back to Features */}
      <div className="text-center mt-20 mb-10">
        <ScrollLink to="features" smooth={true} duration={500} className="underline cursor-pointer hover:text-blue-300 transition">
          Explore Features Again
        </ScrollLink>
      </div>
      
    </main>
  );
}




