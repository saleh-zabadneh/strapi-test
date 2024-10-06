import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy Page',
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
                  name: 'list',
                  title: 'List',
                  fields: [{name: 'items', type: 'array', of: [{type: 'localeString'}]}],
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
