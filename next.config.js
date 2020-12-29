const withCSS = require('@zeit/next-css');
const withSCSS = require('@zeit/next-sass');
const path = require('path');


module.exports = withCSS(withSCSS({
   poweredByHeader: false,
   target: 'serverless',
}));
