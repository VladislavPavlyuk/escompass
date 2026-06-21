import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, image, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 bg-surface p-6 flex flex-col"
    >
      {image ? (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
      ) : (
        <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon size={28} className="text-primary" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}