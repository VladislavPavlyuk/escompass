import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Hash, Wrench } from 'lucide-react';
import { MOCK_OCCUPATIONS, MOCK_SKILLS } from '../data/mockData';
import SaveButton from '../components/SaveButton';
import RelatedItems from '../components/RelatedItems';

export default function OccupationDetail() {
  const { id } = useParams<{ id: string }>();
  const occupation = MOCK_OCCUPATIONS.find((o) => o.id === id);

  if (!occupation) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">Occupation not found</h2>
        <Link to="/explore" className="text-accent hover:underline">Back to Explore</Link>
      </div>
    );
  }

  const essentialSkillIds = occupation.essentialSkills.map((es) => es.skillId);
  const allSkillIds = [...essentialSkillIds, ...occupation.optionalSkills];
  const skills = MOCK_SKILLS.filter((s) => allSkillIds.includes(s.id));
  const essentialSkills = skills.filter((s) => essentialSkillIds.includes(s.id));
  const optionalSkills = skills.filter((s) => occupation.optionalSkills.includes(s.id));
  const relatedOccupations = MOCK_OCCUPATIONS.filter((o) =>
    occupation.relatedOccupations.some((ro) => ro.id === o.id)
  );

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
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <Briefcase size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{occupation.prefLabel}</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded-full">ISCO {occupation.iscoCode}</span>
                <span className="text-sm text-text-secondary flex items-center gap-1"><Wrench size={14} /> {essentialSkills.length} essential skills</span>
              </div>
            </div>
          </div>
          <SaveButton type="occupation" id={occupation.id} />
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-text-secondary leading-relaxed">{occupation.description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Wrench size={18} /> Essential Skills</h2>
            <ul className="space-y-2">
              {essentialSkills.map((skill) => (
                <li key={skill.id}>
                  <Link to={`/skill/${skill.id}`} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-surface-hover transition-colors">
                    <span className="font-medium">{skill.prefLabel}</span>
                    <span className="text-xs text-text-secondary">{skill.skillType}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {optionalSkills.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Wrench size={18} /> Optional Skills</h2>
              <ul className="space-y-2">
                {optionalSkills.map((skill) => (
                  <li key={skill.id}>
                    <Link to={`/skill/${skill.id}`} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-surface-hover transition-colors">
                      <span className="font-medium">{skill.prefLabel}</span>
                      <span className="text-xs text-text-secondary">{skill.skillType}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <RelatedItems
          title="Related Occupations"
          items={relatedOccupations.map((o) => ({ id: o.id, title: o.prefLabel }))}
          basePath="/occupation"
        />
      </motion.div>
    </div>
  );
}