import Layout from '@/components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Zap, Heart, Check, Users, Target, Shield, ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MetallicText from '@/components/ui/MetallicText';

const About = () => {
  const { t } = useTranslation();
  const commitments = t('about.page.commitments', { returnObjects: true }) as string[];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    { icon: Award, title: t('about.page.professionalism.title'), desc: t('about.page.professionalism.description') },
    { icon: Zap, title: t('about.page.flexibility.title'), desc: t('about.page.flexibility.description') },
    { icon: Heart, title: t('about.page.trust.title'), desc: t('about.page.trust.description') },
  ];

  const stats = [
    { value: '500+', label: 'Clients B2B', icon: Users },
    { value: '98%', label: 'Satisfaction', icon: Target },
    { value: '7+', label: "Années d'expérience", icon: Shield },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-secondary/30">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </motion.div>

        <motion.div style={{ opacity }} className="container-custom relative z-10 text-center py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 mb-10"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium">Excellence depuis 2019</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-wide"
          >
            <MetallicText variant="gold">{t('about.page.title')}</MetallicText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-wide"
          >
            {t('about.page.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-14"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-display font-bold text-gold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">{t('about.page.story_title')}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-accent" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-10">
                  {t('about.page.story')}
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">{t('about.page.values_title')}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wide">
                <MetallicText variant="silver">{t('about.page.values_title')}</MetallicText>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="group h-full">
                  <div className="relative h-full bg-card rounded-2xl p-10 border border-border shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-500 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center"
                    >
                      <v.icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-accent transition-colors">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">Ce qui nous distingue</span>
                <h2 className="text-2xl md:text-4xl font-display font-bold tracking-wide">
                  <MetallicText variant="gold">{t('about.page.commitment_title')}</MetallicText>
                </h2>
              </div>
              
              <div className="space-y-4">
                {commitments.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <div className="flex items-center gap-5 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg font-medium text-foreground">{c}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(215 55% 45%) 0%, hsl(215 65% 55%) 100%)' }}>
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-white/60 mb-6">Commençons ensemble</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-wide text-white">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto tracking-wide">
              {t('cta.subtitle')}
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button className="bg-white text-accent hover:bg-white/90 text-sm tracking-wider uppercase px-10 py-6 rounded-full font-medium group shadow-xl">
                  {t('cta.button')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
