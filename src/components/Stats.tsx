import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  label: string;
  value: string;
  delay?: number;
}

const StatItem = ({ label, value, delay = 0 }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const typeWriter = () => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= value.length) {
          setDisplayValue(value.slice(0, currentIndex) + (currentIndex < value.length ? '|' : ''));
          currentIndex++;
        } else {
          setDisplayValue(value);
          clearInterval(typeInterval);
        }
      }, 150);
    };

    const timer = setTimeout(typeWriter, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, value, delay]);

  return (
    <div className="text-center" data-aos="fade-up" ref={elementRef}>
      <h3 className="text-lg font-medium text-navy-600 mb-2">{label}</h3>
      <div className="stat-value min-h-[60px] flex items-center justify-center">
        {displayValue}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem label="Total Experience" value="5+ Yrs" delay={0} />
            <StatItem label="Total Views" value="10B+" delay={500} />
            <StatItem label="Clients" value="40+" delay={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;