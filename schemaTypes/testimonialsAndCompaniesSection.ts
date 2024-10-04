import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'testimonialsAndCompaniesSection',
  title: 'Testimonials and Companies Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localeString',
    }),
    defineField({
      name: 'specialWord',
      title: 'Special Word',
      type: 'localeString',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'testimonial'}]})],
    }),
    defineField({
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'company'}]})],
    }),
  ],
})
