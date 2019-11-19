export default {
  name: 'party',
  title: 'Parti',
  type: 'document',
  fields: [
    // start date
    // end date
    {
      name: 'year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        // calendarTodayLabel: 'Today',
      },
    },
  ],
};
