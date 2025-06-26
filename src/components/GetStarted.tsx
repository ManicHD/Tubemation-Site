import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    channelUrl: '',
    discord: '',
    details: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-navy-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          {!isSubmitted ? (
            <>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready To <span className="text-red-600">Get</span> Automated?
              </h1>
              <p className="text-3xl md:text-4xl font-light text-white/90">Let's Talk</p>
            </>
          ) : (
            <div className="animate-fade-up">
              <div className="inline-block mb-6 animate-bounce">
                <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Thank <span className="text-green-400">You!</span>
              </h1>
              <p className="text-2xl md:text-3xl font-light text-white/90">
                We'll reach out soon!
              </p>
            </div>
          )}
        </div>

        {!isSubmitted ? (
        <form 
          onSubmit={handleSubmit}
          className="bg-navy-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="firstName" className="block text-white/90 text-sm font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-white/90 text-sm font-medium mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="channelUrl" className="block text-white/90 text-sm font-medium mb-2">
              Enter Channel, Company, etc. URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="channelUrl"
              name="channelUrl"
              required
              value={formData.channelUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="https://"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="discord" className="block text-white/90 text-sm font-medium mb-2">
              Discord Username (if you have one)
            </label>
            <input
              type="text"
              id="discord"
              name="discord"
              value={formData.discord}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="Enter your Discord username"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="details" className="block text-white/90 text-sm font-medium mb-2">
              Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              value={formData.details}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-navy-700/50 border border-navy-600 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project and goals..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-lg font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
        ) : (
        <div className="bg-navy-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-white/10">
          <div className="space-y-6">
            <div className="text-white text-lg font-medium drop-shadow-lg">
              Thank you for reaching out, <span className="text-green-400 font-semibold">{formData.firstName}</span>!
            </div>
            <div className="text-white/90 text-base drop-shadow-lg">
              We've received your information and will get back to you within 24 hours.
            </div>
            <div className="text-white/80 text-sm drop-shadow-lg">
              Keep an eye on your inbox for our response.
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;