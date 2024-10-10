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
                {type: 'localeText'},
                {type: 'imageGrid'},
                {type: 'list'},
                {type: 'quote'},
                {type: 'callToAction'},
                {type: 'video'},
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
