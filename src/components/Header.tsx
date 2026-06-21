import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bookmark, User, LogIn, UserPlus } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { savedSkills, savedOccupations, savedQualifications } = useStore();
  const totalSaved = savedSkills.length + savedOccupations.length + savedQualifications.length;

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary tracking-tight">
          ESCO DB
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/explore" className="hover:text-accent transition-colors">
            Explore
          </Link>
          <Link to="/search" className="hover:text-accent transition-colors">
            Advanced Search
          </Link>
          <Link to="/dashboard" className="hover:text-accent transition-colors">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative hidden sm:block">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="pl-9 pr-4 py-1.5 rounded-lg bg-background border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent w-40 md:w-52"
            />
            <Search size={16} className="absolute left-3 top-2 text-text-secondary" />
          </form>
          <Link
            to="/dashboard"
            className="relative p-2 rounded-lg hover:bg-surface-hover transition-colors"
            title="Saved items"
          >
            <Bookmark size={20} className="text-text" />
            {totalSaved > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-text text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalSaved}
              </span>
            )}
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-sm font-medium"
            >
              <LogIn size={16} /> Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
            >
              <UserPlus size={16} /> Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}