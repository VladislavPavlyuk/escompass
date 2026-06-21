import { Filter, X } from 'lucide-react';
import { useStore, FilterState } from '../store/useStore';

const SKILL_TYPES = ['knowledge', 'skill', 'competence', 'attitude'];
const ISCO_GROUPS = [
  { code: '1', label: 'Managers' },
  { code: '2', label: 'Professionals' },
  { code: '3', label: 'Technicians and Associate Professionals' },
  { code: '4', label: 'Clerical Support Workers' },
  { code: '5', label: 'Service and Sales Workers' },
  { code: '6', label: 'Skilled Agricultural, Forestry and Fishery Workers' },
  { code: '7', label: 'Craft and Related Trades Workers' },
  { code: '8', label: 'Plant and Machine Operators, and Assemblers' },
  { code: '9', label: 'Elementary Occupations' },
];
const REUSABILITY = ['occupation-specific', 'sector-specific', 'cross-sector', 'transversal'];
const EQF_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8];

interface FilterPanelProps {
  showSkills?: boolean;
  showOccupations?: boolean;
  showQualifications?: boolean;
}

export default function FilterPanel({
  showSkills = true,
  showOccupations = true,
  showQualifications = true,
}: FilterPanelProps) {
  const { filters, setFilters } = useStore();

  const toggleArray = (field: keyof FilterState, value: string) => {
    const current = filters[field] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFilters({ [field]: updated } as Partial<FilterState>);
  };

  const resetFilters = () => {
    setFilters({ skillType: [], iscoGroup: [], reusabilityLevel: [], eqfLevel: [] });
  };

  const isActive = filters.skillType.length > 0 || filters.iscoGroup.length > 0 || filters.reusabilityLevel.length > 0 || filters.eqfLevel.length > 0;

  return (
    <div className="bg-surface rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2"><Filter size={18} /> Filters</h3>
        {isActive && (
          <button onClick={resetFilters} className="text-sm text-accent hover:underline">
            Reset
          </button>
        )}
      </div>
      {showSkills && (
        <div className="mb-5">
          <h4 className="text-sm font-medium mb-2">Skill Type</h4>
          <div className="flex flex-wrap gap-2">
            {SKILL_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => toggleArray('skillType', type)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  filters.skillType.includes(type)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface border-gray-200 hover:border-primary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
      {showOccupations && (
        <div className="mb-5">
          <h4 className="text-sm font-medium mb-2">ISCO Group</h4>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {ISCO_GROUPS.map((group) => (
              <label key={group.code} className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={filters.iscoGroup.includes(group.code)}
                  onChange={() => toggleArray('iscoGroup', group.code)}
                  className="rounded text-primary focus:ring-accent"
                />
                {group.code} – {group.label}
              </label>
            ))}
          </div>
        </div>
      )}
      {showSkills && (
        <div className="mb-5">
          <h4 className="text-sm font-medium mb-2">Reusability Level</h4>
          <div className="space-y-1">
            {REUSABILITY.map((level) => (
              <label key={level} className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={filters.reusabilityLevel.includes(level)}
                  onChange={() => toggleArray('reusabilityLevel', level)}
                  className="rounded text-primary focus:ring-accent"
                />
                {level}
              </label>
            ))}
          </div>
        </div>
      )}
      {showQualifications && (
        <div>
          <h4 className="text-sm font-medium mb-2">EQF Level</h4>
          <div className="flex flex-wrap gap-2">
            {EQF_LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => {
                  const current = filters.eqfLevel;
                  const newLevels = current.includes(level) ? current.filter((l) => l !== level) : [...current, level];
                  setFilters({ eqfLevel: newLevels });
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  filters.eqfLevel.includes(level)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-surface border-gray-200 hover:border-primary'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}