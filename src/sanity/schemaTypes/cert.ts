import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'cert',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Certification Name',
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
      name: 'issuer',
      title: 'Issuing Organization',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g., "CompTIA", "EC-Council", "ISC2"'
    },
    {
      name: 'badge',
      title: 'Certification Badge/Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'What this certification covers'
    },
    {
      name: 'level',
      title: 'Certification Level',
      type: 'string',
      options: {
        list: [
          { title: 'Entry Level', value: 'entry' },
          { title: 'Associate', value: 'associate' },
          { title: 'Professional', value: 'professional' },
          { title: 'Expert', value: 'expert' },
          { title: 'Master', value: 'master' }
        ]
      }
    },
    {
      name: 'validityPeriod',
      title: 'Validity Period',
      type: 'string',
      description: 'e.g., "3 years", "Lifetime", "Annual renewal"'
    },
    {
      name: 'website',
      title: 'Certification Website',
      type: 'url',
      description: 'Link to certification details'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
      media: 'badge'
    }
  }
})