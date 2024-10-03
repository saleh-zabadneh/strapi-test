import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'whatWeOffer',
  type: 'document',
  title: 'What We Offer',
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        {
          name: 'icon',
          type: 'image',
          title: 'Button Icon',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          type: 'string',
          title: 'Button Title',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
