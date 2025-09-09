import { type SchemaTypeDefinition } from 'sanity'
import seo from './seo'
import simplePage from './simplePage'
import testimonial from './testimonial'
import service from './service'
import animatedText from './animatedText'
import videoSection from './videoSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types (main content)
    service,
    simplePage,
    testimonial,
    
    // Object types (reusable components)
    animatedText,
    videoSection,
    seo,
  ],
}
