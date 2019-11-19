export default {
  name: 'site-config',
  type: 'document',
  fieldsets: [
    {
      name: 'footer',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site URL. Used to create canonical URLs',
      validation: Rule => Rule.required(),
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: Rule => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: Rule => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    },
  ],
};
