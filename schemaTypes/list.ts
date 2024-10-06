import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'list',
  type: 'object',
  title: 'List',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
  ],
})
