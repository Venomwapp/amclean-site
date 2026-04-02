import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MetallicText from '@/components/ui/MetallicText';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(215 55% 45%) 0%, hsl(215 65% 55%) 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white tracking-wider">Devis gratuit en 24h</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('cta.title')}
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t('cta.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-white text-accent hover:bg-white/90 text-lg md:text-xl px-10 md:px-14 py-7 md:py-8 rounded-full font-medium group shadow-xl">
                  <span>{t('cta.button')}</span>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              Toute la Belgique
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
