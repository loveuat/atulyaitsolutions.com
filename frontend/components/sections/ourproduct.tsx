const products = [
  {
    title: "CRM Solution",
    price: "₹799/month",
    desc: "Manage customers, leads and sales efficiently.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Tracking",
      "Reports & Analytics",
    ],
  },
  {
    title: "ERP Software",
    price: "₹999/month",
    desc: "Complete business management platform.",
    features: [
      "Inventory Management",
      "Finance Module",
      "Purchase Management",
      "Business Reports",
    ],
  },
  {
    title: "HRMS System",
    price: "₹1999/month",
    desc: "Employee and payroll management.",
    features: [
      "Attendance Tracking",
      "Payroll",
      "Leave Management",
      "Employee Portal",
    ],
  },
];

export  function ProductGrid() {
  return (
    <section className="bg-gradient-to-b from-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
             <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Our <span className="text-gradient-orange">Products</span></h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Powerful software solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              {/* Price */}
              <div className="text-center border-b pb-6 mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  {product.title}
                </h3>

                <div className="text-5xl font-bold text-blue-600">
                  {product.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {product.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-gray-800">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}