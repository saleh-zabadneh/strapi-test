import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'steps',
  type: 'document',
  title: 'Steps',
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
