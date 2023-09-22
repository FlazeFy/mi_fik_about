// routes.js
const routes = require('next-routes')();

// Define your custom routes here
routes.add('appRoute', '/app/role/:slug', 'src/app/[id]');
// The above line creates a route that maps to src/app/[id].js

module.exports = routes;
