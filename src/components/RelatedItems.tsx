import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface RelatedItem {
  id: string;
  title: string;
}

interface RelatedItemsProps {
  title: string;
  items: RelatedItem[];
  basePath: string;
}

export default function RelatedItems({ title, items, basePath }: RelatedItemsProps) {
  if (items.length === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`${basePath}/${item.id}`}
            className="px-4 py-2 rounded-full border border-gray-200 bg-surface hover:bg-surface-hover text-sm font-medium transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}