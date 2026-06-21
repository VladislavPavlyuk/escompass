import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Wrench, Tag, RefreshCw, BookOpen, Sparkles, Heart } from 'lucide-react';
import { MOCK_SKILLS, MOCK_OCCUPATIONS } from '../data/mockData';
import SaveButton from '../components/SaveButton';
import RelatedItems from '../components/RelatedItems';

const iconMap: Record<string, React.ElementType> = {
  knowledge: BookOpen,
  skill: Wrench,
  competence: Sparkles,
  attitude: Heart,
};

export default function SkillDetail() {
  const { id } = useParams<{ id: string }>();
  const skill = MOCK_SKILLS.find((s) => s.id === id);

  if (!skill) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">Skill not found</h2>
        <Link to="/explore" className="text-accent hover:underline">Back to Explore</Link>
      </div>
    );
  }

  const Icon = iconMap[skill.skillType] || Wrench;
  const relatedOccupations = MOCK_OCCUPATIONS.filter((o) =>
    skill.relatedOccupations.some((ro) => ro.id === o.id)
  );
  const relatedSkills = MOCK_SKILLS.filter((s) => skill.relatedSkills.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link to="/explore" className="inline-flex items-center gap-1 text-text-secondary hover:text-primary mb-6">
        <ArrowLeft size={16} /> Back
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface rounded-2xl border border-gray-200 p-8 md:p-12"
      >
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{skill.prefLabel}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs uppercase px-2 py-1 rounded-full bg-gray-100">{skill.skillType}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">{skill.reusabilityLevel}</span>
              </div>
            </div>
          </div>
          <SaveButton type="skill" id={skill.id} />
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-text-secondary leading-relaxed">{skill.description}</p>
          </div>
          {skill.altLabels.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"><Tag size={18} /> Alternative Labels</h2>
              <div className="flex flex-wrap gap-2">
                {skill.altLabels.map((label) => (
                  <span key={label} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{label}</span>
                ))}
              </div>
            </div>
          )}
          <RelatedItems
            title="Related Occupations"
            items={relatedOccupations.map((o) => ({ id: o.id, title: o.prefLabel }))}
            basePath="/occupation"
          />
          {relatedSkills.length > 0 && (
            <RelatedItems
              title="Related Skills"
              items={relatedSkills.map((s) => ({ id: s.id, title: s.prefLabel }))}
              basePath="/skill"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}