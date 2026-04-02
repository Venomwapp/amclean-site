import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import MetallicText from '@/components/ui/MetallicText';
import { useIsMobile } from '@/hooks/use-mobile';
import heroImage from '@/assets/hero-clean-office.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.15,
        delayChildren: isMobile ? 0.1 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 30 : 60, ...(isMobile ? {} : { filter: 'blur(10px)' }) },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: isMobile ? 0.5 : 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Clean professional office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container-custom relative z-10 pt-32 pb-24"
        style={{ y }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow text */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
                {t('hero.badge_reliable')}
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="display-text-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground/50 mb-4">
              {t('hero.title_line1')}
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="display-text-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <MetallicText variant="gold">
                {t('hero.title_line2')}
              </MetallicText>
            </h1>
          </motion.div>

          {/* Decorative divider */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-accent/50" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 tracking-wide leading-relaxed"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link to="/contact">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Button className="relative btn-accent text-sm md:text-base px-10 md:px-12 py-7 group">
                  <span className="tracking-wider uppercase font-medium">{t('hero.cta_primary')}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/services">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="ghost" 
                  className="text-sm md:text-base px-10 py-7 text-foreground/70 hover:text-foreground hover:bg-foreground/5 border border-border tracking-wider uppercase"
                >
                  {t('hero.cta_secondary')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mt-16 flex-wrap justify-center"
          >
            {[
              { value: '7+', label: t('trust.years') },
              { value: '500+', label: t('trust.clients') },
              { value: '98%', label: t('trust.satisfaction') },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <span className="text-2xl font-display font-bold text-gold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                {i < 2 && <div className="w-px h-8 bg-border ml-5" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default HeroSection;
