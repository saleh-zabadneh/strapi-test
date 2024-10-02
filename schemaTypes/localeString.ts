// schemaTypes/localeString.ts
import {defineType, defineField} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      type: 'string',
      title: 'English',
    }),
    defineField({
      name: 'ar',
      type: 'string',
      title: 'Arabic',
    }),
  ],
})
