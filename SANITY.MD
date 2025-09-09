# Sanity CMS Integration Roadmap
## S.C.P Cybersecurity Website Content Management System

---

## 🎯 Overview

This document outlines the complete integration process for adding Sanity CMS to the S.C.P cybersecurity website, enabling non-technical content editing and management.

**Project Details:**
- Project ID: `u92bdikk`
- Dataset: `production`
- Template: `clean`

---

## 📋 Phase 1: Initial Setup & Installation

### Step 1: Install Sanity Studio
```bash
cd c:\Users\brenn\Documents\dev\cyber-security-demo
npm create sanity@latest -- --project u92bdikk --dataset production --template clean
```

**What this creates:**
- `sanity/` folder with Studio configuration
- Basic schema templates
- Sanity Studio dependencies
- Configuration files

### Step 2: Install Next.js Integration Packages ✅
```bash
npm install next-sanity @portabletext/react @sanity/image-url
```
**Status: COMPLETED** - All packages installed during Sanity setup

### Step 3: Environment Variables Setup ✅
Create/update `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=u92bdikk
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
NEXT_PUBLIC_SANITY_API_VERSION=2025-09-09
```
**Status: COMPLETED** - Auto-configured by Sanity CLI

---

## 🏛️ **ARCHITECTURE DECISION: Hybrid Approach**

### **Static Pages (No CMS)**
- ✅ **Home Page** - Full custom control, Matrix effects, 3D elements
- ✅ **Landing Page** - Marketing focused, high-performance
- ✅ **About Page** - Team showcase with custom animations

### **Dynamic Pages (CMS-Powered)**

#### **Tier 1: Rich CMS Pages** 🎯 *High Conversion Focus*
- **Service Pages** - Rich content, videos, text animations, interactive elements
- **Case Studies** - Client showcases, media galleries, success metrics
- **Blog Posts** - Technical insights, thought leadership content

#### **Tier 2: Standard CMS Pages** 📄 *Information Focus*  
- **FAQ Section** - Simple Q&A, searchable, categorized
- **Contact/Offices** - Location details, contact forms, maps
- **Careers** - Job listings, company culture, application forms
- **Support/Docs** - Help articles, technical guides, downloads

#### **Tier 3: Minimal CMS Pages** 📝 *Legal/Utility*
- **Privacy Policy** - Plain text, version tracking
- **Terms of Service** - Legal content, last updated dates
- **Cookie Policy** - Compliance text
- **Accessibility Statement** - Standard compliance info

---

## 🏗️ Phase 2: Schema Design & Content Architecture

### Content Types for Cybersecurity Site

#### CMS-Managed Content Types

##### **Service Pages** (Primary Focus)
- **Rich Content** - Detailed service descriptions with animations
- **Video Integration** - Demo videos, explainer content
- **Interactive Elements** - Animated text blocks, hover effects
- **Consistent Layout** - Template-based with customizable sections
- **Call-to-Actions** - Dynamic pricing, contact forms

##### **Blog & Case Studies**
- **Security Insights** - Technical articles with code snippets
- **Case Studies** - Client success stories with media
- **Threat Analysis** - Visual data presentations

##### **Supporting Content**
- **Testimonials** - Client reviews with rich media
- **Team Members** - Leadership profiles (if needed)
- **FAQ Section** - Dynamic Q&A with search

#### Site Configuration
- **Settings** (Site config, contact info, social links)
- **SEO Settings** (Meta descriptions, Open Graph)

### Schema Files to Create

```
src/sanity/schemaTypes/
├── index.ts              # Export all schemas
├── service.ts            # Service pages - RICH CONTENT
├── caseStudy.ts          # Case studies - MEDIA HEAVY
├── blogPost.ts           # Blog articles - RICH CONTENT
├── testimonial.ts        # Client testimonials
├── faq.ts                # FAQ entries - SIMPLE
├── simplePage.ts         # Legal/info pages - MINIMAL
├── jobPosting.ts         # Career listings - STANDARD
├── animatedText.ts       # Custom animated text blocks
├── videoSection.ts       # Video content blocks
├── settings.ts           # Site settings
└── seo.ts               # SEO metadata
```

### **Schema Complexity by Tier**

