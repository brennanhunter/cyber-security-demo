import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'team',
      title: 'Service Team',
      type: 'string',
      options: {
        list: [
          { title: 'Pentest Team', value: 'pentest-team' },
          { title: 'AppSec Team', value: 'appsec-team' },
          { title: 'Purple Team', value: 'purple-team' },
          { title: 'Red Team', value: 'red-team' },
          { title: 'Tiger Team', value: 'tiger-team' },
          { title: 'BlackOps Team', value: 'blackops-team' }
        ]
      },
      validation: (Rule: Rule) => Rule.required(),
      description: 'Which team this service belongs to for navigation grouping'
    },
    {
      name: 'displayName',
      title: 'Display Name (for navigation)',
      type: 'string',
      description: 'Short name for navigation menus (e.g., "API Pen." instead of "API Penetration Testing")'
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for service cards and previews'
    },
    {
      name: 'icon',
      title: 'Service Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Shield (Protection)', value: 'shield' },
          { title: 'Lock (Security)', value: 'lock' },
          { title: 'Eye (Monitoring)', value: 'eye' },
          { title: 'Zap (Performance)', value: 'zap' },
          { title: 'Scan (Analysis)', value: 'scan' },
          { title: 'Code (Development)', value: 'code' },
          { title: 'Network (Infrastructure)', value: 'network' },
          { title: 'Alert (Incident Response)', value: 'alert' }
        ]
      }
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          description: 'Main headline like "Attacking to Protect: Your Best Defense is Our Attack!"'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
          description: 'Supporting text under the headline'
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Get in Touch'
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'Contact form or external link'
        },
        {
          name: 'brandLogo',
          title: 'Brand Logo',
          type: 'image',
          description: 'Red Team logo or brand mark'
        }
      ]
    },
    {
      name: 'focusSection',
      title: 'Our Focus Section',
      type: 'object',
      description: 'The section with content on left and image on right',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'e.g., "Our focus"'
        },
        {
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'string',
          description: 'e.g., "Simulations: Revealing vulnerabilities and fortifying your defenses."'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 6,
          description: 'The detailed explanation paragraph'
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Get in Touch'
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        },
        {
          name: 'sideImage',
          title: 'Side Image',
          type: 'image',
          options: {
            hotspot: true
          },
          description: 'Image to display on the right side'
        }
      ]
    },
    {
      name: 'servicesGrid',
      title: 'Services Grid ("What we do")',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'What we do'
        },
        {
          name: 'services',
          title: 'Service Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Service Icon',
                  type: 'image',
                  description: 'Red diamond icon or custom icon'
                },
                {
                  name: 'title',
                  title: 'Service Title',
                  type: 'string',
                  description: 'e.g., "Threat Alerts Validation"'
                },
                {
                  name: 'description',
                  title: 'Service Description',
                  type: 'text',
                  rows: 4
                }
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description'
                }
              }
            }
          ]
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Hire our services'
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        }
      ]
    },
    {
      name: 'advantagesGrid',
      title: 'Red Team Advantages Grid',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Red Team Advantages'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          description: 'e.g., "Invest in robust defenses, proactive vulnerability identification..."'
        },
        {
          name: 'advantages',
          title: 'Advantage Cards',
          type: 'array',
          validation: (Rule: Rule) => Rule.max(9),
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Card Number',
                  type: 'number',
                  validation: (Rule: Rule) => Rule.min(1).max(9)
                },
                {
                  name: 'title',
                  title: 'Advantage Title',
                  type: 'string',
                  description: 'e.g., "Proactive Resilience Assessment"'
                },
                {
                  name: 'description',
                  title: 'Advantage Description',
                  type: 'text',
                  rows: 3
                },
                {
                  name: 'readMoreLink',
                  title: 'Read More Link',
                  type: 'string',
                  description: 'Optional link for more details'
                }
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'number'
                },
                prepare({ title, subtitle }) {
                  return {
                    title,
                    subtitle: `#${subtitle}`
                  }
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Frequently asked questions'
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          description: 'Text under the title'
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Get in Touch'
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string'
        },
        {
          name: 'faqs',
          title: 'FAQ Questions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'string'
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  rows: 4
                }
              ],
              preview: {
                select: {
                  title: 'question',
                  subtitle: 'answer'
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        {
          name: 'startingPrice',
          title: 'Starting Price',
          type: 'number',
          description: 'Starting price in USD'
        },
        {
          name: 'pricingModel',
          title: 'Pricing Model',
          type: 'string',
          options: {
            list: [
              { title: 'One-time', value: 'one-time' },
              { title: 'Monthly', value: 'monthly' },
              { title: 'Annual', value: 'annual' },
              { title: 'Custom Quote', value: 'custom' }
            ]
          }
        },
        {
          name: 'pricingDetails',
          title: 'Pricing Details',
          type: 'text',
          rows: 3
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'heroSection.backgroundImage'
    }
  }
})
