import { motion } from 'framer-motion';
import { Search, Wrench, Briefcase, Award } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import StatsOverview from '../components/StatsOverview';

/* Photo by Tima Miroshnichenko on Pexels */
const FEATURE_IMAGE = 'https://images.pexels.com/photos/5846088/pexels-photo-5846088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export default function Landing() {
  const features = [
    {
      icon: Search,
      title: 'Powerful Search',
      description: 'Find skills, occupations, and qualifications using advanced filters, ISCO group classification, and reusability levels.',
      delay: 0,
    },
    {
      icon: Wrench,
      title: 'Detailed Skill Profiles',
      description: 'Access rich information: description, alternative labels, skill type, and related occupations.',
      delay: 0.1,
    },
    {
      icon: Briefcase,
      title: 'Occupation Insights',
      description: 'Explore occupations with essential and optional skills, ISCO codes, and cross-references.',
      delay: 0.2,
    },
  ];

  return (
    <div>
      <Hero />
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your Gateway to the ESCO Ecosystem
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The European classification of Skills, Competences, Qualifications and Occupations – multilingual, machine-readable, and constantly updated.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <FeatureCard
                key={feat.title}
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive, Trusted, and Open
              </h2>
              <p className="text-text-secondary mb-4">
                ESCO is maintained by the European Commission and updated monthly. Our platform syncs with the latest dataset to ensure you always have access to up‑to‑date information.
              </p>
              <p className="text-text-secondary">
                Whether you are a career counselor, HR professional, or policymaker, ESCO DB helps you navigate the world of skills and jobs.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={FEATURE_IMAGE}
                alt="A focused blacksmith forges hot metal indoors, showcasing craftsmanship and industry skills."
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}