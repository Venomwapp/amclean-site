import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';

const clientLogos = [
  { name: 'Law Firm Brussels', initials: 'LFB' },
  { name: 'Medical Center', initials: 'MC' },
  { name: 'Hotel Prestige', initials: 'HP' },
  { name: 'Tech Corp', initials: 'TC' },
  { name: 'Finance Group', initials: 'FG' },
  { name: 'Clinic Plus', initials: 'CP' },
];

const trustIndicators = [
  { icon: Shield, label: 'trust.guaranteed' },
  { icon: Award, value: '7+', label: 'trust.experience' },
  { icon: Users, value: '500+', label: 'trust.clients' },
  { icon: Star, value: '98%', label: 'trust.satisfaction' },
];

const TrustSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6"
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent tracking-wider uppercase font-medium">{t('trust.badge')}</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <MetallicText variant="gold">{t('trust.title')}</MetallicText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('trust.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Client Logos Marquee */}
        <ScrollReveal delay={0.2}>
          <div className="relative mb-16 overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, duration: 20, ease: 'linear' } }}
              className="flex gap-8"
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-32 h-16 rounded-xl border border-border bg-card"
                >
                  <span className="text-lg font-semibold text-muted-foreground/40">{logo.initials}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {trustIndicators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-all text-center h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 + index * 0.1 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center"
                  >
                    <item.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  
                  <div className="stats-number text-3xl md:text-4xl font-bold mb-2 min-h-[2.5rem] flex items-center justify-center">
                    {item.value ? (
                      <MetallicText variant="gold">{item.value}</MetallicText>
                    ) : (
                      <MetallicText variant="gold">✓</MetallicText>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {t(item.label)}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
