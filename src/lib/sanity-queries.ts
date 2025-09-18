import { client } from './sanity'
import { groq } from 'next-sanity'

// Get single service by slug
export async function getService(slug: string) {
  return client.fetch(groq`
    *[_type == "service" && slug.current == $slug][0]{
      title,
      slug,
      shortDescription,
      icon,
      heroSection{
        headline,
        subtitle,
        backgroundImage{
          asset->{
            _id,
            url
          },
          alt
        },
        ctaText,
        ctaLink,
        brandLogo{
          asset->{
            _id,
            url
          },
          alt
        }
      },
      focusSection{
        sectionTitle,
        mainHeading,
        description,
        ctaText,
        ctaLink,
        sideImage{
          asset->{
            _id,
            url
          },
          alt
        }
      },
      servicesGrid{
        sectionTitle,
        services[]{
          icon{
            asset->{
              _id,
              url
            },
            alt
          },
          title,
          description
        },
        ctaText,
        ctaLink
      },
      advantagesGrid{
        sectionTitle,
        subtitle,
        advantages[]{
          number,
          title,
          description,
          readMoreLink
        }
      },
      faqSection{
        sectionTitle,
        subtitle,
        ctaText,
        ctaLink,
        faqs[]{
          question,
          answer
        }
      },
      pricing,
      seo,
      _id
    }
  `, { slug })
}

// Get all services (for generating static paths)
export async function getAllServices() {
  return client.fetch(groq`
    *[_type == "service"]{
      slug
    }
  `)
}

// Get services for listing (homepage, services overview)
export async function getServices() {
  return client.fetch(groq`
    *[_type == "service"] | order(title asc){
      title,
      slug,
      shortDescription,
      icon,
      heroSection{
        headline,
        subtitle,
        backgroundImage
      },
      pricing{
        startingPrice,
        pricingModel
      }
    }
  `)
}

// Get testimonials
export async function getTestimonials() {
  return client.fetch(groq`
    *[_type == "testimonial"] | order(featured desc, _createdAt desc){
      name,
      company,
      position,
      quote,
      rating,
      image,
      featured,
      serviceRelated->{
        title,
        slug
      }
    }
  `)
}

// Get simple pages (privacy, terms, etc.)
export async function getSimplePage(slug: string) {
  return client.fetch(groq`
    *[_type == "simplePage" && slug.current == $slug][0]{
      title,
      slug,
      content,
      lastUpdated,
      seo
    }
  `, { slug })
}
