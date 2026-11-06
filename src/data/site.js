// ── Single source of truth for site facts ─────────────────────────────
// Edit facts here (jobs, skills, stats, contact) and every page updates.

export const profile = {
  name: 'Nitendra Gautam',
  headline:
    'Lead Data Engineer | Scalable Data & AI/ML Platforms (AWS, Spark, Databricks | Cloud Data Lakes)',
  summary:
    'Lead Data/Software Engineering Leader with 14+ years designing scalable cloud and private-cloud data platforms, with AI/ML implementation and cloud migration — and mentorship of 15+ engineers along the way.',
  motto: 'Sharing knowledge with the world.',
  email: 'nitendratech@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nitendragautam',
  linkedinLabel: 'linkedin.com/in/nitendragautam',
  facebook: 'https://www.facebook.com/nitendratech',
  instagram: 'https://www.instagram.com/nitendratech/',
  phone: '214.843.0317',
  location: 'Little Elm, TX',
};

export const stats = [
  { end: 14, suffix: '+', label: 'Years of Experience' },
  { end: 6, prefix: '$', suffix: 'M+', label: 'Cost Savings Delivered' },
  { end: 500, suffix: 'M+', label: 'Records Processed Daily' },
  { end: 15, suffix: '+', label: 'Engineers Mentored' },
];

// NOTE: percentages are indicative, carried over from the earlier
// portfolio site — review and adjust here in one place.
export const skills = [
  { name: 'Apache Spark', level: 95 },
  { name: 'Databricks', level: 92 },
  { name: 'AWS', level: 90 },
  { name: 'Delta Lake / Lakehouse', level: 90 },
  { name: 'Python', level: 88 },
  { name: 'Apache Hadoop', level: 88 },
  { name: 'Apache Airflow', level: 85 },
  { name: 'Oracle SQL', level: 85 },
  { name: 'Stream Processing', level: 84 },
  { name: 'Kubernetes', level: 82 },
  { name: 'Apache Cassandra', level: 80 },
  { name: 'Machine Learning', level: 80 },
];

export const timeline = [
  {
    dates: 'May 2020 – Present',
    title: 'Lead Data Engineer',
    org: 'JPMorgan Chase · Texas',
    points: [
      '$3M+/yr savings modernising regulatory pipelines',
      '88% faster batch processing',
      'Petabyte-scale Databricks / Delta Lake lakehouse',
    ],
    tags: ['Spark', 'Databricks', 'AWS', 'Kubernetes'],
  },
  {
    dates: 'Jan 2018 – Mar 2020',
    title: 'Data Lake Platform Architect / Developer',
    org: 'AT&T · Texas',
    points: [
      'Spark jobs processing billions of records daily',
      'Job runtime cut from 8 hours to 1 hour',
      '20% analytics / reporting improvement',
    ],
    tags: ['Spark', 'Hadoop', 'SQL'],
  },
  {
    dates: 'Oct 2015 – Dec 2017',
    title: 'Big Data Developer',
    org: 'Verizon · Texas',
    points: [
      '$3M/yr savings from a 360-degree customer platform',
      '2M+ devices integrated for log analytics',
      '50% faster SDLC',
    ],
    tags: ['Spark', 'Hadoop', 'ETL'],
  },
  {
    dates: 'May 2015 – Oct 2015',
    title: 'Hadoop / Big Data Developer',
    org: 'United Healthcare · Texas',
    points: [
      'Fraud detection on the Hadoop platform',
      'Spark ETL processing 500M+ records daily',
    ],
    tags: ['Spark', 'Hadoop'],
  },
  {
    dates: 'Sep 2014 – May 2015',
    title: 'Big Data Developer',
    org: 'Cox Communications · Georgia',
    points: [
      'Real-time log analytics',
      'Performance benchmark on an 11-node Cassandra cluster',
    ],
    tags: ['Cassandra', 'Hadoop'],
  },
  {
    dates: 'Aug 2011 – Sep 2014',
    title: 'Big Data / Graduate Research Assistant',
    org: 'North Dakota State University · Fargo, ND',
    points: [
      'Predictive agriculture analytics and ML research',
      'Satellite and NDVI data analysis',
    ],
    tags: ['Python', 'Machine Learning'],
  },
  {
    dates: 'Jan 2010 – Apr 2010',
    title: 'Process & Data Quality Analyst',
    org: 'DPO Thailand · Thailand',
    points: [
      'Statistical process and root-cause analysis',
      'Lean Six Sigma optimisation, KPI and data quality',
    ],
    tags: ['Statistics', 'Six Sigma'],
  },
];

export const education = [
  {
    year: '2018',
    title: 'Master of Science in Computer Science',
    org: 'North Dakota State University · Fargo, ND',
  },
  {
    year: '2014',
    title: 'Graduate Certificate in Statistics',
    org: 'North Dakota State University · Fargo, ND',
  },
  {
    year: '2026',
    title: 'Artificial Intelligence: Implications for Business Strategy',
    org: 'MIT Sloan School of Management, Cambridge, MA ',
  }
];
// The six stable top-level categories. Slugs are used in URLs.
export const categories = [
  { name: 'Data Engineering', slug: 'data-engineering', sub: 'Spark, Lakehouse, Pipelines, Streaming, Observability' },
  { name: 'AI & ML Platforms', slug: 'ai-ml-platforms', sub: 'GenAI & Agents, RAG & Vector Search, ML-Ready Data' },
  { name: 'Cloud & Architecture', slug: 'cloud-architecture', sub: 'AWS, Databricks, Kubernetes, Cost & Scale' },
  { name: 'Core Tech & Programming', slug: 'core-tech-programming', sub: 'Linux, SQL & Databases, Hadoop, CS Fundamentals' },
  { name: 'Engineering Leadership', slug: 'engineering-leadership', sub: 'Mentoring, Migrations, Career, Interviews' },
  { name: 'General Technology', slug: 'general-technology', sub: 'General technology topics that do not fit the other categories' },
  { name: 'Non-Technical', slug: 'non-technical', sub: 'Non-technical posts — life, observations, and everything outside technology' },
];
