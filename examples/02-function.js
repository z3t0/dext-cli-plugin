module.exports = {

  // specify your plugin's activation keyword
  keyword: 'demo',

  // the action to perform when an item is selected
  action: 'openurl',

  // this should produce your desired results by means
  // of using a function. in this example, we're using
  // a callback function to produce the desired results.
  //
  // note that a parameter is available in the callback
  // function. this will allow us to do anything with the
  // query value if needed.
  query: function(q) {
    // do something with "q"...

    // return an object similar to the simple example
    return {
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
  },

};
