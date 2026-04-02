import Layout from '@/components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Home, Wrench, Trees, Check, ArrowRight, Droplets, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';

const Services = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const generalItems = t('services.page.general_items', { returnObjects: true }) as string[];

  const serviceCategories = [
    {
      id: 'commercial', icon: Building2,
      title: t('services.commercial.title'), description: t('services.commercial.description'),
      items: [
        { title: t('services.page.offices'), desc: t('services.page.offices_desc') },
        { title: t('services.page.clinics'), desc: t('services.page.clinics_desc') },
        { title: t('services.page.bakeries'), desc: t('services.page.bakeries_desc') },
        { title: t('services.page.retail'), desc: t('services.page.retail_desc') },
        { title: t('services.page.hotels'), desc: t('services.page.hotels_desc') },
        { title: t('services.page.schools'), desc: t('services.page.schools_desc') },
        { title: t('services.page.industries'), desc: t('services.page.industries_desc') },
        { title: t('services.page.casinos'), desc: t('services.page.casinos_desc') },
        { title: t('services.page.car_dealerships'), desc: t('services.page.car_dealerships_desc') },
      ],
    },
    {
      id: 'condo', icon: Home,
      title: t('services.page.condo_title'), description: t('services.condo.description'),
      items: [
        { title: t('services.page.condo_main'), desc: t('services.page.condo_main_desc') },
        { title: t('services.page.syndic'), desc: t('services.page.syndic_desc') },
        { title: t('services.page.end_lease'), desc: t('services.page.end_lease_desc') },
      ],
    },
    {
      id: 'specialized', icon: Wrench,
      title: t('services.page.specialized_title'), description: t('services.specialized.description'),
      items: [
        { title: t('services.page.disinfection'), desc: '' },
        { title: t('services.page.windows'), desc: '' },
        { title: t('services.page.high_windows'), desc: '' },
        { title: t('services.page.solar_panels'), desc: '' },
        { title: t('services.page.osmosis'), desc: '' },
        { title: t('services.page.glass_roofs'), desc: '' },
        { title: t('services.page.moving'), desc: '' },
        { title: t('services.page.construction'), desc: '' },
      ],
    },
    {
      id: 'surfaces', icon: Droplets,
      title: t('services.page.surfaces_title'), description: t('services.page.surfaces_desc'),
      items: [
        { title: t('services.page.floor_treatment'), desc: t('services.page.floor_treatment_desc') },
      ],
    },
    {
      id: 'outdoor', icon: Trees,
      title: t('services.page.outdoor_title'), description: t('services.outdoor.description'),
      items: [
        { title: t('services.page.facades'), desc: '' },
        { title: t('services.page.outdoor_spaces'), desc: '' },
        { title: t('services.page.stairs'), desc: '' },
        { title: t('services.page.garages'), desc: '' },
        { title: t('services.page.terraces'), desc: '' },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-secondary/30"
        style={{ opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <motion.div className="container-custom relative z-10 text-center pt-28" style={{ y: heroY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/5 border border-accent/20 mb-10"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium">Solutions Complètes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-wide"
          >
            <span className="text-foreground/50">{t('services.page.title').split(' ').slice(0, 2).join(' ')}</span>
            <br />
            <MetallicText variant="gold">
              {t('services.page.title').split(' ').slice(2).join(' ') || 'Premium'}
            </MetallicText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto tracking-wide"
          >
            {t('services.page.subtitle')}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={category.id}
          id={category.id} 
          className={`section-padding ${categoryIndex % 2 === 1 ? 'bg-secondary/30' : 'bg-background'}`}
        >
          <div className="container-custom">
            <ScrollReveal direction={categoryIndex % 2 === 0 ? 'left' : 'right'}>
              <div className="flex flex-col lg:flex-row items-start gap-16 mb-12">
                <div className="lg:w-1/3 lg:sticky lg:top-32">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8"
                  >
                    <category.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wide">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="lg:w-2/3 w-full">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -3 }}
                        className="group"
                      >
                        <div className="relative bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <Check className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                              {item.desc && <p className="text-sm text-muted-foreground">{item.desc}</p>}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* General Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">Notre Engagement</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-wide text-foreground">
                {t('services.page.general_title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {generalItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border shadow-sm transition-all h-full"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(215 55% 45%) 0%, hsl(215 65% 55%) 100%)' }}>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-white/60 mb-6">Prêt à commencer ?</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-wide text-white">{t('cta.title')}</h2>
            <p className="text-lg text-white/70 mb-10 tracking-wide">{t('cta.subtitle')}</p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button className="bg-white text-accent hover:bg-white/90 text-sm tracking-wider uppercase px-10 py-6 rounded-full font-medium group shadow-xl">
                  {t('cta.button')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
