export { motion, AnimatePresence } from 'framer-motion';
export { Heart, Sparkles, Bookmark, Briefcase, Hash, Wrench, Award, GraduationCap, Building2, BookOpen, ArrowLeft, Tag, RefreshCw } from 'lucide-react';
export { Link, useParams, useSearchParams } from 'react-router-dom';
export { useState, useMemo } from 'react';
export { useStore } from '../store/useStore';

export interface Skill {
  id: string;
  prefLabel: string;
  altLabels: string[];
  skillType: 'knowledge' | 'skill' | 'competence' | 'attitude';
  description: string;
  reusabilityLevel: 'occupation-specific' | 'sector-specific' | 'cross-sector' | 'transversal';
  relatedOccupations: { id: string; title: string }[];
  relatedSkills: string[];
}

export interface Occupation {
  id: string;
  prefLabel: string;
  iscoCode: string;
  description: string;
  essentialSkills: { skillId: string; type: 'essential' | 'optional' }[];
  optionalSkills: string[];
  relatedOccupations: { id: string; title: string }[];
}

export interface Qualification {
  id: string;
  prefLabel: string;
  eqfLevel: number;
  description: string;
  awardingBody: string;
  type: string;
}

export const MOCK_SKILLS: Skill[] = [
  {
    id: 's1',
    prefLabel: 'welding',
    altLabels: ['weld', 'soldering', 'arc welding'],
    skillType: 'skill',
    description: 'Joining metal parts using high heat and filler materials.',
    reusabilityLevel: 'sector-specific',
    relatedOccupations: [{ id: 'o1', title: 'Welder' }, { id: 'o2', title: 'Pipe Fitter' }],
    relatedSkills: ['s2', 's3'],
  },
  {
    id: 's2',
    prefLabel: 'blueprint reading',
    altLabels: ['technical drawing interpretation'],
    skillType: 'knowledge',
    description: 'Understanding technical drawings and schematics.',
    reusabilityLevel: 'cross-sector',
    relatedOccupations: [{ id: 'o1', title: 'Welder' }, { id: 'o3', title: 'Mechanical Engineer' }],
    relatedSkills: ['s1'],
  },
  {
    id: 's3',
    prefLabel: 'metal fabrication',
    altLabels: ['metal working'],
    skillType: 'skill',
    description: 'Shaping and assembling metal structures.',
    reusabilityLevel: 'sector-specific',
    relatedOccupations: [{ id: 'o1', title: 'Welder' }],
    relatedSkills: ['s1'],
  },
  {
    id: 's4',
    prefLabel: 'programming',
    altLabels: ['coding', 'software development'],
    skillType: 'skill',
    description: 'Writing and testing computer code.',
    reusabilityLevel: 'transversal',
    relatedOccupations: [{ id: 'o4', title: 'Software Developer' }, { id: 'o5', title: 'Data Scientist' }],
    relatedSkills: ['s5', 's6'],
  },
  {
    id: 's5',
    prefLabel: 'database management',
    altLabels: ['SQL', 'DB administration'],
    skillType: 'knowledge',
    description: 'Organizing and maintaining data systems.',
    reusabilityLevel: 'cross-sector',
    relatedOccupations: [{ id: 'o4', title: 'Software Developer' }],
    relatedSkills: ['s4'],
  },
  {
    id: 's6',
    prefLabel: 'algorithm design',
    altLabels: [],
    skillType: 'knowledge',
    description: 'Creating step-by-step procedures for computations.',
    reusabilityLevel: 'cross-sector',
    relatedOccupations: [{ id: 'o4', title: 'Software Developer' }, { id: 'o5', title: 'Data Scientist' }],
    relatedSkills: ['s4'],
  },
  {
    id: 's7',
    prefLabel: 'communication',
    altLabels: ['interpersonal skills', 'verbal expression'],
    skillType: 'competence',
    description: 'Effectively exchanging information with others.',
    reusabilityLevel: 'transversal',
    relatedOccupations: [{ id: 'o6', title: 'Customer Service Representative' }, { id: 'o7', title: 'Marketing Specialist' }],
    relatedSkills: [],
  },
  {
    id: 's8',
    prefLabel: 'project management',
    altLabels: ['PM', 'coordination'],
    skillType: 'competence',
    description: 'Planning and overseeing projects to reach goals.',
    reusabilityLevel: 'cross-sector',
    relatedOccupations: [{ id: 'o8', title: 'Project Manager' }, { id: 'o7', title: 'Marketing Specialist' }],
    relatedSkills: ['s7'],
  },
  {
    id: 's9',
    prefLabel: 'electrical installation',
    altLabels: ['wiring', 'electrician skills'],
    skillType: 'skill',
    description: 'Installing electrical systems and components.',
    reusabilityLevel: 'sector-specific',
    relatedOccupations: [{ id: 'o9', title: 'Electrician' }],
    relatedSkills: ['s2'],
  },
  {
    id: 's10',
    prefLabel: 'first aid',
    altLabels: ['medical emergency response'],
    skillType: 'skill',
    description: 'Providing initial care for injury or illness.',
    reusabilityLevel: 'cross-sector',
    relatedOccupations: [{ id: 'o10', title: 'Nurse' }, { id: 'o6', title: 'Customer Service Representative' }],
    relatedSkills: [],
  },
];

