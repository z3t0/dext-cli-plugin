module.exports = {

  // specify your plugin's activation keyword
  keyword: 'pm',

  // the action to perform when an item is selected
  action: 'exec',

  // this should produce your desired results.
  // this callback function has a parameter that holds
  // the query value (string) in which you can use
  // to hit external API's to produce your custom results.
  query: function(q) {
    return new Promise(resolve => {
      const output = {
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
      };
      resolve(output);
    });
  },

};
