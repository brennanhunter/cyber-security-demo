import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Penetration Testing', href: '/services/penetration-testing' },
    { name: 'Red Team Operations', href: '/services/red-team' },
    { name: 'Security Awareness Training', href: '/services/training' },
    { name: 'Compliance Services', href: '/services/compliance' },
    { name: 'Incident Response', href: '/services/incident-response' },
  ],
  company: [
    { name: 'About Us', href: '/company/about' },
    { name: 'Leadership', href: '/company/leadership' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Contact', href: '/company/contact' },
    { name: 'Certifications', href: '/company/certifications' },
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Whitepapers', href: '/resources/whitepapers' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Security Tools', href: '/resources/tools' },
    { name: 'Reports', href: '/resources/reports' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Security Policy', href: '/legal/security' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-raisin-black to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-steel-pink mr-3" />
                <div>
                  <div className="glitch text-2xl font-bold tracking-wider" data-text="S.C.P">
                    S.C.P
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    Secure Contain Protect
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                World-Leading Cybersecurity Powered By AI. Standing as the Ultimate Defenders 
                of the Global Digital Ecosystem, Protecting Connections and Securing a Resilient Future.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-steel-pink" />
                  <span>contact@scp-cyber.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-steel-pink" />
                  <span>+1 (555) 123-CYBER</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-steel-pink" />
                  <span>Global Headquarters, Digital Fortress</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay <span className="text-steel-pink">Secure</span> & Informed
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest cybersecurity insights, threat intelligence, and security updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-steel-pink focus:border-transparent"
              />
              <button className="px-6 py-3 bg-steel-pink hover:bg-steel-pink/80 text-white rounded-lg font-medium transition-colors duration-200 pulse-glow">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 S.C.P Cybersecurity. All rights reserved.</p>
              <p className="mt-1">
                Powered by cutting-edge AI technology and human expertise.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-steel-pink transition-colors duration-200 p-2 hover:bg-white/5 rounded-lg"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="py-6 border-t border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 rounded-full">
              <Shield className="h-4 w-4 text-steel-pink mr-2" />
              <span className="text-sm font-medium text-gray-300">
                SOC 2 Type II Certified • ISO 27001 Compliant • Zero Trust Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
