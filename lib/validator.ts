import * as z from "zod"

export const FocusArea = z.enum(['writing', 'storytelling', 'structure']);
export const categoryArea = z.enum(['Journalism', 'Screenwriter', 'Comic', 'Manga', 'Games'])

export const coachFormSchema = z.object({
  // title: z.string().min(3, 'Title must be at least 3 characters'),
  firstName: z.string().min(3, 'First Name must be atleast 3 charecters').max(50),
  lastName: z.string().min(3, 'Last Name emust be atleast 3 charecters').max(50),
  aboutMe: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  videoUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.array(FocusArea),
  rate: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
  headline: z.string().min(3, 'Headline must be atleast 3 charecters').max(25, 'Head must be less than 25 charecters'),
  needHelpWith: z.array(FocusArea).min(2, "Must have at least 2 focus Areas"),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })),
  workExperiences: z.array(z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
  })),
  specilisations: z.array(categoryArea),
  availability: z.object({
    dayOfWeek: z.number(),
    startTime: z.string(),
    endTime: z.string(),
  }),
  portfolioItems: z.array(z.object({
    name: z.string(),
    link: z.string(),
    img: z.string(),
  })),

})