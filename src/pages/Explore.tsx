import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Briefcase, Award } from 'lucide-react';
import { MOCK_SKILLS, MOCK_OCCUPATIONS, MOCK_QUALIFICATIONS } from '../data/mockData';
import SkillCard from '../components/SkillCard';
import OccupationCard from '../components/OccupationCard';
import QualificationCard from '../components/QualificationCard';
import SearchBar from '../components/SearchBar';

export default function Explore() {
  const [activeTab, setActiveTab] = useState<'skills' | 'occupations' | 'qualifications'>('skills');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = MOCK_SKILLS.filter(
    (s) =>
      s.prefLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredOccupations = MOCK_OCCUPATIONS.filter(
    (o) =>
      o.prefLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.iscoCode.includes(searchTerm)
  );
  const filteredQualifications = MOCK_QUALIFICATIONS.filter(
    (q) =>
      q.prefLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.awardingBody.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore the Database</h1>
        <p className="text-text-secondary">Browse skills, occupations, and qualifications from the ESCO classification.</p>
      </motion.div>
      <SearchBar className="mb-8" placeholder="Search in the database..." />
      <div className="flex border-b border-gray-200 mb-8">
        {[
          { key: 'skills', label: 'Skills', icon: Wrench, count: MOCK_SKILLS.length },
          { key: 'occupations', label: 'Occupations', icon: Briefcase, count: MOCK_OCCUPATIONS.length },
          { key: 'qualifications', label: 'Qualifications', icon: Award, count: MOCK_QUALIFICATIONS.length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`flex items-center gap-2 px-5 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-primary text-primary'
                : 'border-transparent text-text-secondary hover:text-text'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
            <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 ml-1">{tab.count}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'skills' && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, idx) => (
              <SkillCard key={skill.id} skill={skill} delay={idx * 0.05} />
            ))}
            {filteredSkills.length === 0 && (
              <p className="col-span-full text-center py-10 text-text-secondary">No skills found.</p>
            )}
          </motion.div>
        )}
        {activeTab === 'occupations' && (
          <motion.div
            key="occupations"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredOccupations.map((occ, idx) => (
              <OccupationCard key={occ.id} occupation={occ} delay={idx * 0.05} />
            ))}
            {filteredOccupations.length === 0 && (
              <p className="col-span-full text-center py-10 text-text-secondary">No occupations found.</p>
            )}
          </motion.div>
        )}
        {activeTab === 'qualifications' && (
          <motion.div
            key="qualifications"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredQualifications.map((qual, idx) => (
              <QualificationCard key={qual.id} qualification={qual} delay={idx * 0.05} />
            ))}
            {filteredQualifications.length === 0 && (
              <p className="col-span-full text-center py-10 text-text-secondary">No qualifications found.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}