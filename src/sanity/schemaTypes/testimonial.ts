import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'position',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(1).max(5).integer(),
      options: {
        list: [
          { title: '⭐ 1 Star', value: 1 },
          { title: '⭐⭐ 2 Stars', value: 2 },
          { title: '⭐⭐⭐ 3 Stars', value: 3 },
          { title: '⭐⭐⭐⭐ 4 Stars', value: 4 },
          { title: '⭐⭐⭐⭐⭐ 5 Stars', value: 5 }
        ]
      },
      initialValue: 5
    },
    {
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      description: 'Professional headshot (optional)'
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial in prominent locations',
      initialValue: false
    },
    {
      name: 'serviceRelated',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Which service is this testimonial about?'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image'
    }
  }
})
