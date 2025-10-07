import { defineType } from 'sanity'
import { Rule } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Case Study Title',
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
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }]
    },
    {
      name: 'summary',
      title: 'Case Study Summary',
      type: 'text',
      rows: 3,
      description: 'Brief summary for previews'
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What was the problem/challenge?'
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'How did you solve it?'
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What were the outcomes?'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of tools/technologies used'
    },
    {
      name: 'timeline',
      title: 'Project Timeline',
      type: 'string',
      description: 'e.g., "3 months", "6 weeks"'
    },
    {
      name: 'isPublic',
      title: 'Display Publicly',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show this case study publicly'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
      media: 'featuredImage'
    }
  }
})