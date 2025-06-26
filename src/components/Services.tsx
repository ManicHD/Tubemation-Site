import { CheckCircle2 } from 'lucide-react';

const ServiceItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
      <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
      <span className="text-xl font-medium">{title}</span>
    </div>
  );
};

const Services = () => {
  return (
    <section id="what-we-do" className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
              What <span className="highlight-red">We</span> Do
            </h2>
            
            <div className="space-y-2">
              <ServiceItem title="Create & Edit Content" />
              <ServiceItem title="THUMBNAILS" />
              <ServiceItem title="Upload and Optimize for you" />
              <ServiceItem title="Channel MANAGEMENT" />
              <ServiceItem title="Find You Partnerships & Deals" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
              Who <span className="highlight-red">We Work</span> With
            </h2>
            
            <div className="space-y-2">
              <ServiceItem title="CONTENT CREATORS" />
              <ServiceItem title="ORGANIZATIONS" />
              <ServiceItem title="BRANDS" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;