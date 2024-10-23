import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'chatbot',
  title: 'Chatbot',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'isEnabled',
      title: 'Enable Chatbot',
      type: 'boolean',
      description: 'Toggle to show/hide the chatbot on the client website',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'categoryText',
              title: 'Category Text',
              type: 'object',
              fields: [
                {name: 'en', type: 'string', title: 'English'},
                {name: 'ar', type: 'string', title: 'Arabic'},
              ],
            },
            {
              name: 'description',
              title: 'Description',
              type: 'object',
              fields: [
                {name: 'en', type: 'text', title: 'English'},
                {name: 'ar', type: 'text', title: 'Arabic'},
              ],
            },
          ],
        },
      ],
    }),
  ],
})
