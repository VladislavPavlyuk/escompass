import { create } from 'zustand';

interface FilterState {
  skillType: string[];
  iscoGroup: string[];
  reusabilityLevel: string[];
  eqfLevel: number[];
}

interface StoreState {
  savedSkills: string[];
  savedOccupations: string[];
  savedQualifications: string[];
  searchQuery: string;
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  toggleSkill: (id: string) => void;
  toggleOccupation: (id: string) => void;
  toggleQualification: (id: string) => void;
  removeSkill: (id: string) => void;
  removeOccupation: (id: string) => void;
  removeQualification: (id: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  savedSkills: ['s1', 's4'],
  savedOccupations: ['o1'],
  savedQualifications: ['q2'],
  searchQuery: '',
  filters: {
    skillType: [],
    iscoGroup: [],
    reusabilityLevel: [],
    eqfLevel: [],
  },
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  toggleSkill: (id) =>
    set((state) => ({
      savedSkills: state.savedSkills.includes(id)
        ? state.savedSkills.filter((s) => s !== id)
        : [...state.savedSkills, id],
    })),
  toggleOccupation: (id) =>
    set((state) => ({
      savedOccupations: state.savedOccupations.includes(id)
        ? state.savedOccupations.filter((o) => o !== id)
        : [...state.savedOccupations, id],
    })),
  toggleQualification: (id) =>
    set((state) => ({
      savedQualifications: state.savedQualifications.includes(id)
        ? state.savedQualifications.filter((q) => q !== id)
        : [...state.savedQualifications, id],
    })),
  removeSkill: (id) =>
    set((state) => ({
      savedSkills: state.savedSkills.filter((s) => s !== id),
    })),
  removeOccupation: (id) =>
    set((state) => ({
      savedOccupations: state.savedOccupations.filter((o) => o !== id),
    })),
  removeQualification: (id) =>
    set((state) => ({
      savedQualifications: state.savedQualifications.filter((q) => q !== id),
    })),
}));
