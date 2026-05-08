export const NAV_LINKS = [
  { href: '#programs', label: 'Programs' },
  { href: '#track', label: 'Track' },
  { href: '#instructors', label: 'Instructors' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' }
] as const;

export const PROGRAMS = [
  { number: '01', title: 'FOUNDATIONS', duration: '4 weeks', skills: ['Bike control', 'Balance drills', 'Body positioning'], price: '₹ XX,XXX' },
  { number: '02', title: 'WHEELIE SCHOOL', duration: '6 weeks', skills: ['Power wheelies', 'Balance point control', 'Sit-down & stand-up wheelies'], price: '₹ XX,XXX' },
  { number: '03', title: 'STOPPIES & DRIFTS', duration: '8 weeks', skills: ['Front-wheel control', 'Controlled slides', 'Burnout mechanics'], price: '₹ XX,XXX' },
  { number: '04', title: 'COMPETITION PREP', duration: 'Custom', skills: ['Combo trick lines', 'Show choreography', 'Event readiness'], price: '₹ XX,XXX' }
] as const;

export const INSTRUCTORS = [
  { name: 'Rohan Deshmukh', title: 'Head Coach', experience: '12 years', specialty: 'Stunt progression', bio: 'National showcase rider focused on precision and rider confidence.' },
  { name: 'Aditya Patil', title: 'Technical Instructor', experience: '9 years', specialty: 'Wheelie mechanics', bio: 'Breaks down complex tricks into repeatable, safe modules.' },
  { name: 'Sneha Kulkarni', title: 'Safety & Skills Coach', experience: '8 years', specialty: 'Control drills', bio: 'Leads safety systems, braking drills, and bike-body alignment training.' },
  { name: 'Vikram Joshi', title: 'Advanced Program Lead', experience: '11 years', specialty: 'Drifts and burnouts', bio: 'Competition prep specialist for riders aiming at public showcases.' }
] as const;

export const TESTIMONIALS = [
  { quote: 'I came in scared of lifting the front wheel. Week three, I hit controlled wheelies with full confidence.', name: 'Aarav M.', meta: 'Age 22 • Foundations' },
  { quote: 'Every drill is structured. You feel the progress every session. Zero chaos, pure coaching.', name: 'Neha P.', meta: 'Age 27 • Wheelie School' },
  { quote: 'The safety standards are world class. I learned advanced slides without reckless trial-and-error.', name: 'Sahil R.', meta: 'Age 31 • Stoppies & Drifts' }
] as const;
