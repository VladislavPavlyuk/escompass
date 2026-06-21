import { motion } from 'framer-motion';
import { Wrench, Briefcase, Award } from 'lucide-react';

const stats = [
  { icon: Wrench, label: 'Skills', value: '13,842' },
  { icon: Briefcase, label: 'Occupations', value: '3,048' },
  { icon: Award, label: 'Qualifications', value: '1,200' },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + idx * 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <stat.icon size={20} className="text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}