const Vibrant = require('node-vibrant');

Vibrant.from(process.argv[2]).getPalette((err, palette) => console.log(palette))