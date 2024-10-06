import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'imageGrid',
  type: 'object',
  title: 'Image Grid',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'columns',
      type: 'number',
      title: 'Number of Columns',
    }),
  ],
})
