export  function WordpressMaintenance() {
  const features = [
    "WordPress Core Updates",
    "Plugin & Theme Updates",
    "Daily Cloud Backups",
    "Security Monitoring",
    "Malware Removal",
    "Speed Optimization",
    "Monthly Reports",
    "Priority Support",
  ];

  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="px-5 py-2 rounded-full border border-zinc-700 bg-zinc-900">
            Website Maintenance
          </span>

          <h1 className="mt-8 text-7xl font-black leading-tight">
            WordPress Maintenance
            <span className="block text-orange-500">Services</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-400">
            Keep your website secure, updated and running smoothly
            with professional WordPress maintenance.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold">
            Get Started
          </button>

        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-400 mt-2">Websites Managed</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">99.9%</h3>
            <p className="text-gray-400 mt-2">Uptime</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            What's Included
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition"
              >
                <div className="text-orange-500 text-4xl mb-4">✓</div>

                <h3 className="font-semibold text-xl mb-3">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Professional website maintenance service.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-12 border border-zinc-700">

            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              Most Popular
            </span>

            <h3 className="text-3xl font-bold mt-6">
              Maintenance Plan
            </h3>

            <div className="my-8">
              <span className="text-7xl font-bold">
                ₹4,999
              </span>
              <span className="text-gray-400 text-xl">
                /month
              </span>
            </div>

            <button className="w-full bg-orange-500 py-4 rounded-xl font-semibold">
              Start Maintenance
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}
