// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white">

      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-20">
        <h1 className="text-5xl font-bold mb-4">ChatBoost</h1>
        <p className="text-lg mb-6">
          Turn your website into a 24/7 customer service agent using AI. Enhance your user experience with automated support that never sleeps!
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-32 max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Why ChatBoost?</h2>
        <div className="grid md:frid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-blue-700 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
            <p className="text-center">Never miss a customers question again with real-time AI chat support.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-blue-700 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
            <p className="text-center">Engage visitors with human-like, helpful interactions.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-blue-700 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Boost Conversions</h3>
            <p className="text-center">Turn chats into customers by offering immediate assistance.</p>
          </div>

            {/* Pricing / CTA Section */}
            <section className="mt-32 max-w-3xl w-full text-center">
              <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
              <p className="text-lg mb-12">Start with a 7-day free trial. Cancel anytime.</p>

              <div className="bg-blue-700 rounded-xl p-8 shadow-xl">
                <h3 className="text-4xl font-bold mb-4">$29<span className="text-xl font-normal">/month</span></h3>
                <p className="mb-6">Unlimited chats. Full access. No hidden fees.</p>
                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Start Free Trial
                </button>
              </div>
            </section>

        </div>
      </section>

    </main>
  );
}

