import { type SchemaTypeDefinition } from 'sanity'
import seo from './seo'
import simplePage from './simplePage'
import testimonial from './testimonial'
import service from './service'
import animatedText from './animatedText'
import videoSection from './videoSection'
import serviceCategory from './serviceCategory'
import industry from './industry'
import client from './client'
import caseStudy from './caseStudy'
import cert from './cert'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types (main content)
    service,
    serviceCategory,
    industry,
    client,
    caseStudy,
    cert,
    simplePage,
    testimonial,
    
    // Object types (reusable components)
    animatedText,
    videoSection,
    seo,
  ],
}
