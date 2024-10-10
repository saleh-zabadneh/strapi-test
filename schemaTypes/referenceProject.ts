import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'referenceProject',
  type: 'document',
  title: 'Reference Project',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      type: 'localeText',
      title: 'Description',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Path',
      description: 'The unique part of the URL for this Reference Project (e.g., "red-t-shirt")',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('URL Path is required'),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'localeText'},
        {type: 'imageGrid'},
        {type: 'list'},
        {type: 'quote'},
        {type: 'callToAction'},
        {type: 'video'},
      ],
    }),
  ],
})
