import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'mapDetails',
      title: 'Map Details',
      type: 'object',
      fields: [
        {name: 'latitude', type: 'number', title: 'Latitude'},
        {name: 'longitude', type: 'number', title: 'Longitude'},
        {name: 'zoom', type: 'number', title: 'Zoom Level'},
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phones',
          type: 'array',
          of: [{type: 'string'}],
          title: 'Phone Numbers',
        },
        {
          name: 'faxes',
          type: 'array',
          of: [{type: 'string'}],
          title: 'Fax Numbers',
        },
        {
          name: 'mobiles',
          type: 'array',
          of: [{type: 'string'}],
          title: 'Mobile Numbers',
        },
        {
          name: 'addresses',
          type: 'array',
          of: [{type: 'localeString'}],
          title: 'Addresses',
        },
        {
          name: 'emails',
          type: 'array',
          of: [{type: 'string'}],
          title: 'Email Addresses',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
