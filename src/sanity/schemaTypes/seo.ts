import { defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Title that appears in search results and browser tabs',
      validation: (Rule: any) => Rule.max(60).warning('Titles over 60 characters may be truncated in search results')
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for search results',
      validation: (Rule: any) => Rule.max(160).warning('Descriptions over 160 characters may be truncated')
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for this page (optional)'
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image for social media sharing (1200x630px recommended)'
    }
  ]
})
