import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'sectionTitle', type: 'localeString', title: 'Section Title'},
            {
              name: 'content',
              type: 'array',
              of: [
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
                    {name: 'url', type: 'url'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
