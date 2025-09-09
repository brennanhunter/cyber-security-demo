import { defineType } from 'sanity'

export default defineType({
  name: 'animatedText',
  title: 'Animated Text',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text Content',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'animation',
      title: 'Animation Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scramble Effect', value: 'scramble' },
          { title: 'Split Characters', value: 'splitChars' },
          { title: 'Glitch Text', value: 'glitch' },
          { title: 'Fade In Up', value: 'fadeInUp' },
          { title: 'Type Writer', value: 'typewriter' }
        ]
      },
      initialValue: 'fadeInUp'
    },
    {
      name: 'delay',
      title: 'Animation Delay (ms)',
      type: 'number',
      initialValue: 0,
      validation: (Rule: any) => Rule.min(0).max(5000)
    },
    {
      name: 'duration',
      title: 'Duration (ms)',
      type: 'number',
      initialValue: 1000,
      validation: (Rule: any) => Rule.min(100).max(10000)
    },
    {
      name: 'trigger',
      title: 'Animation Trigger',
      type: 'string',
      options: {
        list: [
          { title: 'On Page Load', value: 'load' },
          { title: 'On Scroll Into View', value: 'scroll' },
          { title: 'On Hover', value: 'hover' }
        ]
      },
      initialValue: 'scroll'
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'animation'
    }
  }
})
