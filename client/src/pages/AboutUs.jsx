import React from 'react';

function AboutUs() {
   return (
    <section className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] bg-white text-gray-800 rounded-3xl shadow-xl p-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          🎬 About CinemaCloud
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          Welcome to <strong>CinemaCloud</strong> — your seamless gateway to the world of cinema!  
          We’re dedicated to building a <em>fast, intuitive, fully digital</em> movie ticketing experience.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">What We Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Browse movies by theatre, date, or genre</li>
              <li>Select showtimes and seats with an interactive map</li>
              <li>Purchase securely with instant confirmations</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Convenience:</strong> Book anytime, any device</li>
              <li><strong>Accuracy:</strong> Real-time seat availability</li>
              <li><strong>Secure:</strong> Trusted payment gateways</li>
              <li><strong>User‑focused:</strong> Enjoy booking history & quick rebooking</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe booking movie tickets should be as enjoyable as the movie itself.  
            Our goal: make cinema accessible, stress-free, and magical —  
            from search to seat. <strong>Sit back, click, and enjoy! 🍿</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
