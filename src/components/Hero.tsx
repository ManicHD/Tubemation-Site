import { useEffect, useRef, useState } from 'react';
import { Check, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const words = ['Content', 'Videos', 'Shorts', 'Growth'];
    let wordIndex = 0;
    let isDeleting = false;
    let text = '';
    let delta = 200;

    function typeEffect() {
      const current = words[wordIndex];
      
      if (isDeleting) {
        text = current.substring(0, text.length - 1);
      } else {
        text = current.substring(0, text.length + 1);
      }
      
      if (textRef.current) {
        textRef.current.textContent = text;
      }

      if (!isDeleting && text === current) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delta = 500;
      } else {
        delta = isDeleting ? 100 : 200;
      }

      setTimeout(typeEffect, delta);
    }

    typeEffect();
  }, []);

  // Counter animation for the views number
  useEffect(() => {
    const target = 360000000;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automating Your <br />
              <span className="highlight-container">
                <span className="highlight-bg py-1 px-2"></span>
                <span className="text-white relative z-10 px-2" ref={textRef}>Content</span>
              </span>
              <br />
              Growth
            </h1>
            
            <p className="text-xl text-navy-600 mb-8">
              100% Manually Automated, No AI!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="btn btn-primary text-lg">
                Get Started Now
              </Link>
              <a href="#what-we-do" className="btn btn-outline text-lg">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center relative" data-aos="fade-left">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -right-8">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-14 h-14 text-red-500" fill="#f43f5e" />
                </div>
              </div>
              
              <div className="bg-navy-900 text-white rounded-2xl p-8 shadow-2xl">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                  {count.toLocaleString()}+
                </div>
                <div className="text-2xl mb-8">
                  Views Past 28 Days
                </div>
                
                <div className="bg-navy-800 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <div className="text-gray-400 text-sm">Total Reach</div>
                      <div className="text-2xl font-bold">9.2M+</div>
                      <div className="text-xs text-green-400">+15% from last month</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Watch Time (hours)</div>
                      <div className="text-2xl font-bold">53.7K+</div>
                      <div className="text-xs text-green-400">+8% average retention</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-gray-400 text-sm">Subscribers</div>
                      <div className="text-2xl font-bold">+12.7K</div>
                      <div className="text-xs text-green-400">+25% growth rate</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Estimated Revenue</div>
                      <div className="text-2xl font-bold">$961.26</div>
                      <div className="text-xs text-green-400">+18% increase</div>
                    </div>
                  </div>
                </div>
                
                <div className="h-40 w-full bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-full h-24" viewBox="0 0 200 50">
                      <path 
                        d="M0,25 Q20,5 40,25 T80,25 T120,25 T160,25 T200,25" 
                        fill="none" 
                        stroke="#4ade80" 
                        strokeWidth="2"
                        style={{
                          strokeDasharray: '300',
                          strokeDashoffset: '300',
                          animation: 'drawLine 3s ease-in-out forwards, pulse 2s ease-in-out infinite 3s'
                        }}
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-24" viewBox="0 0 200 50">
                      <path 
                        d="M0,35 Q20,15 40,25 T80,15 T120,35 T160,25 T200,15" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                        style={{
                          strokeDasharray: '300',
                          strokeDashoffset: '300',
                          animation: 'drawLine 3s ease-in-out forwards 0.5s, pulse 2s ease-in-out infinite 3.5s'
                        }}
                      />
                    </svg>
                  </div>
                  {/* Floating data points */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute w-2 h-2 bg-green-400 rounded-full"
                      style={{
                        left: '20%',
                        top: '30%',
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    ></div>
                    <div 
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        left: '60%',
                        top: '60%',
                        animation: 'float 3s ease-in-out infinite 1s'
                      }}
                    ></div>
                    <div 
                      className="absolute w-2 h-2 bg-red-400 rounded-full"
                      style={{
                        left: '80%',
                        top: '40%',
                        animation: 'float 3s ease-in-out infinite 2s'
                      }}
                    ></div>
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

export default Hero;