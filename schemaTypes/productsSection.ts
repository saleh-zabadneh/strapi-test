import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'productsSection',
  type: 'document',
  title: 'Products Section',
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
      name: 'featuredProducts',
      type: 'array',
      title: 'Featured Products',
      description:
        'Select up to 4 featured products. Leave empty to use the first 4 products by default.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'product'}],
        }),
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
})
