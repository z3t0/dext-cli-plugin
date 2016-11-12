module.exports = {

  // specify your plugin's activation keyword
  keyword: 'demo',

  // the action to perform when an item is selected
  action: 'openurl',

  // this should produce your desired results.
  // in this example, we're providing a simple object
  // with static results.
  query: {
    items: [
      {
        title: 'GitHub',
        subtitle: 'Build software better, together',
        arg: 'https://github.com',
        icon: {
          path: 'https://github.com/fluidicon.png',
        },
      },
    ],
  },

};
