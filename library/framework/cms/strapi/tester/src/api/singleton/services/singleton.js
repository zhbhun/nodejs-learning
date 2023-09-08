'use strict';

/**
 * singleton service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::singleton.singleton');
