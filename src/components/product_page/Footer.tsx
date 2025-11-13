// ...existing code...
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Offshore Developers', href: '/offshore-developer' },
  { name: 'Products', href: '/products' },
  { name: 'Our Expertise', href: '/our-expertise' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Software Development',
  'Mobile App Development',
  'Application Modernization',
  'CRM Development Services',
  'ERP Software',
  'Data Analytics',
  'DevOps Service',
  'Cloud Consulting',
  'Staff Augmentation',
  'Hire Developers',
];

const industries = [
  'FinTech',
  'Insurtech',
  'Proptech',
  'EdTech',
  'Media & Entertainment',
  'Healthcare',
  'Retail',
  'Facility Management',
  'Supply Chain & Logistics',
  'Telecom',
  'Travel & Hospitality',
];

const offshore = [
  'Hire Backend Developer',
  'Hire Frontend Developer',
  'Hire App Developer',
  'Hire AI Engineer',
  'Hire Full Stack Developer',
  'Hire Salesforce Developer',
  'Hire PowerApps Developers',
];

const resources = ['Portfolio', 'Careers', 'Blog', 'Our Team', 'Interns'];

const locations = [
  { img: '/assets/flags/india.png', name: 'India' },
  { img: '/assets/flags/usa.png', name: 'New York, USA' },
  { img: '/assets/flags/australia.png', name: 'Sydney, Australia' },
  { img: '/assets/flags/uae.png', name: 'Dubai, UAE' },
  { img: '/assets/flags/uk.png', name: 'London, UK' },
  { img: '/assets/flags/italy.png', name: 'Milan, Italy' },
  { img: '/assets/flags/thailand.png', name: 'Thailand' },
  { img: '/assets/flags/south-africa.png', name: 'South Africa' },
  { img: '/assets/flags/canada.png', name: 'Canada' },
];

const Footer: React.FC = () => {
  return (
    // footer full width, inner container centered and children take available space
    <footer className="w-full bg-hero-noir text-white">
      <div className="max-w-7xl w-full mx-auto px-6 py-12">
        {/* Newsletter (title + subscribe centered) */}
        <div className="mb-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Subscribe To Our Newsletter</h3>

          <form className="max-w-md mx-auto">
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 py-3 px-4 rounded-l-md focus:outline-none bg-white text-black placeholder:text-black/60"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="py-3 px-5 bg-blue-600 text-white font-medium rounded-r-md"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Links columns - distribute space between columns, larger line-height between links */}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 text-sm">
          <div className="md:flex-1 md:min-w-0">
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-3 leading-relaxed">
              {companyLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-white/90 hover:text-white">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex-1 md:min-w-0">
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-3 leading-relaxed">
              {services.map((s) => (
                <li key={s} className="text-white/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex-1 md:min-w-0">
            <h4 className="font-semibold mb-3">Industries</h4>
            <ul className="space-y-3 leading-relaxed">
              {industries.map((i) => (
                <li key={i} className="text-white/90">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex-1 md:min-w-0">
            <h4 className="font-semibold mb-3">Offshore Developers</h4>
            <ul className="space-y-3 leading-relaxed">
              {offshore.map((o) => (
                <li key={o} className="text-white/90">
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex-1 md:min-w-0">
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-3 leading-relaxed">
              {resources.map((r) => (
                <li key={r} className="text-white/90">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          {locations.map((loc) => (
            <div key={loc.name} className="flex items-center space-x-2">
              <img src={loc.img} alt={loc.name} className="w-5 h-5 object-cover" />
              <span className="text-white/90">{loc.name}</span>
            </div>
          ))}
        </div>

        <hr className="my-6 border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-medium">Follow us</span>
            <div className="flex items-center gap-3 text-blue-500">
              <a href="#" aria-label="Instagram" className="p-1 text-blue-500"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="p-1 text-blue-500"><FaLinkedinIn className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="p-1 text-blue-500"><FaFacebookF className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="p-1 text-blue-500"><FaTwitter className="w-5 h-5" /></a>
              <a href="#" aria-label="YouTube" className="p-1 text-blue-500"><FaYoutube className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="text-center text-white/80">
            © 2016-2025 Alpixm Technologies Private Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a className="text-white/90 hover:text-white" href="/privacy">Privacy Policy</a>
            <span className="text-white/40">|</span>
            <a className="text-white/90 hover:text-white" href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;