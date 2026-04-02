import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';

const majorCities = [
  'Bruxelles', 'Anvers', 'Gand', 'Liège', 'Charleroi',
  'Bruges', 'Namur', 'Louvain', 'Mons', 'Malines',
];

const CoverageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <MapPin className="w-10 h-10 text-accent" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <MetallicText variant="silver">{t('coverage.title')}</MetallicText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('coverage.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Belgium Map Visual */}
        <ScrollReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[16/9] rounded-3xl bg-card border border-border shadow-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="relative w-3/4 h-3/4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/50 to-accent/5 rounded-[40%_60%_50%_50%/60%_40%_60%_40%]" />
                  
                  {majorCities.map((city, i) => {
                    const positions = [
                      { top: '30%', left: '50%' }, { top: '15%', left: '70%' },
                      { top: '20%', left: '30%' }, { top: '50%', left: '85%' },
                      { top: '70%', left: '45%' }, { top: '10%', left: '20%' },
                      { top: '60%', left: '70%' }, { top: '25%', left: '55%' },
                      { top: '75%', left: '30%' }, { top: '20%', left: '60%' },
                    ];
                    
                    return (
                      <motion.div
                        key={city}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="absolute"
                        style={positions[i]}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="relative"
                        >
                          <div className="w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                          <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping opacity-75" />
                        </motion.div>
                        {i < 5 && (
                          <span className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
                            {city}
                          </span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-md">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">100% Belgique Couverte</span>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* City Grid */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
            {majorCities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all cursor-default"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground/70">{city}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground mt-6"
        >
          {t('coverage.more')}
        </motion.p>
      </div>
    </section>
  );
};

export default CoverageSection;
