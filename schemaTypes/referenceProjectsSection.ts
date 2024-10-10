import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'referenceProjectSection',
  type: 'document',
  title: 'Reference Project Section',
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
      name: 'ReferenceProject',
      type: 'array',
      title: ' Reference Project',
      description:
        'Select up to 10  Reference Project. Leave empty to use the first 4 Reference Projects by default.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'referenceProject'}],
        }),
      ],
      validation: (Rule) => Rule.max(10),
    }),
  ],
})
