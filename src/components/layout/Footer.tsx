import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import amCleanLogo from '@/assets/am-clean-logo.png';

const Footer = () => {
  const { t } = useTranslation();

  const serviceLinks = [
    { path: '/services#commercial', label: t('services.commercial.title') },
    { path: '/services#condo', label: t('services.condo.title') },
    { path: '/services#specialized', label: t('services.specialized.title') },
    { path: '/services#outdoor', label: t('services.outdoor.title') },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/amclean.be/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/am-clean-be/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/32477920961', label: 'WhatsApp' },
  ];

  const contactInfo = [
    { icon: Phone, value: '+32 470 48 53 42', href: 'tel:+32470485342', label: null },
    { icon: Mail, value: 'hello@amclean.be', href: 'mailto:hello@amclean.be', label: null },
    { icon: MapPin, value: 'Toute la Belgique', href: null, label: null },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'hsl(220 20% 12%)' }}>
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <motion.div whileHover={{ scale: 1.05 }}>
                <img 
                  src={amCleanLogo}
                  alt="AM Clean"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.services')}</h4>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/40 hover:text-white/80 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.contact')}</h4>
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-white/40 hover:text-white/80 transition-colors">
                      {item.label && <span className="text-xs mr-1">({item.label})</span>}
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white/40">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('footer.follow')}</h4>
            
            <motion.a
              href="https://wa.me/32477920961?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/[0.05] border border-white/[0.1] hover:border-white/20 text-white rounded-xl font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t('nav.contact')}
              </Link>
            </motion.div>

            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <p>© 2025 AM Clean - {t('footer.rights')}</p>
            <p className="text-white/20 text-xs">TVA: BE 0766.610.794</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white/60 transition-colors">
                {t('footer.privacy')}
              </Link>
              <a href="https://amclean.be" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                amclean.be
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
