import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShoppingCart, Megaphone, DollarSign, Heart, Wrench, TrendingUp, Rocket, Building2, Shield, Scale, Activity, Briefcase, Factory, ShoppingBag, Truck, UtensilsCrossed, Users, HeartHandshake, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import FadeIn from '../Components/FadeIn';

const iconMap = { Layers, ShoppingCart, Megaphone, DollarSign, Heart, Wrench, TrendingUp, Rocket, Building2, Shield, Scale, Activity, Briefcase, Factory, ShoppingBag, Truck, UtensilsCrossed, Users, HeartHandshake, Newspaper };

const IndustriesPage = () => (
  <div className="pt-20">
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Built for <span className="gradient-text">your industry</span></h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We have seen the data problems in your space. Here is how we fix them.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <FadeIn key={ind.slug} delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Link to={`/industries/${ind.slug}`} className="block glass rounded-2xl p-8 h-full hover:glow-purple transition-shadow">
                    {Icon && <Icon className="h-10 w-10 text-violet-400 mb-5" />}
                    <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground">{ind.description}</p>
                  </Link>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
