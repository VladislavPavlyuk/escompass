import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xl font-bold mb-3">ESCO DB</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            European Skills, Competences, Qualifications and Occupations – a comprehensive multilingual database.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link to="/explore" className="hover:text-accent transition-colors">Explore Database</Link></li>
            <li><Link to="/search" className="hover:text-accent transition-colors">Advanced Search</Link></li>
            <li><Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 flex items-center gap-2">
            <Globe2 size={18} /> ESCO Attribution
          </h5>
          <p className="text-sm text-text-secondary">
            Data sourced from the European Commission's ESCO classification. Last sync: January 2026.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-center text-sm text-text-secondary">
        © {new Date().getFullYear()} ESCO DB. All rights reserved.
      </div>
    </footer>
  );
}