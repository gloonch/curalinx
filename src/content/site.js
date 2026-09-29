// All user-facing copy lives here so placeholder text is easy to replace.
// Every string shown in the UI must be English.

export const NAV_LINKS = [
  { label: 'Why Curalinx', section: 'why-curalinx' },
  { label: 'Plans', section: 'plans' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', section: 'contact' },
]

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const LOREM_S = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

// Live estimates, counted from 00:00 UTC so every visitor sees the same number.
// All visible strings are the site copy, verbatim.
export const HERO = {
  live: 'live estimate',
  scroll: 'scroll',
  stats: [
    {
      id: 'diabetes',
      title: 'new diabetes cases in Italy',
      perSecond: 1 / 90,
      counted: 'Counted from 00:00 UTC today',
      rate: 'rate: +0.011 per second (1 every 90 seconds)',
      source: 'source: AGENAS/Ministry of Health, 2025',
      note: 'Estimated from annual incidence spread evenly over the year; not a real-time count.',
    },
    {
      id: 'dementia',
      title: 'New dementia cases',
      perSecond: 1 / 90,
      counted: 'Counted from 00:00 UTC today',
      rate: 'rate: +0.011 per second (1 every 90 seconds)',
      source: 'source: AUSL Piacenza, 2025',
      note: 'Estimated from annual incidence spread evenly over the year; not a real-time count',
    },
    {
      id: 'cardio',
      title: 'New cardiovascular, kidney and metabolic disease cases',
      perSecond: 1 / 36,
      counted: 'Counted from 00:00 UTC today',
      rate: 'rate: +0.028 per second (1 every 36 seconds)',
      source: 'source: ANSA, 2026',
      note: 'Estimated from annual incidence spread evenly over the year; not a real-time count',
    },
  ],
}

export const WHY = {
  title: 'why curalinX?',
  // The problem (left) and how curalinX answers it (right).
  story: {
    problem: [
      'Chronic conditions represent a significant burden on healthcare systems. Yet their management is still often centered around specific moments: an appointment, a prescription, a check-up.',
      'Between appointments, patients continue to live with their condition: symptoms change, treatments continue, events occur and new information emerges.',
      'Yet much of what happens during this time can remain fragmented or may not be available at the time of the visit.',
    ],
    quote: 'Care is episodic, but the chronic condition is continuous, and patients’ lives change every day.',
    answerTitle: 'curalinX was created to bridge this gap.',
    answer: [
      'It creates digital continuity between what happens every day and what happens during the medical visit.',
      'CuralinX collects information throughout the patient’s care journey and organizes it into a structured overview, making the care journey more organized and easier to share between patients with a chronic condition and private healthcare professionals.',
    ],
  },
  prompt: 'Choose your perspective to see how curalinX works for you',
  empty: 'Curalinx connects patients, health data and doctors. Pick a side above to see the details.',
  plansEyebrow: 'Plans',
  plansTitle: 'choose your plan',
  patient: {
    tab: 'I’m a patient',
    plansFor: '(for patients)',
    title: 'Your care journey, always with you',
    intro: [
      'curalinX supports you between appointments and stays with you throughout your healthcare journey. It helps you organize your information over time, find what matters when you need it, and share it with your healthcare professionals.',
    ],
    cards: [
      { icon: 'file-text', title: 'Complete Tracking', text: 'Record symptoms, treatments, medical reports, visit summaries, tests, and relevant events. Your information is organized over time, giving you a complete and organized view of your care journey.' },
      { icon: 'calendar', title: 'Appointments', text: 'Add appointments you have already scheduled, even when booked through other channels, or access the appointment options available through curalinX.' },
      { icon: 'bell', title: 'Reminders', text: 'Receive reminders to take your medication, when your medication is running low, and for upcoming appointments and tests.' },
      { icon: 'star', title: 'Keep Track of What Matters', text: 'Choose the information you want to pay closer attention to and quickly access the elements that are most relevant to your care journey.' },
      { icon: 'share-2', title: 'Sharing', text: 'Create a structured summary of your care journey and share it with your healthcare professional, with your consent.' },
      { icon: 'shield-check', title: 'Privacy', text: 'Your healthcare information is managed with respect for your privacy and your choices regarding how your data is managed and shared.' },
    ],
    plans: [
      {
        name: 'Basic',
        description: 'Everything you need to organize your healthcare journey.',
        features: [
          'Record symptoms and events',
          'Manage medications and treatments',
          'Reminders of appointments and tests',
          'Healthcare timeline',
          'Share information with healthcare professionals',
        ],
        ctaLabel: 'Get Started',
        ctaSection: 'request-demo',
      },
      {
        name: 'Pro',
        description: 'More flexibility and convenience for managing your healthcare journey.',
        features: [
          'Everything included in the Basic Plan',
          { title: 'Family & Caregiver Access', text: 'Invite a family member or caregiver to take part in managing the patient’s healthcare journey.' },
          { title: 'Voice Assistance', text: 'Record symptoms, events, and other information about your healthcare journey by voice, without having to type.' },
          { title: 'Photo Uploads', text: 'Add photos to your records to visually document information you want to keep as part of your healthcare journey.' },
        ],
        ctaLabel: 'Get Started',
        ctaSection: 'request-demo',
        featured: true,
      },
    ],
  },
  doctor: {
    tab: 'I\'m a doctor',
    plansFor: '(for doctors)',
    title: 'More time for the patient, less time reconstructing their history',
    intro: [
      'During each appointment, part of the time may be spent reconstructing what has happened since the previous visit: symptoms, treatments, events, and other information reported by the patient. Patients may not always remember every event that occurred during this period.',
      'curalinX organizes this information over time and makes it available during the appointment, with the patient’s consent.',
      'This allows healthcare professionals to review the patient’s reported history more efficiently and dedicate more time to discussion and their professional work.',
    ],
    cards: [
      { icon: 'calendar', title: 'Appointments & Scheduling', text: 'Manage appointment requests and view the reason for the visit provided by the patient when making the request.' },
      { icon: 'clipboard-list', title: 'Visit Preparation', text: 'Share practical guidance with patients about what to bring to the appointment, which documents they may need, or how to prepare.' },
      { icon: 'user-check', title: 'Patient Summary', text: 'With the patient’s consent, view information recorded between appointments, including symptoms, medications, events, and changes reported by the patient.' },
      { icon: 'chart-column', title: 'Timeline & Charts', text: 'View information shared by the patient through charts organized over time, making it easier to review.' },
      { icon: 'sliders-horizontal', title: 'Personalization', text: 'Filter and select the information you want to view, choosing which elements to see first during your review.' },
      { icon: 'monitor-smartphone', title: 'Safe access', text: 'Access curalinX from your computer, tablet, or smartphone, whether at the practice or remotely, without installing software. Information is managed with respect for privacy.' },
    ],
    plans: [
      {
        name: 'Individual Doctor',
        description: 'For a single private healthcare professional.',
        features: [
          'Access to the professional portal',
          'Patient healthcare journey summary',
          'Information timeline',
          'Charts and visualizations',
          'Filters and customization',
          'Appointments & Scheduling',
        ],
        ctaLabel: 'Get Started',
        ctaSection: 'request-demo',
      },
      {
        name: 'Private Practice',
        description: 'For up to 5 healthcare professionals.',
        features: [
          'Portal access with separate dashboards',
          'Patient healthcare journey summary',
          'Information timeline',
          'Charts and visualizations',
          'Filters and customization',
          'Role and permission management',
          'Appointments & Scheduling',
        ],
        ctaLabel: 'Get Started',
        ctaSection: 'request-demo',
        featured: true,
      },
    ],
  },
}

export const DEMO = {
  eyebrow: 'Request a demo',
  title: 'See curalinX in action',
  lead: 'A chance to see how curalinX works and how it can fit into your healthcare journey.',
  intro: 'During the demo, you’ll explore the platform’s main features, see how information is organized, and discover how CuralinX connects patients and healthcare professionals between appointments.',
  fields: {
    name: 'full name',
    namePlaceholder: 'Jane Cooper',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    role: 'i am a',
    doctor: 'doctor',
    patient: 'patient',
    organization: 'organization(optional)',
    phone: 'phone number (optional)',
    phonePlaceholder: '+39 000 000 0000',
    message: 'message',
    messagePlaceholder: 'what would you like to see in the demo?',
  },
  consent: 'By submitting you agree to our Privacy Policy.',
}

export const NEWSLETTER = {
  title: 'Stay Updated with curalinX',
  text: 'News and product updates from curalinX. No spam, unsubscribe at any time.',
  email: 'Email address',
  emailPlaceholder: 'enter your email address',
  submit: 'subscribe',
}

export const CONTACT = {
  title: 'contact us',
  intro: 'Questions, partnerships or press. We reply within one business day.',
  fields: {
    name: 'name',
    subject: 'subject',
    subjectPlaceholder: 'choose a subject',
    message: 'message',
    submit: 'send message',
  },
  email: 'hello@curalinx.com',
  phone: '+1 (000) 000-0000',
  address: 'City, Country',
  subjects: ['general question', 'partnerships', 'press', 'tech support'],
}

export const FOOTER = {
  about: 'About us',
  product: 'Product',
  contact: 'contact',
}

export const SOCIAL = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com' },
]

export const ABOUT = {
  eyebrow: 'About Us',
  title: 'The Team Behind Curalinx',
  lead: `Curalinx connects patients, their health data and their doctors. ${LOREM} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  pillars: [
    { title: 'Our Mission', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
    { title: 'Our Vision', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
    { title: 'Our Team', text: `${LOREM_S} Sed do eiusmod tempor incididunt ut labore.` },
  ],
}

// Add `photo: '/team/name.jpg'` (file in /public/team) when real photos are ready.
export const TEAM = [
  { name: 'Team Member One', role: 'Co-founder & CEO', tone: 'brand', bio: `Short bio placeholder. ${LOREM_S}` },
  { name: 'Team Member Two', role: 'Co-founder & CTO', tone: 'doctor', bio: `Short bio placeholder. ${LOREM_S}` },
  { name: 'Team Member Three', role: 'Head of Clinical', tone: 'patient', bio: `Short bio placeholder. ${LOREM_S}` },
  { name: 'Team Member Four', role: 'Lead Product Designer', tone: 'brand', bio: `Short bio placeholder. ${LOREM_S}` },
  { name: 'Team Member Five', role: 'Data & Security Lead', tone: 'doctor', bio: `Short bio placeholder. ${LOREM_S}` },
]
