import { defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
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
          title: 'Hero Headline',
          type: 'string',
          description: 'Main headline for the service page'
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
          rows: 2
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image'
        },
        {
          name: 'videoBackground',
          title: 'Background Video (Optional)',
          type: 'file',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Get Started'
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'Contact form or external link'
        }
      ]
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text', rows: 2 },
            { 
              name: 'icon', 
              title: 'Feature Icon', 
              type: 'string',
              options: {
                list: [
                  { title: '🛡️ Shield (Protection)', value: 'shield' },
                  { title: '🔒 Lock (Security)', value: 'lock' },
                  { title: '👁️ Eye (Monitoring)', value: 'eye' },
                  { title: '⚡ Zap (Performance)', value: 'zap' },
                  { title: '🔍 Search (Analysis)', value: 'search' },
                  { title: '💻 Code (Development)', value: 'code' },
                  { title: '🌐 Globe (Network)', value: 'globe' },
                  { title: '🚨 Alert (Incident Response)', value: 'alert' },
                  { title: '📊 Chart (Reporting)', value: 'chart' },
                  { title: '⚙️ Gear (Configuration)', value: 'gear' },
                  { title: '🔧 Tool (Management)', value: 'tool' },
                  { title: '📱 Device (Endpoint)', value: 'device' },
                  { title: '☁️ Cloud (Infrastructure)', value: 'cloud' },
                  { title: '🔐 Key (Authentication)', value: 'key' },
                  { title: '🎯 Target (Precision)', value: 'target' }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'animatedText' },
        { type: 'videoSection' }
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
