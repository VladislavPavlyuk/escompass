import { motion } from 'framer-motion';
import { RefreshCw, Clock } from 'lucide-react';

export default function SyncStatus() {
  const lastSync = '2026-01-15 09:00 UTC';
  const nextSync = '2026-02-15 00:00 UTC';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface rounded-xl border border-gray-200 p-5 flex items-center gap-4"
    >
      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
        <RefreshCw size={24} className="text-primary" />
      </div>
      <div>
        <h3 className="font-semibold">ESCO Data Sync</h3>
        <p className="text-sm text-text-secondary">
          Last update: {lastSync}
        </p>
        <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
          <Clock size={14} /> Next sync: {nextSync}
        </p>
      </div>
    </motion.div>
  );
}