export const MOCK_OCCUPATIONS: Occupation[] = [
  {
    id: 'o1',
    prefLabel: 'Welder',
    iscoCode: '7212',
    description: 'Join metal parts using high heat, following blueprints.',
    essentialSkills: [
      { skillId: 's1', type: 'essential' },
      { skillId: 's2', type: 'essential' },
    ],
    optionalSkills: ['s3', 's10'],
    relatedOccupations: [{ id: 'o2', title: 'Pipe Fitter' }, { id: 'o3', title: 'Mechanical Engineer' }],
  },
  {
    id: 'o2',
    prefLabel: 'Pipe Fitter',
    iscoCode: '7126',
    description: 'Install and repair piping systems in buildings and industrial sites.',
    essentialSkills: [{ skillId: 's1', type: 'essential' }, { skillId: 's2', type: 'essential' }],
    optionalSkills: ['s3'],
    relatedOccupations: [{ id: 'o1', title: 'Welder' }],
  },
  {
    id: 'o3',
    prefLabel: 'Mechanical Engineer',
    iscoCode: '2144',
    description: 'Design, develop, and test mechanical devices and systems.',
    essentialSkills: [{ skillId: 's2', type: 'essential' }],
    optionalSkills: ['s8', 's3'],
    relatedOccupations: [{ id: 'o1', title: 'Welder' }, { id: 'o8', title: 'Project Manager' }],
  },
  {
    id: 'o4',
    prefLabel: 'Software Developer',
    iscoCode: '2512',
    description: 'Create and maintain computer applications and systems.',
    essentialSkills: [{ skillId: 's4', type: 'essential' }, { skillId: 's5', type: 'essential' }],
    optionalSkills: ['s6', 's8'],
    relatedOccupations: [{ id: 'o5', title: 'Data Scientist' }],
  },
  {
    id: 'o5',
    prefLabel: 'Data Scientist',
    iscoCode: '2519',
    description: 'Analyze large datasets to extract insights and build predictive models.',
    essentialSkills: [{ skillId: 's4', type: 'essential' }, { skillId: 's6', type: 'essential' }],
    optionalSkills: ['s5'],
    relatedOccupations: [{ id: 'o4', title: 'Software Developer' }],
  },
  {
    id: 'o6',
    prefLabel: 'Customer Service Representative',
    iscoCode: '4222',
    description: 'Assist customers with inquiries and complaints, providing solutions.',
    essentialSkills: [{ skillId: 's7', type: 'essential' }],
    optionalSkills: ['s10'],
    relatedOccupations: [{ id: 'o7', title: 'Marketing Specialist' }],
  },
  {
    id: 'o7',
    prefLabel: 'Marketing Specialist',
    iscoCode: '2431',
    description: 'Develop marketing strategies and campaigns to promote products.',
    essentialSkills: [{ skillId: 's7', type: 'essential' }, { skillId: 's8', type: 'essential' }],
    optionalSkills: [],
    relatedOccupations: [{ id: 'o6', title: 'Customer Service Representative' }],
  },
  {
    id: 'o8',
    prefLabel: 'Project Manager',
    iscoCode: '2421',
    description: 'Plan and execute projects efficiently, managing resources and timelines.',
    essentialSkills: [{ skillId: 's8', type: 'essential' }],
    optionalSkills: ['s7', 's4'],
    relatedOccupations: [{ id: 'o3', title: 'Mechanical Engineer' }, { id: 'o4', title: 'Software Developer' }],
  },
  {
    id: 'o9',
    prefLabel: 'Electrician',
    iscoCode: '7411',
    description: 'Install and maintain electrical systems in buildings and equipment.',
    essentialSkills: [{ skillId: 's9', type: 'essential' }],
    optionalSkills: ['s2', 's10'],
    relatedOccupations: [{ id: 'o3', title: 'Mechanical Engineer' }],
  },
  {
    id: 'o10',
    prefLabel: 'Nurse',
    iscoCode: '3221',
    description: 'Provide medical care and support to patients in healthcare settings.',
    essentialSkills: [{ skillId: 's10', type: 'essential' }, { skillId: 's7', type: 'essential' }],
    optionalSkills: [],
    relatedOccupations: [{ id: 'o6', title: 'Customer Service Representative' }],
  },
];

export const MOCK_QUALIFICATIONS: Qualification[] = [
  {
    id: 'q1',
    prefLabel: 'Bachelor of Science in Mechanical Engineering',
    eqfLevel: 6,
    description: 'Undergraduate degree covering mechanics, thermodynamics, and design.',
    awardingBody: 'University of Technology',
    type: 'degree',
  },
  {
    id: 'q2',
    prefLabel: 'Certified Welder (ISO 9606)',
    eqfLevel: 4,
    description: 'International certification for welding processes.',
    awardingBody: 'International Institute of Welding',
    type: 'certificate',
  },
  {
    id: 'q3',
    prefLabel: 'Master of Computer Science',
    eqfLevel: 7,
    description: 'Advanced studies in algorithms, AI, and software engineering.',
    awardingBody: 'State University',
    type: 'degree',
  },
  {
    id: 'q4',
    prefLabel: 'Project Management Professional (PMP)',
    eqfLevel: 5,
    description: 'Globally recognized credential for project managers.',
    awardingBody: 'Project Management Institute',
    type: 'certificate',
  },
  {
    id: 'q5',
    prefLabel: 'Electrician Apprenticeship Completion',
    eqfLevel: 4,
    description: 'Proof of completed vocational training as electrician.',
    awardingBody: 'Chamber of Skilled Crafts',
    type: 'apprenticeship',
  },
  {
    id: 'q6',
    prefLabel: 'Bachelor of Nursing',
    eqfLevel: 6,
    description: 'Academic degree preparing for registered nursing practice.',
    awardingBody: 'Health Sciences University',
    type: 'degree',
  },
];