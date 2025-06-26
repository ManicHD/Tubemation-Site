import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "VBRemix",
    avatar: "https://i.imgur.com/3duc8kH.jpg",
    quote: "Through Tubemation I was able to get Monetized Again! They Also performed daily uploads and managed my channel.",
    stats: {
      before: "5,102,385",
      after: "12,342,768",
      increase: "142%"
    }
  }
];

const Testimonials = () => {
  const testimonial = testimonials[0];

  return (
    <section className="section bg-navy-900 text-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <div className="relative bg-navy-800 rounded-3xl p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-xl italic mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="bg-navy-700 rounded-xl p-4">
                  <div className="text-sm text-navy-300 mb-2">Channel Growth</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-navy-300">Before</div>
                      <div className="text-lg font-bold">{testimonial.stats.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-navy-300">After</div>
                      <div className="text-lg font-bold">{testimonial.stats.after}</div>
                    </div>
                    <div>
                      <div className="text-xs text-navy-300">Increase</div>
                      <div className="text-lg font-bold text-green-400">+{testimonial.stats.increase}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="bg-navy-800 rounded-3xl p-6 shadow-xl">
                <img 
                  src="https://i.imgur.com/9o258xo.jpg" 
                  alt="Analytics Dashboard" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mt-6 p-4 bg-navy-700 rounded-xl">
                  <h4 className="text-xl font-bold mb-2">Nice! Shorts helped your channel get 1.2 times more views in the last 28 days.</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-navy-300">Views</div>
                      <div className="text-lg font-bold">9.2M</div>
                      <div className="text-xs text-green-400">+18% from last month</div>
                    </div>
                    <div>
                      <div className="text-sm text-navy-300">Estimated Revenue</div>
                      <div className="text-lg font-bold">$961.26</div>
                      <div className="text-xs text-green-400">+24% from last month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;