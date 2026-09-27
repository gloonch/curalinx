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

export const HERO = {
  heading: 'Main Heading Placeholder',
}

export const WHY = {
  eyebrow: 'Why Curalinx',
  title: 'Why Curalinx',
  intro: 'Choose your perspective to see how Curalinx works for you.',
  empty: 'Curalinx connects patients, health data and doctors. Pick a side above to see the details.',
  patient: {
    badge: 'For patients',
    title: 'Your health, connected',
    intro: LOREM,
    cards: [
      { icon: 'file-text', title: 'All your records together', text: LOREM_S },
      { icon: 'share-2', title: 'Share on your terms', text: LOREM_S },
      { icon: 'bell', title: 'Timely reminders', text: LOREM_S },
      { icon: 'shield-check', title: 'Private by default', text: LOREM_S },
      { icon: 'activity', title: 'Track what matters', text: LOREM_S },
      { icon: 'calendar', title: 'Easier appointments', text: LOREM_S },
    ],
  },
  doctor: {
    badge: 'For doctors',
    title: 'Full context before every visit',
    intro: LOREM,
    cards: [
      { icon: 'timeline', title: 'One patient timeline', text: LOREM_S },
      { icon: 'chart-column', title: 'Trends at a glance', text: LOREM_S },
      { icon: 'database', title: 'Structured health data', text: LOREM_S },
      { icon: 'lock', title: 'Secure access', text: LOREM_S },
      { icon: 'link', title: 'Connected to your workflow', text: LOREM_S },
      { icon: 'user-check', title: 'Better-prepared visits', text: LOREM_S },
    ],
  },
}

const FEATURES = ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor', 'Ut enim ad minim veniam', 'Quis nostrud exercitation', 'Duis aute irure dolor']

export const PLANS = {
  eyebrow: 'Plans',
  title: 'Choose Your Plan',
  intro: 'Placeholder pricing. Every plan can show a name, price, billing period, description, features and a call to action.',
  items: [
    { name: 'Plan One', price: '00', period: '/ month', description: LOREM_S, features: FEATURES.slice(0, 3), ctaLabel: 'Get Started', ctaSection: 'request-demo' },
    { name: 'Plan Two', price: '00', period: '/ month', description: LOREM_S, features: FEATURES.slice(0, 5), ctaLabel: 'Get Started', ctaSection: 'request-demo', featured: true },
    { name: 'Plan Three', price: '00', period: '/ month', description: LOREM_S, features: FEATURES, ctaLabel: 'Contact Sales', ctaSection: 'contact' },
  ],
}

export const DEMO = {
  eyebrow: 'Request a Demo',
  title: 'See Curalinx in action',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A short walkthrough tailored to you.',
  perks: [
    { icon: 'calendar', text: 'A 30-minute walkthrough at a time that suits you' },
    { icon: 'user-check', text: 'Tailored to doctors or patients' },
    { icon: 'shield-check', text: 'Your details stay private' },
  ],
}

export const NEWSLETTER = {
  title: 'Stay Updated with Curalinx',
  text: 'News and product updates from Curalinx. No spam, unsubscribe at any time.',
}

export const CONTACT = {
  eyebrow: 'Contact Us',
  title: 'Contact Us',
  intro: 'Questions, partnerships or press. We reply within one business day.',
  email: 'hello@curalinx.com',
  phone: '+1 (000) 000-0000',
  address: 'City, Country',
  subjects: ['General question', 'Partnerships', 'Press', 'Technical support'],
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
