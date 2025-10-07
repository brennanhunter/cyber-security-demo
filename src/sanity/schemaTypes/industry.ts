import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Industry Name',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'icon',
      title: 'Industry Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon'
    }
  }
})