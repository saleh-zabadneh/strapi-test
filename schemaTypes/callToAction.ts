import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'text',
      type: 'localeString',
    }),
    defineField({
      name: 'url',
      type: 'string',
    }),
  ],
})
