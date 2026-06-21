import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { MOCK_SKILLS, MOCK_OCCUPATIONS, MOCK_QUALIFICATIONS } from '../data/mockData';
import { useStore } from '../store/useStore';
import DataTable from '../components/DataTable';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';

const skillColumns = [
  { key: 'prefLabel', label: 'Skill', sortable: true },
  { key: 'skillType', label: 'Type' },
  { key: 'reusabilityLevel', label: 'Reusability' },
  { key: 'description', label: 'Description' },
];

const occupationColumns = [
  { key: 'prefLabel', label: 'Occupation', sortable: true },
  { key: 'iscoCode', label: 'ISCO' },
  { key: 'description', label: 'Description' },
  { key: 'skillCount', label: 'Essential skills' },
];

const qualificationColumns = [
  { key: 'prefLabel', label: 'Qualification', sortable: true },
  { key: 'eqfLevel', label: 'EQF' },
  { key: 'awardingBody', label: 'Awarding Body' },
  { key: 'description', label: 'Description' },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const { filters } = useStore();

  const filteredSkills = useMemo(() => {
    let results = MOCK_SKILLS.filter(
      (s) =>
        s.prefLabel.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase())
    );
    if (filters.skillType.length > 0) {
      results = results.filter((s) => filters.skillType.includes(s.skillType));
    }
    if (filters.reusabilityLevel.length > 0) {
      results = results.filter((s) => filters.reusabilityLevel.includes(s.reusabilityLevel));
    }
    return results;
  }, [query, filters]);

  const filteredOccupations = useMemo(() => {
    let results = MOCK_OCCUPATIONS.filter(
      (o) =>
        o.prefLabel.toLowerCase().includes(query.toLowerCase()) ||
        o.iscoCode.includes(query)
    );
    if (filters.iscoGroup.length > 0) {
      results = results.filter((o) =>
        filters.iscoGroup.some((group) => o.iscoCode.startsWith(group))
      );
    }
    return results;
  }, [query, filters]);

  const filteredQualifications = useMemo(() => {
    let results = MOCK_QUALIFICATIONS.filter(
      (q) =>
        q.prefLabel.toLowerCase().includes(query.toLowerCase()) ||
        q.awardingBody.toLowerCase().includes(query.toLowerCase())
    );
    if (filters.eqfLevel.length > 0) {
      results = results.filter((q) => filters.eqfLevel.includes(q.eqfLevel));
    }
    return results;
  }, [query, filters]);

  const skillRows = filteredSkills.map((s) => ({
    prefLabel: <a href={`/skill/${s.id}`} className="text-primary hover:underline font-medium">{s.prefLabel}</a>,
    skillType: s.skillType,
    reusabilityLevel: s.reusabilityLevel,
    description: s.description.length > 100 ? s.description.substring(0, 100) + '...' : s.description,
  }));

  const occupationRows = filteredOccupations.map((o) => ({
    prefLabel: <a href={`/occupation/${o.id}`} className="text-primary hover:underline font-medium">{o.prefLabel}</a>,
    iscoCode: o.iscoCode,
    description: o.description,
    skillCount: o.essentialSkills.length,
  }));

  const qualificationRows = filteredQualifications.map((q) => ({
    prefLabel: <a href="#" className="text-primary hover:underline font-medium">{q.prefLabel}</a>,
    eqfLevel: q.eqfLevel,
    awardingBody: q.awardingBody,
    description: q.description.length > 100 ? q.description.substring(0, 100) + '...' : q.description,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Advanced Search</h1>
        <p className="text-text-secondary">Refine results using filters for ISCO groups, skill types, and more.</p>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <FilterPanel showSkills showOccupations showQualifications />
        </aside>
        <div className="flex-1">
          <SearchBar
            className="mb-6"
            placeholder="Filter results..."
          />
          <div className="space-y-12">
            {query && (
              <>
                <section>
                  <h2 className="text-xl font-semibold mb-4">Skills ({filteredSkills.length})</h2>
                  {filteredSkills.length > 0 ? (
                    <DataTable columns={skillColumns} rows={skillRows} rowsPerPage={5} />
                  ) : (
                    <p className="text-text-secondary">No matching skills.</p>
                  )}
                </section>
                <section>
                  <h2 className="text-xl font-semibold mb-4">Occupations ({filteredOccupations.length})</h2>
                  {filteredOccupations.length > 0 ? (
                    <DataTable columns={occupationColumns} rows={occupationRows} rowsPerPage={5} />
                  ) : (
                    <p className="text-text-secondary">No matching occupations.</p>
                  )}
                </section>
                <section>
                  <h2 className="text-xl font-semibold mb-4">Qualifications ({filteredQualifications.length})</h2>
                  {filteredQualifications.length > 0 ? (
                    <DataTable columns={qualificationColumns} rows={qualificationRows} rowsPerPage={5} />
                  ) : (
                    <p className="text-text-secondary">No matching qualifications.</p>
                  )}
                </section>
              </>
            )}
            {!query && (
              <div className="text-center py-10 text-text-secondary">Start typing to search across all data.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}