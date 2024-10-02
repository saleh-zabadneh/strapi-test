// schemaTypes/footer.ts
import {defineType, defineField} from 'sanity'

export const footer = defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    defineField({
      name: 'contactNumbers',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Contact Numbers',
      validation: (Rule) => Rule.max(3).error('You can add a maximum of 3 contact numbers'),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('A valid email is required')
          .max(1)
          .error('You can add only one email'),
    }),
  ],
})
