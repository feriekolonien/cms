export default {
  name: 'page',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO & Metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        // { type: 'hero' },
        // { type: 'mailchimp' },
        { type: 'imageSection' },
        { type: 'textSection' },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
