import { motion } from 'framer-motion';
import { Heart, Sparkles, Bookmark } from 'lucide-react';
import { useStore } from '../store/useStore';
import { MOCK_SKILLS, MOCK_OCCUPATIONS, MOCK_QUALIFICATIONS } from '../data/mockData';
import { Link } from 'react-router-dom';

interface CollectionListProps {
  type: 'skill' | 'occupation' | 'qualification';
}

export default function CollectionList({ type }: CollectionListProps) {
  const {
    savedSkills,
    savedOccupations,
    savedQualifications,
    removeSkill,
    removeOccupation,
    removeQualification,
  } = useStore();

  const items =
    type === 'skill'
      ? MOCK_SKILLS.filter((s) => savedSkills.includes(s.id))
      : type === 'occupation'
      ? MOCK_OCCUPATIONS.filter((o) => savedOccupations.includes(o.id))
      : MOCK_QUALIFICATIONS.filter((q) => savedQualifications.includes(q.id));

  const remove = (id: string) => {
    if (type === 'skill') removeSkill(id);
    else if (type === 'occupation') removeOccupation(id);
    else removeQualification(id);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-text-secondary">
        <Bookmark size={32} className="mx-auto mb-2 opacity-50" />
        <p>No saved {type}s yet.</p>
      </div>
    );
  }

  const title =
    type === 'skill' ? 'Saved Skills' : type === 'occupation' ? 'Saved Occupations' : 'Saved Qualifications';

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <motion.div
            key={(item as any).id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center justify-between p-4 bg-surface rounded-lg border border-gray-200"
          >
            <Link
              to={`/${type}/${(item as any).id}`}
              className="flex-1 hover:text-accent transition-colors"
            >
              <p className="font-medium">{(item as any).prefLabel}</p>
              {type === 'occupation' && (
                <p className="text-xs text-text-secondary">ISCO {(item as any).iscoCode}</p>
              )}
              {type === 'qualification' && (
                <p className="text-xs text-text-secondary">EQF {(item as any).eqfLevel}</p>
              )}
            </Link>
            <button
              onClick={() => remove((item as any).id)}
              className="p-2 text-error hover:bg-red-50 rounded-full transition-colors"
              title="Remove"
            >
              <Sparkles size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}