#### **Tier 1 Schemas (Rich Content)**
- ✅ **Full portable text** with custom blocks
- ✅ **Video/media integration** 
- ✅ **Animation controls**
- ✅ **Interactive elements**
- ✅ **Custom SEO fields**

#### **Tier 2 Schemas (Standard Content)**
- ✅ **Basic portable text**
- ✅ **Images and basic media**
- ✅ **Simple forms/CTAs**
- ✅ **Category organization**

#### **Tier 3 Schemas (Minimal Content)**
- ✅ **Plain text fields**
- ✅ **Basic formatting**
- ✅ **Version tracking**
- ✅ **Last updated dates**

---

## 🎬 **ANIMATION & MEDIA CAPABILITIES**

### **Text Animations in CMS** ✅ FULLY SUPPORTED
```typescript
// Custom animated text block in portable text
{
  name: 'animatedText',
  title: 'Animated Text',
  type: 'object',
  fields: [
    { name: 'text', title: 'Text Content', type: 'string' },
    { 
      name: 'animation', 
      title: 'Animation Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scramble Effect', value: 'scramble' },
          { title: 'Split Characters', value: 'splitChars' },
          { title: 'Glitch Text', value: 'glitch' },
          { title: 'Fade In Up', value: 'fadeInUp' },
          { title: 'Type Writer', value: 'typewriter' }
        ]
      }
    },
    { name: 'delay', title: 'Animation Delay (ms)', type: 'number' },
    { name: 'duration', title: 'Duration (ms)', type: 'number' }
  ]
}
```

### **Video Integration** ✅ NATIVE SUPPORT
```typescript
// Video content blocks
{
  name: 'videoSection',
  title: 'Video Section',  
  type: 'object',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'videoFile', title: 'Video File', type: 'file' },
    { name: 'posterImage', title: 'Video Thumbnail', type: 'image' },
    { name: 'autoplay', title: 'Autoplay', type: 'boolean' },
    { name: 'controls', title: 'Show Controls', type: 'boolean' }
  ]
}
```

### **Interactive Effects Available**
- ✅ **GSAP Animations** - Any content can be animated on scroll/load
- ✅ **Framer Motion** - Wrap CMS content with motion components  
- ✅ **CSS Animations** - Custom classes applied to content blocks
- ✅ **Video Backgrounds** - Hero sections with video content
- ✅ **Hover Effects** - Interactive service cards
- ✅ **Scroll Triggers** - Content animates as user scrolls

---

## 💻 Phase 3: Schema Implementation

### Example Schema: Page
```typescript
// sanity/schemas/page.ts
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text' },
        { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
        { name: 'ctaLink', title: 'CTA Link', type: 'string' },
        { name: 'backgroundImage', title: 'Background Image', type: 'image' }
      ]
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        // Custom components can be added here
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug}`
      }
    }
  }
}
```

### **Tier 1: Rich Service Schema**
```typescript
// src/sanity/schemaTypes/service.ts - FULL FEATURED
export default {
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3 },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Hero Headline', type: 'string' },
        { name: 'videoBackground', title: 'Background Video', type: 'file' },
        { name: 'ctaText', title: 'CTA Button', type: 'string' }
      ]
    },
    {
      name: 'content',
      title: 'Rich Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'animatedText' },
        { type: 'videoSection' },
        { type: 'image' }
      ]
    },
    { name: 'pricing', title: 'Pricing Info', type: 'object', fields: [...] }
  ]
}
```

### **Tier 2: Standard FAQ Schema**
```typescript
// src/sanity/schemaTypes/faq.ts - STANDARD CONTENT
export default {
  name: 'faq',
  title: 'FAQ Entry',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: Rule => Rule.required() },
    { name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }] },
    { 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Services', value: 'services' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Technical', value: 'technical' }
        ]
      }
    },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}
```

### **Tier 3: Minimal Legal Page Schema**
```typescript
// src/sanity/schemaTypes/simplePage.ts - MINIMAL CONTENT
export default {
  name: 'simplePage',
  title: 'Simple Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title' } },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'array', 
      of: [{ type: 'block' }] // Just basic text blocks
    },
    { name: 'lastUpdated', title: 'Last Updated', type: 'datetime', initialValue: () => new Date().toISOString() }
  ]
}
```

---

## 🔌 Phase 4: Next.js Integration

### Create Sanity Client
```typescript
// lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
})

