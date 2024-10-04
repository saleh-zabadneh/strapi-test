import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [
            {type: 'heroSection'},
            {type: 'aboutSection'},
            {type: 'productsSection'},
            {type: 'partnersSection'},
            {type: 'testimonialsAndCompaniesSection'},
          ],
        }),
      ],
    }),
  ],
})
