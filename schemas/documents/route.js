import { MdLink } from 'react-icons/lib/md';

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: MdLink,
  initialValue: {
    includeInSitemap: true,
  },
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      validation: Rule => Rule.required(),
      to: [
        {
          type: 'page',
        },
      ],
    },

    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title',
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};
