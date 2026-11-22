export interface ResearchContribution {
  id: string;
  year: string;
  journal: string;
  publicationType?: string;
  title: string;
  summary: string;
  question: string;
  approach: string;
  contribution: string;
  outcome: string;
  paperUrl: string;
  essaySlug?: string;
}

/** Shared by the homepage overview and the detailed Research page. */
export const selectedResearch: readonly ResearchContribution[] = [
  {
    id: 'intercalation-kinetics',
    year: '2026',
    journal: 'ACS Energy Letters',
    publicationType: 'Viewpoint',
    title: 'Measuring intercalation kinetics',
    summary:
      'A numerical audit of electroanalytical methods for separating charge transfer from a shifting thermodynamic baseline.',
    question:
      'Can common electroanalytical protocols recover the charge-transfer kinetics of intercalation reactions?',
    approach:
      'Test the protocols against a simulated electrochemical system with known input kinetics.',
    contribution:
      'Numerical analysis of large-amplitude electroanalytical methods.',
    outcome:
      'The tested protocols can return apparent kinetic behavior that depends on the measurement and analysis assumptions.',
    paperUrl: 'https://doi.org/10.1021/acsenergylett.6c01178',
    essaySlug: 'measurement-challenge',
  },
  {
    id: 'urea-electrosynthesis',
    year: '2023',
    journal: 'Energy & Environmental Science',
    title: 'CO₂ and nitrate co-reduction to urea',
    summary:
      'Exploring catalyst structure and selectivity in multi-reactant electrocatalysis.',
    question:
      'How does catalyst modification affect selectivity when carbon and nitrogen reactants are reduced together?',
    approach:
      'Investigate structurally modified copper catalysts using electrochemical measurements and structural characterization.',
    contribution:
      'Concept development, experimental planning, and X-ray absorption studies.',
    outcome:
      'Reported improved urea electrosynthesis in the catalyst series. Performance trends and the proposed structural explanation are considered separately.',
    paperUrl: 'https://doi.org/10.1039/D3EE00008G',
  },
  {
    id: 'selective-oxygen-evolution',
    year: '2023',
    journal: 'Small',
    title: 'Selective oxygen evolution',
    summary:
      'Investigating how nanoscopic catalyst structure relates to oxygen evolution selectivity.',
    question:
      'How can catalyst structure influence oxygen evolution in competition with chlorine evolution?',
    approach:
      'Compare modified ruthenium oxide catalysts through electrochemical and X-ray characterization.',
    contribution:
      'Concept development, experimental design, and electrochemical and X-ray characterization.',
    outcome:
      'Reported oxygen-evolution performance and selectivity across the catalyst series, with a proposed interpretation based on nanoscopic structure.',
    paperUrl: 'https://doi.org/10.1002/smll.202206918',
  },
];
