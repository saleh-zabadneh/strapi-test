import {defineType, defineField} from 'sanity'

export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      type: 'text',
      title: 'English',
    }),
    defineField({
      name: 'ar',
      type: 'text',
      title: 'Arabic',
    }),
  ],
})
