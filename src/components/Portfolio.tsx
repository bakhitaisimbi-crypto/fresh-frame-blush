import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioCorporate from '@/assets/portfolio-corporate.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';
import portfolioNewborn from '@/assets/portfolio-newborn.jpg';
import portfolioFamily from '@/assets/portfolio-family.jpg';
import portfolioProduct from '@/assets/portfolio-product.jpg';

const categories = ['All', 'Wedding', 'Portrait', 'Fashion', 'Family', 'Product'];

const portfolioItems = [
  {
    id: 1,
    image: portfolioWedding,
    title: 'Romantic Garden Wedding',
    category: 'Wedding',
    description: 'A beautiful sunset ceremony',
  },
  {
    id: 2,
    image: portfolioCorporate,
    title: 'Executive Portrait',
    category: 'Portrait',
    description: 'Professional corporate headshot',
  },
  {
    id: 3,
    image: portfolioFashion,
    title: 'Editorial Fashion',
    category: 'Fashion',
    description: 'High-end fashion editorial',
  },
  {
    id: 4,
    image: portfolioNewborn,
    title: 'Precious Moments',
    category: 'Family',
    description: 'Newborn photography session',
  },
  {
    id: 5,
    image: portfolioFamily,
    title: 'Family Joy',
    category: 'Family',
    description: 'Candid family portrait',
  },
  {
    id: 6,
    image: portfolioProduct,
    title: 'Luxury Cosmetics',
    category: 'Product',
    description: 'Premium product photography',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">Our Portfolio</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Moments We've{' '}
            <span className="text-gradient-rose">Captured</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Browse through our collection of cherished memories and artistic captures
            that showcase our passion for photography.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-large transition-shadow"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-500 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Content */}
              <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end"
                initial={false}
                animate={{
                  opacity: hoveredItem === item.id ? 1 : 0,
                  y: hoveredItem === item.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-medium text-rose-light mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {item.description}
                </p>
              </motion.div>

              {/* Category badge - always visible */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm">
                <span className="text-xs font-medium text-foreground">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
