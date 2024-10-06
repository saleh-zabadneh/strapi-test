import {defineField, defineType} from 'sanity'

const contentTypes = [
  {type: 'localeText', title: 'Text'},
  {
    type: 'object',
    name: 'imageGrid',
    title: 'Image Grid',
    fields: [
      {name: 'images', type: 'array', of: [{type: 'image'}]},
      {name: 'columns', type: 'number', title: 'Number of Columns'},
    ],
  },
  {
    type: 'object',
    name: 'list',
    title: 'List',
    fields: [{name: 'items', type: 'array', of: [{type: 'localeString'}]}],
  },
  {
    type: 'object',
    name: 'quote',
    title: 'Quote',
    fields: [
      {name: 'text', type: 'localeText'},
      {name: 'author', type: 'localeString'},
    ],
  },
  {
    type: 'object',
    name: 'callToAction',
    title: 'Call to Action',
    fields: [
      {name: 'text', type: 'localeString'},
      {name: 'url', type: 'string'},
    ],
  },
  {
    type: 'object',
    name: 'video',
    title: 'Video',
    fields: [
      {name: 'url', type: 'url', title: 'Video URL'},
      {name: 'caption', type: 'localeString', title: 'Caption'},
    ],
  },
]

export default defineType({
  name: 'industryField',
  title: 'Industry Field',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Use this to control the order of industry fields',
    }),
    defineField({
      name: 'parent',
      title: 'Parent Industry Field',
      type: 'reference',
      to: [{type: 'industryField'}],
      description: 'Leave empty for top-level industry fields',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: contentTypes,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
