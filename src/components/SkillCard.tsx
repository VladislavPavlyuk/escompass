import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Wrench, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Skill } from '../data/mockData';
import SaveButton from './SaveButton';

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

const iconMap: Record<string, React.ElementType> = {
  knowledge: BookOpen,
  skill: Wrench,
  competence: Sparkles,
  attitude: Heart,
};

export default function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const Icon = iconMap[skill.skillType] || Sparkles;

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
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon size={20} className="text-primary" />
          </div>
          <span className="text-xs uppercase tracking-wider text-text-secondary bg-gray-100 px-2 py-0.5 rounded-full">
            {skill.skillType}
          </span>
        </div>
        <SaveButton type="skill" id={skill.id} />
      </div>
      <Link to={`/skill/${skill.id}`} className="block">
        <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-colors">{skill.prefLabel}</h3>
        <p className="text-sm text-text-secondary line-clamp-2 mb-3">{skill.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
            {skill.reusabilityLevel}
          </span>
          {skill.altLabels.slice(0, 2).map((label) => (
            <span key={label} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {label}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}