export default {
  widgets: [
    // { name: 'structure-menu' },
    {
      name: 'project-info',
    },
    { name: 'project-users', layout: { height: 'auto' } },
    // { name: 'document-chart' },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['page'],
      },
      layout: { width: 'medium' },
    },
  ],
};