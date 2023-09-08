'use strict';

/**
 * singleton controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::singleton.singleton');
