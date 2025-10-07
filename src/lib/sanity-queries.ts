import { client } from './sanity'
import { groq } from 'next-sanity'

// Get single service metadata (lightweight for generateMetadata)
export async function getServiceMeta(slug: string) {
  return client.fetch(groq`
    *[_type == "service" && slug.current == $slug][0]{
      title,
      slug,
      overview,
      heroMedia{
        alt,
        "url": asset->url
      },
      seo
    }
  `, { slug }, { 
    next: { revalidate: 3600 }, // Cache for 1 hour
    cache: 'force-cache' 
  })
}

// Get full service data (for page component)
export async function getService(slug: string) {
  return client.fetch(groq`
    *[_type == "service" && slug.current == $slug][0]{
      title,
      slug,
      heroMedia{
        type,
        asset{
          asset->{
            _id,
            url,
            metadata{
              dimensions{
                width,
                height
              }
            }
          }
        },
        alt,
        poster{
          asset->{
            _id,
            url
          },
          alt
        }
      },
      category->{
        title,
        slug,
        description,
        color
      },
      overview,
      scope,
      process[]{
        title,
        detail,
        duration,
        order
      },
      deliverables[]{
        title,
        description,
        format,
        order
      },
      extra1{
        notes,
        technicalFields[]{
          key,
          value
        }
      },
      industries[]->{
        title,
        slug,
        description,
        icon{
          asset->{
            _id,
            url
          },
          alt
        }
      },
      clients[]->{
        name,
        slug,
        logo{
          asset->{
            _id,
            url
          },
          alt
        },
        website,
        isPublic
      },
      caseStudies[]->{
        title,
        slug,
        summary,
        featuredImage{
          asset->{
            _id,
            url
          },
          alt
        },
        timeline,
        isPublic
      },
      certs[]->{
        title,
        slug,
        issuer,
        badge{
          asset->{
            _id,
            url
          },
          alt
        },
        level,
        description
      },
      extra2{
        notes,
        technicalFields[]{
          key,
          value
        }
      },
      faqs[]{
        question,
        answer
      },
      pricing{
        pricingModel,
        pricingTiers[]{
          label,
          priceRange,
          includes[]
        }
      },
      seo,
      _id
    }
  `, { slug }, { 
    next: { revalidate: 3600 }, // Cache for 1 hour
    cache: 'force-cache' 
  })
}

// Get all services (for generating static paths)
export async function getAllServices() {
  return client.fetch(groq`
    *[_type == "service"]{
      slug
    }
  `, {}, { 
    next: { revalidate: 3600 }, // Cache for 1 hour
    cache: 'force-cache' 
  })
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
  `, {}, { 
    next: { revalidate: 3600 }, // Cache for 1 hour
    cache: 'force-cache' 
  })
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
  `, {}, { 
    next: { revalidate: 1800 }, // Cache for 30 minutes
    cache: 'force-cache' 
  })
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
  `, { slug }, { 
    next: { revalidate: 3600 }, // Cache for 1 hour
    cache: 'force-cache' 
  })
}

// Get services grouped by teams for navigation
export async function getServicesForNavigation() {
  return client.fetch(groq`
    *[_type == "service"] | order(category->title asc, title asc){
      title,
      slug,
      category->{
        title,
        slug
      }
    }
  `, {}, { 
    next: { revalidate: 1800 }, // Cache for 30 minutes
    cache: 'force-cache' 
  })
}

// Get team pages (for team landing pages)
export async function getTeamServices(team: string) {
  return client.fetch(groq`
    *[_type == "service" && team == $team] | order(title asc){
      title,
      slug,
      shortDescription,
      icon,
      heroSection{
        headline,
        subtitle
      },
      pricing{
        startingPrice,
        pricingModel
      }
    }
  `, { team }, { 
    next: { revalidate: 1800 }, // Cache for 30 minutes
    cache: 'force-cache' 
  })
}
