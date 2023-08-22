import {defineField, defineType} from 'sanity'

const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: Record<string, string>) {
      return {
        title,
      }
    },
  },
  fields: [
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
      hidden: true,
      options: {
        list: [
          {title: 'IT', value: 'IT'},
          {title: 'UK', value: 'UK'},
          {title: 'ES', value: 'ES'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const regex = /(^[a-z0-9-]+$)/ // Only lowercase letters, numbers, and dashes)
          if (slug?.current && regex.test(slug.current)) {
            return true
          } else {
            return 'Invalid slug: Only numbers, lowercase letters, and dashes are permitted.'
          }
        }),
    }),
  ],
})

export const schemaTypes = [page]
