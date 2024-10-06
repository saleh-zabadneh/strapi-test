import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Video URL',
    }),
    defineField({
      name: 'caption',
      type: 'localeString',
      title: 'Caption',
    }),
  ],
})
