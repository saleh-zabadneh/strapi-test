import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'nameImg',
      title: 'Name Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
