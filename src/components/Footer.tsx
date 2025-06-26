import { Instagram, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 3L4 14H15L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Tubemation</span>
            </div>
            <p className="text-navy-300 mb-6">
              Specialized in automating short-form video content for creators, brands, and organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-navy-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-navy-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-navy-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Channel Management</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Thumbnail Design</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Analytics & Growth</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Monetization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-navy-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <p className="text-navy-300 mb-4">
              Have questions or ready to scale your content? Reach out to us today.
            </p>
            <a 
              href="mailto:hello@Tubemation.com" 
              className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
            >
              <Mail size={16} />
              <span>hello@Tubemation.com</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tubemation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-navy-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;