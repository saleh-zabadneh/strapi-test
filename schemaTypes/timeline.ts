import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'description.en',
    },
  },
})
