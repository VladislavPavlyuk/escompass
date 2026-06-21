import { motion } from 'framer-motion';
import { Award, GraduationCap, Building2 } from 'lucide-react';
import type { Qualification } from '../data/mockData';
import SaveButton from './SaveButton';

interface QualificationCardProps {
  qualification: Qualification;
  delay?: number;
}

export default function QualificationCard({ qualification, delay = 0 }: QualificationCardProps) {
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
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <GraduationCap size={20} className="text-success" />
          </div>
          <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded-full">
            EQF {qualification.eqfLevel}
          </span>
        </div>
        <SaveButton type="qualification" id={qualification.id} />
      </div>
      <h3 className="font-semibold text-lg mb-2">{qualification.prefLabel}</h3>
      <p className="text-sm text-text-secondary line-clamp-2 mb-3">{qualification.description}</p>
      <div className="flex items-center gap-2 text-sm text-text-secondary mt-auto">
        <Building2 size={14} /> {qualification.awardingBody}
      </div>
    </motion.div>
  );
}