import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'referenceProject2',
  type: 'document',
  title: 'Reference Project Page Item',
  fields: [
    defineField({
      name: 'text1',
      type: 'localeString',
      title: 'Text 1',
    }),
    defineField({
      name: 'text2',
      type: 'localeString',
      title: 'Text 2',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Path',
      options: {
        source: 'text1',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image1',
      type: 'image',
      title: 'Image 1',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'product'}],
      title: 'Category',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'localeText'},
        {type: 'imageGrid'},
        {type: 'list'},
        {type: 'quote'},
        {type: 'callToAction'},
        {type: 'video'},
      ],
    }),
  ],
})
