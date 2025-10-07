import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Client Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url'
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'reference',
      to: [{ type: 'industry' }]
    },
    {
      name: 'description',
      title: 'Client Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'isPublic',
      title: 'Display Publicly',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show this client publicly'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'logo'
    }
  }
})