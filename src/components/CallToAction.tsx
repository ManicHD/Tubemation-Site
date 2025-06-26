import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Let's <span className="text-red-600 italic">Scale Your Content</span> to the <br /> Next Level!
          </h2>
          
          <div className="flex justify-center mt-10">
            <Link 
              to="/get-started" 
              className="btn btn-primary text-lg flex items-center gap-2 group"
            >
              START NOW
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;