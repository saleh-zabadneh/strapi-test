import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'partnersSection',
  type: 'document',
  title: 'Partners Section',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Section ID',
      description: 'Unique identifier for this section',
    }),
    defineField({
      name: 'heading',
      type: 'localeString',
      title: 'Heading',
    }),
    defineField({
      name: 'specialWord',
      type: 'localeString',
      title: 'Special Word',
    }),
    defineField({
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Partner Name',
            }),
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Partner Logo',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
})
