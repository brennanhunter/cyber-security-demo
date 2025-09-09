import { defineType } from 'sanity'

export default defineType({
  name: 'videoSection',
  title: 'Video Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'posterImage',
      title: 'Video Thumbnail',
      type: 'image',
      description: 'Thumbnail image shown before video plays'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
      description: 'Note: Most browsers block autoplay with sound'
    },
    {
      name: 'controls',
      title: 'Show Controls',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'loop',
      title: 'Loop Video',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'muted',
      title: 'Muted by Default',
      type: 'boolean',
      initialValue: true,
      description: 'Required for autoplay to work'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'posterImage'
    }
  }
})
