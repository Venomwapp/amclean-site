import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';
import serviceCommercial from '@/assets/service-commercial.jpg';
import serviceCondo from '@/assets/service-condo.jpg';
import serviceSpecialized from '@/assets/service-specialized.jpg';
import serviceOutdoor from '@/assets/service-outdoor.jpg';

const ServicesOverview = () => {
  const { t } = useTranslation();

  const services = [
    {
      image: serviceCommercial,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      cta: t('services.commercial.cta'),
      link: '/services#commercial',
    },
    {
      image: serviceCondo,
      title: t('services.condo.title'),
      description: t('services.condo.description'),
      cta: t('services.condo.cta'),
      link: '/services#condo',
    },
    {
      image: serviceSpecialized,
      title: t('services.specialized.title'),
      description: t('services.specialized.description'),
      cta: t('services.specialized.cta'),
      link: '/services#specialized',
    },
    {
      image: serviceOutdoor,
      title: t('services.outdoor.title'),
      description: t('services.outdoor.description'),
      cta: t('services.outdoor.cta'),
      link: '/services#outdoor',
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent tracking-wider uppercase font-medium">Nos Expertises</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <MetallicText variant="silver">{t('services.title')}</MetallicText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link to={service.link} className="block group">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-lg"
                >
                  {/* Photo */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <div className="relative z-10 p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>{service.cta}</span>
                      <motion.div className="group-hover:translate-x-2 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
