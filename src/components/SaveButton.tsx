import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

interface SaveButtonProps {
  type: 'skill' | 'occupation' | 'qualification';
  id: string;
}

export default function SaveButton({ type, id }: SaveButtonProps) {
  const { savedSkills, savedOccupations, savedQualifications, toggleSkill, toggleOccupation, toggleQualification } = useStore();

  const isSaved =
    type === 'skill'
      ? savedSkills.includes(id)
      : type === 'occupation'
      ? savedOccupations.includes(id)
      : savedQualifications.includes(id);

  const handleToggle = () => {
    if (type === 'skill') toggleSkill(id);
    else if (type === 'occupation') toggleOccupation(id);
    else toggleQualification(id);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className="p-2 rounded-full transition-colors relative"
      aria-label={isSaved ? 'Remove from saved' : 'Save'}
    >
      <AnimatePresence mode="wait">
        {isSaved ? (
          <motion.div key="filled" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Heart size={18} className="fill-primary text-primary" />
          </motion.div>
        ) : (
          <motion.div key="outline" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Heart size={18} className="text-text-secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}