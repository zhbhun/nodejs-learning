'use strict';

/**
 * singleton router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::singleton.singleton');
