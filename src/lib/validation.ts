import { z } from 'zod'

// ===========================================
// HELPER: UK & Nigerian Phone Number Validation
// ===========================================
const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '')

  // 1. UK Phone Number Validation
  const isUK = (() => {
    if (digits.startsWith('44')) {
      return digits.length === 12 && (digits.startsWith('447') || digits.startsWith('441') || digits.startsWith('442'))
    } else if (digits.startsWith('0')) {
      return digits.length === 11 && (digits.startsWith('07') || digits.startsWith('01') || digits.startsWith('02') || digits.startsWith('03'))
    } else if (digits.startsWith('7')) {
      return digits.length === 10
    }
    return false
  })()

  if (isUK) return true

  // 2. Nigerian Phone Number Validation
  const isNigerian = (() => {
    if (digits.startsWith('234')) {
      return digits.length === 13 && (digits.startsWith('23470') || digits.startsWith('23480') || digits.startsWith('23481') || digits.startsWith('23490') || digits.startsWith('23491') || digits.startsWith('23471') || digits.startsWith('23482') || digits.startsWith('23492'))
    } else if (digits.startsWith('0')) {
      return digits.length === 11 && (digits.startsWith('070') || digits.startsWith('080') || digits.startsWith('081') || digits.startsWith('090') || digits.startsWith('091') || digits.startsWith('071') || digits.startsWith('082') || digits.startsWith('092'))
    } else if (digits.length === 10) {
      return digits.startsWith('70') || digits.startsWith('80') || digits.startsWith('81') || digits.startsWith('90') || digits.startsWith('91') || digits.startsWith('71') || digits.startsWith('82') || digits.startsWith('92')
    }
    return false
  })()

  return isNigerian
}

// ===========================================
// CONTACT/ENQUIRY FORM SCHEMA
// ===========================================
export const enquiryFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, apostrophes and dots'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),

  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .refine(validatePhone, 'Please enter a valid UK or Nigerian phone number (e.g., 0803 123 4567 or +234 803 123 4567)'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),

  agreedToTerms: z
    .boolean()
    .refine(val => val === true, 'You must agree to the terms and privacy policy'),
})

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>

// ===========================================
// NEWSLETTER SCHEMA
// ===========================================
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// ===========================================
// BOOKING/DETAILED FORM SCHEMA
// ===========================================
export const bookingDetailsSchema = z.object({
  parentName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, apostrophes and dots'),

  parentEmail: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase(),

  parentPhone: z
    .string()
    .max(20, 'Phone number must be less than 20 characters')
    .refine(
      (val) => !val || validatePhone(val),
      'Please enter a valid UK or Nigerian phone number'
    )
    .optional()
    .or(z.literal('')),

  school: z
    .string()
    .min(2, 'School name must be at least 2 characters')
    .max(200, 'School name must be less than 200 characters'),

  yearGroup: z
    .string()
    .min(1, 'Please select a year group'),

  subjects: z
    .array(z.string())
    .min(1, 'Please select at least one subject'),

  referralSource: z
    .string()
    .min(1, 'Please tell us how you heard about us'),

  comments: z
    .string()
    .max(2000, 'Comments must be less than 2000 characters')
    .optional()
    .or(z.literal('')),
})

export type BookingDetailsData = z.infer<typeof bookingDetailsSchema>

// ===========================================
// HELPER: Get first validation error message
// ===========================================
export const getFirstError = (error: z.ZodError): string => {
  return error.issues[0]?.message || 'Validation failed'
}

// ===========================================
// HELPER: Get all validation errors as object
// ===========================================
export const getFieldErrors = (error: z.ZodError): Record<string, string> => {
  const errors: Record<string, string> = {}
  error.issues.forEach((err: z.ZodIssue) => {
    const path = err.path.join('.')
    if (!errors[path]) {
      errors[path] = err.message
    }
  })
  return errors
}
