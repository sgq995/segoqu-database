'use strict';

const DEFAULT_RELATIONS = {
  'p': ['#text'],
  'a': ['@href', '#text'],
  'img': ['@alt', '@src', '@href'],
  'audio': ['@controls', '@autoplay', '@muted'],
  'video': ['@controls', '@autoplay', '@muted'],
};

const COMPONENTS_TAGS = Object.keys(DEFAULT_RELATIONS);// ['p', 'a', 'img', 'audio', 'video'];
const COMPONENTS = COMPONENTS_TAGS
  .map(tag => ({ tag }));

const PROPS_NAMES = Array.from(
  new Set(
    Object.values(DEFAULT_RELATIONS)
      .flat()
  )
); //['#text', 'href', 'alt', 'src', 'controls'];
const PROPS = PROPS_NAMES
  .map(name => ({ name }));

const COMPONENTS_PROPS = COMPONENTS_TAGS.reduce((bulk, tag) => {
  const names = DEFAULT_RELATIONS[tag];
  names.forEach(name => {
    bulk.push({
      component_tag: tag,
      prop_name: name,
    });
  })

  return bulk;
}, []);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('components', COMPONENTS);

    await queryInterface.bulkInsert('props', PROPS);

    await queryInterface.bulkInsert('components_props', COMPONENTS_PROPS);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('components', {
      [Sequelize.Op.or]: COMPONENTS,
    });

    await queryInterface.bulkDelete('props', {
      [Sequelize.Op.or]: PROPS,
    });
  }
};
