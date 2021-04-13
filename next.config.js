// next.config.js

const withTM = require('next-transpile-modules')(['@glideapps/glide-data-grid', 'direction', 'marked', 'react-responsive-carousel']);
module.exports = withTM({});
