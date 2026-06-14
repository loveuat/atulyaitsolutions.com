export  function NextGenerationTheme() {
  const features = [
    "Elementor Ready",
    "WooCommerce Ready",
    "SEO Optimized",
    "Mobile Responsive",
    "One Click Demo Import",
    "Lightning Fast",
    "Lifetime Updates",
    "Premium Support",
  ];

  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="px-5 py-2 rounded-full border border-border bg-card text-card-foreground">
            Premium WordPress Theme
          </span>

          <h1 className="mt-8 text-7xl font-black leading-tight">
            Next Generation
            <span className="block text-orange-500">
              WordPress Theme
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl text-muted-foreground">
            Modern, fast and SEO-friendly WordPress theme
            built for agencies, startups and businesses.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold">
            Buy Theme
          </button>

        </div>
      </section>

      {/* Demo Stats */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">20+</h3>
            <p className="text-gray-400 mt-2">Homepage Layouts</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">100+</h3>
            <p className="text-muted-foreground mt-2">Custom Blocks</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-500">1000+</h3>
            <p className="text-muted-foreground mt-2">Happy Customers</p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Theme Features
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500 transition"
              >
                <div className="text-orange-500 text-4xl mb-4">⚡</div>

                <h3 className="font-semibold text-xl mb-3">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Premium feature included with theme.
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
              Best Seller
            </span>

            <h3 className="text-3xl font-bold mt-6">
              Theme License
            </h3>

            <div className="my-8">
              <span className="text-7xl font-bold">
                ₹14,999
              </span>
              <span className="text-gray-400 text-xl">
                One Time
              </span>
            </div>

            <button className="w-full bg-orange-500 py-4 rounded-xl font-semibold">
              Purchase Theme
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}