import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    // Basic Service Info
    {
      name: 'title',
      title: 'Service Title',
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
    
    // MAIN FIELDS
    {
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
              { title: 'Animation', value: 'animation' }
            ]
          },
          validation: (Rule: Rule) => Rule.required()
        },
        {
          name: 'asset',
          title: 'Media Asset',
          type: 'image',
          description: 'Upload image, video, or animation file',
          options: {
            hotspot: true
          }
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for accessibility (optional)'
        },
        {
          name: 'poster',
          title: 'Video Poster Image',
          type: 'image',
          description: 'Thumbnail image for videos (optional)',
          hidden: ({ parent }) => parent?.type !== 'video'
        }
      ]
    },
    {
      name: 'category',
      title: 'Service Category',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'overview',
      title: 'Service Overview',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text overview of the service'
    },
    {
      name: 'scope',
      title: 'Service Scope',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What is included in this service scope'
    },

    // ARRAYS / STRUCTURED OBJECTS
    {
      name: 'process',
      title: 'Service Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Process Step Title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'detail',
              title: 'Process Details',
              type: 'array',
              of: [{ type: 'block' }]
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., "2-3 days", "1 week"'
            },
            {
              name: 'order',
              title: 'Step Order',
              type: 'number',
              validation: (Rule: Rule) => Rule.required().min(1)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'duration',
              order: 'order'
            },
            prepare({ title, subtitle, order }) {
              return {
                title: `${order}. ${title}`,
                subtitle
              }
            }
          }
        }
      ]
    },
    {
      name: 'deliverables',
      title: 'Service Deliverables',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Deliverable Title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3
            },
            {
              name: 'format',
              title: 'Deliverable Format',
              type: 'string',
              description: 'e.g., "PDF Report", "Excel Spreadsheet", "Video Presentation"'
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (Rule: Rule) => Rule.required().min(1)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'format',
              order: 'order'
            },
            prepare({ title, subtitle, order }) {
              return {
                title: `${order}. ${title}`,
                subtitle
              }
            }
          }
        }
      ]
    },
    {
      name: 'extra1',
      title: 'Additional Details 1',
      type: 'object',
      description: 'Optional collapsible section for extra information',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'notes',
          title: 'Notes',
          type: 'text',
          rows: 4
        },
        {
          name: 'technicalFields',
          title: 'Technical Fields',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'key',
                  title: 'Field Name',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required()
                },
                {
                  name: 'value',
                  title: 'Field Value',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'key',
                  subtitle: 'value'
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: 'industries',
      title: 'Target Industries',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'industry' }] }
      ]
    },
    {
      name: 'clients',
      title: 'Related Clients',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'client' }] }
      ]
    },
    {
      name: 'caseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'caseStudy' }] }
      ]
    },
    {
      name: 'certs',
      title: 'Related Certifications',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'cert' }] }
      ]
    },
    {
      name: 'extra2',
      title: 'Additional Details 2',
      type: 'object',
      description: 'Optional collapsible section for more extra information',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'notes',
          title: 'Notes',
          type: 'text',
          rows: 4
        },
        {
          name: 'technicalFields',
          title: 'Technical Fields',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'key',
                  title: 'Field Name',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required()
                },
                {
                  name: 'value',
                  title: 'Field Value',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'key',
                  subtitle: 'value'
                }
              }
            }
          ]
        }
      ]
    },
    {
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }]
            }
          ],
          preview: {
            select: {
              title: 'question'
            }
          }
        }
      ]
    },
    {
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        {
          name: 'pricingModel',
          title: 'Pricing Model',
          type: 'string',
          options: {
            list: [
              { title: 'Fixed Price', value: 'Fixed' },
              { title: 'Time & Materials', value: 'T&M' },
              { title: 'Subscription', value: 'Subscription' },
              { title: 'Custom Quote', value: 'Custom' }
            ]
          },
          validation: (Rule: Rule) => Rule.required()
        },
        {
          name: 'pricingTiers',
          title: 'Pricing Tiers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Tier Label',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required(),
                  description: 'e.g., "Basic", "Professional", "Enterprise"'
                },
                {
                  name: 'priceRange',
                  title: 'Price Range',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required(),
                  description: 'e.g., "$5,000 - $10,000", "Starting at $2,500"'
                },
                {
                  name: 'includes',
                  title: 'What\'s Included',
                  type: 'array',
                  of: [{ type: 'string' }],
                  description: 'List of features/services included in this tier'
                }
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'priceRange'
                }
              }
            }
          ]
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
      subtitle: 'category.title',
      media: 'heroMedia.asset'
    }
  }
})
