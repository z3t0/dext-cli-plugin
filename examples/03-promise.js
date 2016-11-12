module.exports = {

  // specify your plugin's activation keyword
  keyword: 'demo',

  // the action to perform when an item is selected
  action: 'openurl',

  // this should produce your desired results by means
  // of using a function that returns a Promise.
  // in this example, we're using a callback function
  // to hit an external API and returning a Promise that
  // resolves the similar object as seen in the previous
  // examples.
  query: function(q) {
    // return an object similar to the simple example
    return new Promise(resolve => {
      // do something here like hit an external API...

      // someAsyncFunction().then(data => {
      //   resolve({
      //     // here, we're assuming the returned data
      //     // object perfectly aligns with our item
      //     // schema. 99% of the time, you may need to
      //     // manually map the fields from the external
      //     // API to the Dext item schema.
      //     items: data,
      //   });
      // });

      // for the sake of making this sample work,
      // we'll just return static content for now.
      resolve({
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
      });
    });
  },

};
