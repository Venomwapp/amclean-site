import Layout from '@/components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, Send, Globe, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MetallicText from '@/components/ui/MetallicText';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const features = t('contact.features', { returnObjects: true }) as string[];
  const formRef = useRef<HTMLFormElement>(null);
  const [service, setService] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string || '';
    const company = formData.get('company') as string || '';
    const email = formData.get('email') as string || '';
    const phone = formData.get('phone') as string || '';
    const message = formData.get('message') as string || '';

    const text = encodeURIComponent(
      `Bonjour, je souhaite demander un devis.\n\n` +
      `Nom: ${name}\n` +
      (company ? `Entreprise: ${company}\n` : '') +
      `Email: ${email}\n` +
      `Tél: ${phone}\n` +
      (service ? `Service: ${service}\n` : '') +
      (frequency ? `Fréquence: ${frequency}\n` : '') +
      (message ? `Message: ${message}` : '')
    );

    window.open(`https://wa.me/32477920961?text=${text}`, '_blank');
    toast.success(t('contact.success.title'), { description: t('contact.success.message') });
    formRef.current?.reset();
    setService('');
    setFrequency('');
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, title: t('contact.info.phone'), items: [
      { label: '🇳🇱 🇫🇷 NL/FR', value: '0470 48 53 42', href: 'tel:+32470485342' },
      { label: '🇫🇷 FR', value: '0477 92 09 61', href: 'tel:+32477920961' },
    ]},
    { icon: Mail, title: t('contact.info.email'), items: [
      { label: 'Email', value: 'info@amclean.be', href: 'mailto:info@amclean.be' },
    ]},
    { icon: Globe, title: 'Website', items: [
      { label: 'Web', value: 'amclean.be', href: 'https://amclean.be' },
    ]},
    { icon: MapPin, title: t('contact.info.area'), items: [
      { label: '', value: t('contact.info.area_value'), href: null },
    ]},
    { icon: Clock, title: t('contact.info.availability'), items: [
      { label: '', value: t('contact.info.availability_value'), href: null },
    ]},
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', handle: '@amclean.be', href: 'https://www.instagram.com/amclean.be/' },
    { icon: Linkedin, label: 'LinkedIn', handle: 'AM Clean', href: 'https://www.linkedin.com/company/am-clean-be/' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container-custom relative z-10 text-center py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/5 border border-accent/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium">Devis gratuit en 24h</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wide">
              <MetallicText variant="gold">{t('contact.title')}</MetallicText>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto tracking-wide"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 md:p-10 space-y-6 border border-border shadow-lg"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-foreground">Demandez votre devis</h2>
                    <p className="text-sm text-muted-foreground">Réponse garantie sous 24h</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder={t('contact.form.name')} required className="h-12 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-colors" />
                  <Input name="company" placeholder={t('contact.form.company')} className="h-12 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-colors" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="email" type="email" placeholder={t('contact.form.email')} required className="h-12 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-colors" />
                  <Input name="phone" type="tel" placeholder={t('contact.form.phone')} required className="h-12 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-colors" />
                </div>

                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="h-12 bg-secondary/50 border-border text-foreground">
                    <SelectValue placeholder={t('contact.form.service_options.placeholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="commercial">{t('contact.form.service_options.commercial')}</SelectItem>
                    <SelectItem value="condo">{t('contact.form.service_options.condo')}</SelectItem>
                    <SelectItem value="specialized">{t('contact.form.service_options.specialized')}</SelectItem>
                    <SelectItem value="outdoor">{t('contact.form.service_options.outdoor')}</SelectItem>
                    <SelectItem value="other">{t('contact.form.service_options.other')}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger className="h-12 bg-secondary/50 border-border text-foreground">
                    <SelectValue placeholder={t('contact.form.frequency_options.placeholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="once">{t('contact.form.frequency_options.once')}</SelectItem>
                    <SelectItem value="weekly">{t('contact.form.frequency_options.weekly')}</SelectItem>
                    <SelectItem value="monthly">{t('contact.form.frequency_options.monthly')}</SelectItem>
                    <SelectItem value="custom">{t('contact.form.frequency_options.custom')}</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea name="message" placeholder={t('contact.form.message')} rows={4} className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-accent/50 transition-colors resize-none" />

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button type="submit" className="w-full h-14 btn-accent text-sm tracking-wider uppercase rounded-xl font-medium" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>{t('contact.form.submit')}<Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-3 pt-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 space-y-6 border border-border shadow-md">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm mb-1 text-foreground">{info.title}</p>
                        {info.items.map((item, j) => (
                          <div key={j} className="text-muted-foreground">
                            {item.href ? (
                              <a href={item.href} className="hover:text-accent transition-colors inline-flex items-center gap-2" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                                {item.label && <span className="text-xs">{item.label}</span>}
                                <span>{item.value}</span>
                              </a>
                            ) : (
                              <span>{item.value}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href="https://wa.me/32477920961?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }}
                  className="group flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-xl font-medium shadow-lg shadow-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="tracking-wide">{t('contact.info.whatsapp')}</span>
                </motion.a>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="group flex items-center gap-3 p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <social.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="bg-card rounded-xl p-4 flex items-center gap-3 border border-border shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">TVA</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">N° TVA</p>
                    <p className="text-muted-foreground text-sm">BE 0766.610.794</p>
                  </div>
                </div>

                <div className="relative h-48 bg-card rounded-xl overflow-hidden border border-border shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">{t('contact.info.area_value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
