import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Users, Camera } from 'lucide-react';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';

const features = [
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Every photo is infused with our genuine love for capturing beautiful moments.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized nationally for excellence in portrait and event photography.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: Camera,
    title: 'Premium Equipment',
    description: 'State-of-the-art cameras and lighting to ensure stunning, high-quality images.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-rose opacity-20 rounded-2xl" />
              <img
                src={portfolioFashion}
                alt="About Fresh Frame Studio"
                className="relative rounded-2xl shadow-large w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-background rounded-2xl shadow-large p-6 text-center"
              >
                <div className="font-display text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <span className="text-sm font-medium text-secondary-foreground">About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crafting Visual Stories with{' '}
              <span className="text-gradient-rose">Heart & Soul</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              At Fresh Frame Studio, we believe every moment deserves to be captured
              with artistry and emotion. Founded with a passion for photography, we've
              spent over a decade perfecting our craft and building lasting relationships
              with our clients.
            </p>

            <p className="text-muted-foreground mb-10">
              Our team of skilled photographers combines technical expertise with
              creative vision to deliver images that speak volumes. Whether it's a
              wedding, a corporate event, or an intimate portrait session, we approach
              each project with dedication and enthusiasm.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-background shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-rose flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
