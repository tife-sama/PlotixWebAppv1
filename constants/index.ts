export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const coachDefaultValues = {
  firstName: '',
  lastName: '',
  aboutMe: '',
  location: '',
  imageUrl: '',
  videlUrl: '',
  headline: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: [],
  rate: '',
  isFree: false,
  url: '',
  needHelpWith: [],
  faq: [{ question: '', answer: '' }],
  workExperiences: [{ company: '', role: '', startDate: new Date(), endDate: undefined }],
  specilisations: [], // Assuming categoryArea is defined somewhere
  availability: { dayOfWeek: 0, startTime: '', endTime: '' },
  portfolioItems: [{ name: '', link: '', img: '' }],
};