// Image URL builder
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
```

### Create Query Functions
```typescript
// lib/sanity-queries.ts
import { client } from './sanity'
import { groq } from 'next-sanity'

// Get page by slug
export async function getPage(slug: string) {
  return client.fetch(groq`
    *[_type == "page" && slug.current == $slug][0]{
      title,
      slug,
      seo,
      heroSection,
      content
    }
  `, { slug })
}

// Get all services
export async function getServices() {
  return client.fetch(groq`
    *[_type == "service"] | order(title asc){
      title,
      slug,
      shortDescription,
      icon,
      features,
      pricing
    }
  `)
}

// Get blog posts
export async function getBlogPosts(limit = 10) {
  return client.fetch(groq`
    *[_type == "blogPost"] | order(publishedAt desc)[0...$limit]{
      title,
      slug,
      excerpt,
      publishedAt,
      author->{name, image},
      mainImage
    }
  `, { limit })
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
      featured
    }
  `)
}
```

---

## 🎨 Phase 5: Studio Customization

### Custom Studio Configuration
```typescript
// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemas } from './schemas'

export default defineConfig({
  name: 'scp-cybersecurity',
  title: 'S.C.P Cybersecurity CMS',
  
  projectId: 'u92bdikk',
  dataset: 'production',
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Pages
            S.listItem()
              .title('Pages')
              .child(
                S.documentTypeList('page')
                  .title('Pages')
              ),
            
            // Services
            S.listItem()
              .title('Services')
              .child(
                S.documentTypeList('service')
                  .title('Services')
              ),
            
            // Blog
            S.listItem()
              .title('Blog')
              .child(
                S.documentTypeList('blogPost')
                  .title('Blog Posts')
              ),
            
            // Settings (Singleton)
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
          ])
    }),
    visionTool(),
    colorInput()
  ],
  
  schema: {
    types: schemas
  },
  
  // Custom theme with brand colors
  theme: {
    '--brand-primary': '#D108CE', // Steel Pink
    '--brand-secondary': '#511F64', // Finn Purple
    '--component-bg': '#191d30', // Raisin Black
    '--component-text-color': '#EDEDED' // Ghost White
  }
})
```

---

## 🔄 Phase 6: Component Updates

### Update Existing Components to Use CMS Data

#### Hero Section Component
```typescript
// components/sections/hero-section.tsx
interface HeroSectionProps {
  data?: {
    headline: string
    subtitle: string
    ctaText: string
    ctaLink: string
    backgroundImage?: any
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  // Use CMS data or fallback to defaults
  const headline = data?.headline || "World-Leading Cybersecurity"
  const subtitle = data?.subtitle || "Powered By AI"
  // ... rest of component
}
```

#### Services Section Component
```typescript
// components/sections/services-section.tsx
import { getServices } from '@/lib/sanity-queries'

export default async function ServicesSection() {
  const services = await getServices()
  
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.slug.current} service={service} />
        ))}
      </div>
    </section>
  )
}
```

---

## 📱 Phase 7: Page Implementation

### Update Pages to Use CMS Data

#### Home Page
```typescript
// app/page.tsx
import { getPage, getServices, getTestimonials } from '@/lib/sanity-queries'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'

export default async function HomePage() {
  const [pageData, services, testimonials] = await Promise.all([
    getPage('home'),
    getServices(),
    getTestimonials()
  ])
  
  return (
    <PageWrapper>
      <HeroSection data={pageData?.heroSection} />
      <ServicesSection services={services} />
      <TestimonialsSection testimonials={testimonials} />
    </PageWrapper>
  )
}

// Generate metadata from CMS
export async function generateMetadata() {
  const page = await getPage('home')
  
  return {
    title: page?.seo?.title || 'S.C.P - Cybersecurity',
    description: page?.seo?.description || 'World-Leading Cybersecurity Powered By AI'
  }
}
```

#### Dynamic Service Pages
```typescript
// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/sanity-queries'
import { notFound } from 'next/navigation'

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug)
  
  if (!service) {
    notFound()
  }
  
  return (
    <PageWrapper>
      <ServiceDetailSection service={service} />
    </PageWrapper>
  )
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    slug: service.slug.current
  }))
}
```

