import { useState, FormEvent, useEffect, useRef } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({ className, placeholder = 'Search skills, occupations, qualifications...' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text p-1 rounded-full"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  );
}