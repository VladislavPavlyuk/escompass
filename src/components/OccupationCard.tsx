import { motion } from 'framer-motion';
import { Briefcase, Hash, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Occupation } from '../data/mockData';
import SaveButton from './SaveButton';

interface OccupationCardProps {
  occupation: Occupation;
  delay?: number;
}

export default function OccupationCard({ occupation, delay = 0 }: OccupationCardProps) {
  const essentialCount = occupation.essentialSkills.length;
  const optionalCount = occupation.optionalSkills.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 bg-surface p-5 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
            <Briefcase size={20} className="text-primary" />
          </div>
          <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded-full">
            ISCO {occupation.iscoCode}
          </span>
        </div>
        <SaveButton type="occupation" id={occupation.id} />
      </div>
      <Link to={`/occupation/${occupation.id}`} className="block">
        <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-colors">{occupation.prefLabel}</h3>
        <p className="text-sm text-text-secondary line-clamp-2 mb-3">{occupation.description}</p>
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <span className="flex items-center gap-1"><Wrench size={14} /> {essentialCount} essential</span>
          <span className="flex items-center gap-1"><Hash size={14} /> {optionalCount} optional</span>
        </div>
      </Link>
    </motion.div>
  );
}