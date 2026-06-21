import { motion } from 'framer-motion';
import { ArrowDown, Database, Search, TrendingUp } from 'lucide-react';
import StatsOverview from './StatsOverview';

/* Photo by abubakar mamman on Pexels */
const HERO_IMAGE = 'https://images.pexels.com/photos/37805995/pexels-photo-37805995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Confident female welder posing in a workshop with industrial tools and equipment."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            ESCO Skills & Occupations Database
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed">
            Explore a multilingual classification of European Skills, Competences, Qualifications and Occupations.
            Your gateway to the official ESCO dataset.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-secondary text-text font-semibold px-8 py-4 rounded-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Database size={20} /> Explore Database
            </a>
            <a
              href="/search"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all"
            >
              <Search size={20} /> Advanced Search
            </a>
          </div>
        </motion.div>
        <StatsOverview />
      </div>
      <motion.a
        href="#features"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
}