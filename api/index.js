const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
  id: "org.udtateer.vercel",
  version: "1.0.0",
  name: "Udta-Teer Test [Vercel]",
  description: "A simple test addon",
  resources: ["stream"],
  types: ["movie", "series"],
  catalogs: [],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async function(args) {
  const stream = {
    title: "udta teer",
    description: "If you can see this, Vercel is working!"
  };
  return Promise.resolve({ streams: [stream] });
});

// This line makes it work perfectly with Vercel
module.exports = (req, res) => {
  serveHTTP(builder.getInterface(), { req, res });
};