---

## 🚀 Phase 8: Advanced Features

### Live Preview Setup
```typescript
// app/api/preview/route.ts
import { redirect } from 'next/navigation'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@/lib/sanity'

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    client.withConfig({ useCdn: false }),
    request.url
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  redirect(redirectTo)
}
```

### Webhooks for Auto-Deploy
```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Revalidate specific content
  if (body._type === 'page') {
    revalidateTag('pages')
  } else if (body._type === 'service') {
    revalidateTag('services')
  }
  
  return NextResponse.json({ revalidated: true })
}
```

---

## 📁 Final Project Structure

```
cyber-security-demo/
├── sanity/                           # Sanity Studio
│   ├── schemas/
│   │   ├── index.ts                 # Schema exports
│   │   ├── page.ts                  # Page schema
│   │   ├── service.ts               # Service schema
│   │   ├── blogPost.ts              # Blog post schema
│   │   ├── testimonial.ts           # Testimonial schema
│   │   ├── teamMember.ts            # Team member schema
│   │   ├── settings.ts              # Site settings
│   │   └── seo.ts                   # SEO schema
│   ├── sanity.config.ts             # Studio config
│   └── sanity.cli.ts                # CLI config
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── preview/route.ts     # Preview mode
│   │   │   └── revalidate/route.ts  # Webhook revalidation
│   │   ├── services/[slug]/         # Dynamic service pages
│   │   └── blog/[slug]/             # Dynamic blog pages
│   ├── lib/
│   │   ├── sanity.ts                # Sanity client
│   │   └── sanity-queries.ts        # Data fetching functions
│   └── components/
│       └── cms/                     # CMS-aware components
├── .env.local                       # Environment variables
└── package.json
```

---

## 🎯 Implementation Checklist

### Phase 1: Setup ✅ COMPLETE
- [x] Install Sanity Studio
- [x] Install Next.js packages  
- [x] Configure environment variables
- [x] Test studio access at `http://localhost:3000/studio`

### Phase 2: Schemas ✅ IN PROGRESS
- [x] Create SEO schema (utility)
- [x] Create animated text schema (custom component)
- [x] Create video section schema (custom component)
- [x] Create service schema (PRIMARY - rich content)
- [x] Create testimonial schema (supporting content)
- [x] Create simple page schema (minimal content)
- [ ] Create blog post schema (optional)
- [ ] Create case study schema (optional)
- [x] Test content creation in studio

### Phase 3: Integration ✅
- [ ] Set up Sanity client
- [ ] Create query functions
- [ ] Test data fetching
- [ ] Configure image optimization

### Phase 4: Components ✅
- [ ] Update hero section component
- [ ] Update services section component
- [ ] Update testimonials section component
- [ ] Create CMS-aware page components

### Phase 5: Pages ✅
- [ ] Update home page
- [ ] Create dynamic service pages
- [ ] Create dynamic blog pages
- [ ] Implement SEO metadata

### Phase 6: Advanced Features ✅
- [ ] Set up live preview
- [ ] Configure webhooks
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Test content updates

---

## 🛠️ Development Commands

```bash
# Start Next.js development server
npm run dev

# Start Sanity Studio (in separate terminal)
cd sanity && npm run dev

# Deploy Sanity Studio
cd sanity && npm run deploy

# Build for production
npm run build
```

---

## 📈 Benefits After Implementation

1. **Non-Technical Content Management**: Easy editing without code changes
2. **SEO Control**: Dynamic meta tags and structured data
3. **Content Versioning**: Track changes and rollback capabilities
4. **Team Collaboration**: Multiple editors with role-based permissions
5. **Asset Management**: Optimized image delivery via Sanity CDN
6. **Real-Time Updates**: Live preview and instant content updates
7. **Scalability**: Handle growing content needs efficiently

---

## 🚨 Security Considerations

- Use environment variables for sensitive data
- Implement proper CORS settings
- Set up content validation rules
- Configure user permissions appropriately
- Use HTTPS for all API calls
- Implement rate limiting on webhooks

---

*Last Updated: September 8, 2025*  
*Status: Planning Phase - Ready for Implementation*