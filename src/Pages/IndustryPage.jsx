import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Layers, ShoppingCart, Megaphone, DollarSign, Heart, Wrench, TrendingUp, Rocket, Building2, Shield, Scale, Activity, Briefcase, Factory, ShoppingBag, Truck, UtensilsCrossed, Users, HeartHandshake, Newspaper, Check, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import FadeIn from '../Components/FadeIn';

const iconMap = { Layers, ShoppingCart, Megaphone, DollarSign, Heart, Wrench, TrendingUp, Rocket, Building2, Shield, Scale, Activity, Briefcase, Factory, ShoppingBag, Truck, UtensilsCrossed, Users, HeartHandshake, Newspaper };

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const Icon = iconMap[industry.icon];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              {Icon && <Icon className="h-12 w-12 text-violet-400 mb-6" />}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{industry.headline}</h1>
              <p className="text-xl text-muted-foreground mb-8">{industry.description}</p>
              <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
                Book a Free Call →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn><h2 className="text-3xl font-bold text-center mb-12">The problems we solve</h2></FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industry.painPoints.map((pain, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl p-6 h-full">
                  <AlertTriangle className="h-8 w-8 text-red-400 mb-4" />
                  <p className="text-white font-medium">{pain}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn><h2 className="text-3xl font-bold text-center mb-12">What we build for {industry.name}</h2></FadeIn>
          <div className="max-w-2xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="glass rounded-2xl p-8">
                <ul className="space-y-4">
                  {industry.whatWeBuild.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <Check className="h-5 w-5 text-violet-400 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mock dashboard */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <div className="glass rounded-2xl p-8 glow-purple">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {industry.whatWeBuild.slice(0, 3).map((item) => (
                  <div key={item} className="glass rounded-xl p-4">
                    <p className="text-[10px] text-muted-foreground mb-1">{item}</p>
                    <p className="text-lg font-bold text-white">--</p>
                    <p className="text-[10px] text-emerald-400">Live</p>
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-end gap-2 h-24">
                  {[35, 45, 55, 50, 65, 70, 60, 80].map((h, i) => (
                    <motion.div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-purple-400"
                      initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 }} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to fix your <span className="gradient-text">data?</span></h2>
            <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
              Book a Free Call →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
