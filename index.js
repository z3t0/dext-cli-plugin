module.exports = {

  keyword: 'demo',

  action: 'openurl',

  output: function(q) {
    return new Promise(resolve => {
      const output = {
        items: [
          {
            title: "GitHub",
            subtitle: "Build software better, together",
            arg: "http://github.com",
            icon: {
              path: "https://github.com/fluidicon.png",
            },
          },
        ],
      };
      resolve(output);
    });
  },

};
