import { motion } from 'framer-motion';
import { LayoutDashboard, Bookmark, Wrench, Briefcase, Award, Clock } from 'lucide-react';
import { useStore } from '../store/useStore';
import CollectionList from '../components/CollectionList';
import SyncStatus from '../components/SyncStatus';

export default function Dashboard() {
  const { savedSkills, savedOccupations, savedQualifications } = useStore();
  const totalSaved = savedSkills.length + savedOccupations.length + savedQualifications.length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <LayoutDashboard size={34} className="text-primary" /> Dashboard
        </h1>
        <p className="text-text-secondary mt-1">Manage your saved collections and stay updated with ESCO sync.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface rounded-xl border border-gray-200 p-5 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Wrench size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">{savedSkills.length}</p>
            <p className="text-sm text-text-secondary">Saved Skills</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-surface rounded-xl border border-gray-200 p-5 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
            <Briefcase size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">{savedOccupations.length}</p>
            <p className="text-sm text-text-secondary">Saved Occupations</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface rounded-xl border border-gray-200 p-5 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <Award size={24} className="text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold">{savedQualifications.length}</p>
            <p className="text-sm text-text-secondary">Saved Qualifications</p>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <CollectionList type="skill" />
          <CollectionList type="occupation" />
          <CollectionList type="qualification" />
        </div>
        <div className="space-y-6">
          <SyncStatus />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface rounded-xl border border-gray-200 p-5"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Clock size={16} /> Quick Stats</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Total items saved</span>
                <span className="font-medium">{totalSaved}</span>
              </li>
              <li className="flex justify-between">
                <span>Account type</span>
                <span className="font-medium">Free</span>
              </li>
              <li className="flex justify-between">
                <span>Member since</span>
                <span className="font-medium">January 2026</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}