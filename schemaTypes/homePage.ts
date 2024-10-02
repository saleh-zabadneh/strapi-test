// schemaTypes/homePage.ts
import {defineType, defineField} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  type: 'document',
  title: 'الصفحة الرئيسية',
  fields: [
    defineField({
      name: 'hero',
      type: 'array',
      title: 'Hero Section',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
              validation: (Rule) => Rule.required().error('Image is required'),
            }),
            defineField({
              name: 'heading',
              type: 'localeString',
              title: 'Heading',
              validation: (Rule) => Rule.required().error('Heading is required'),
            }),
            defineField({
              name: 'subheading',
              type: 'localeString',
              title: 'Subheading',
              validation: (Rule) => Rule.required().error('Subheading is required'),
            }),
            defineField({
              name: 'link',
              type: 'url',
              title: 'Link',
              validation: (Rule) => Rule.required().error('Link is required'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(4).error('You can add a maximum of 4 images'),
    }),
    defineField({
      name: 'whoWeAre',
      type: 'object',
      title: 'Who We Are Section',
      fields: [
        defineField({
          name: 'heading',
          type: 'localeString',
          title: 'Heading',
          validation: (Rule) =>
            Rule.required()
              .max(200)
              .error('Heading is required and must be less than 200 characters'),
        }),
        defineField({
          name: 'paragraph',
          type: 'localeText',
          title: 'Paragraph',
          validation: (Rule) => Rule.required().error('Paragraph is required'),
        }),
        defineField({
          name: 'link',
          type: 'url',
          title: 'Link',
          validation: (Rule) => Rule.required().error('Link is required'),
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: (Rule) => Rule.required().error('Image is required'),
        }),
      ],
    }),
  ],
})
