import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'referenceProjectSection2',
  type: 'document',
  title: 'Reference Project Page ',
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
      name: 'referenceProjects',
      type: 'array',
      title: 'Reference Projects',
      description:
        'Select up to 10 Reference Projects. Leave empty to use the first 4 Reference Projects by default.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'referenceProject2'}],
        }),
      ],
      validation: (Rule) => Rule.max(10),
    }),
  ],
})
