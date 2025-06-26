import { Package, Video, Crown, Percent } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: any, 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <div 
      className="service-card group" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="w-14 h-14 rounded-2xl bg-navy-100 flex items-center justify-center mb-6 transition-colors group-hover:bg-navy-800">
        <Icon className="w-7 h-7 text-navy-800 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-navy-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="about-us" className="section">
      <div className="container">
        <h2 className="section-title text-center mb-16" data-aos="fade-up">
          Why <span className="highlight-container">
            <span className="highlight-bg py-1 px-2"></span>
            <span className="text-white relative z-10 px-2">Choose</span>
          </span> <span className="text-navy-600">us?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={Package}
            title="Our Services"
            description="We specialize in automating Shorts, TikToks, Instagram Reels, and more to streamline your content workflow. Maximize productivity while we efficiently manage your content, allowing you to focus on growing your brand across multiple platforms."
            delay={0}
          />
          
          <ServiceCard 
            icon={Video}
            title="Short Form Automation"
            description="We will Automate your short video creation process for platforms like YouTube, TikTok, and Instagram. Save time and effort while we take care of creating and uploading for you!"
            delay={100}
          />
          
          <ServiceCard 
            icon={Crown}
            title="0% AI"
            description="Our team exclusively provides manual work, ensuring precision and quality that AI cannot match. While AI is efficient, it lacks the adaptability and attention to detail that a skilled professional brings to each task."
            delay={200}
          />
          
          <ServiceCard 
            icon={Percent}
            title="Affordability"
            description="We get it! Not everyone can afford high prices. We offer high-quality services at affordable rates, making professional content automation and growth strategies accessible to all creators!"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;