import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, Users, Building2, Baby, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capture every magical moment of your special day with our romantic and artistic approach.',
    features: ['Full day coverage', 'Engagement shoot', 'Premium album'],
    price: 'From $2,500',
  },
  {
    icon: Users,
    title: 'Family Portraits',
    description: 'Create timeless family memories with natural, candid shots that showcase genuine connections.',
    features: ['Indoor/Outdoor options', 'Multiple outfit changes', 'Digital gallery'],
    price: 'From $350',
  },
  {
    icon: Camera,
    title: 'Fashion & Editorial',
    description: 'High-end fashion photography for models, brands, and magazines with a creative edge.',
    features: ['Studio sessions', 'Location shoots', 'Retouching included'],
    price: 'From $800',
  },
  {
    icon: Building2,
    title: 'Corporate Headshots',
    description: 'Professional headshots and team photos that elevate your business image.',
    features: ['On-site available', 'Quick turnaround', 'LinkedIn ready'],
    price: 'From $200',
  },
  {
    icon: Baby,
    title: 'Newborn & Maternity',
    description: 'Tender, intimate photography celebrating new life and the journey of motherhood.',
    features: ['Props provided', 'Sibling shots', 'Flexible scheduling'],
    price: 'From $400',
  },
  {
    icon: ShoppingBag,
    title: 'Product Photography',
    description: 'Stunning product images that drive sales and showcase your merchandise beautifully.',
    features: ['E-commerce ready', 'Lifestyle shots', 'White background'],
    price: 'From $150',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">Our Services</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Photography Services{' '}
            <span className="text-gradient-rose">Tailored for You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From intimate portraits to grand celebrations, we offer a comprehensive range
            of photography services to meet your every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-rose flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="font-display text-lg font-semibold text-primary">
                  {service.price}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn"
                  onClick={scrollToContact}
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-rose opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We offer custom packages too!
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
