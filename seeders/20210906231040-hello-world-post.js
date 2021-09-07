'use strict';

const faker = require('faker');
faker.seed(12345678);

const POST = {
  title: 'Hello World!',
  date: new Date(),
  summary: 'This is the first post made with some test data',
};

const CONTENTS = [{
  component_tag: 'p',
  position: 1
}, {
  component_tag: 'img',
  position: 2
}, {
  component_tag: 'a',
  position: 3
}];

const CONTENTS_PROPS = [
  [{ '#text': faker.lorem.paragraphs(1) }],
  [{ '@alt': 'Image' }, { '@src': faker.image.lorempicsum.imageUrl() }],
  [{ '@href': '//google.com' }, { '#text': 'Go to Google' }],
];

function padStart(v, n, s) {
  return v.toString().padStart(n, s);
}

function valueToString(val) {
  if (Number.isInteger(val)) {
    return val;
  } else if (val instanceof Date) {
    const year = val.getUTCFullYear();
    const month = padStart(val.getUTCMonth() + 1, 2, '0');
    const day = padStart(val.getUTCDate(), 2, '0');

    const hours = padStart(val.getUTCHours(), 2, '0');
    const minutes = padStart(val.getUTCMinutes(), 2, '0');
    const seconds = padStart(val.getUTCSeconds(), 2, '0');
    const millis = padStart(val.getUTCMilliseconds(), 3, '0');

    return `'${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${millis}+00'`;
  } else {
    return `'${val}'`;
  }
}

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

    const categories = await queryInterface.sequelize.query(
      `SELECT id FROM categories WHERE label = 'Hello World';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const postData = {
      ...POST,
      category_id: categories.length > 0 ? categories[0].id : null,
    };
    await queryInterface.bulkInsert('posts', [postData]);

    const postOps = Object.entries(postData)
      .map(([key, value]) => `${key} = ${valueToString(value)}`)
      .join(' AND ');
    const posts = await queryInterface.sequelize.query(
      `SELECT id FROM posts WHERE ${postOps}`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const contentData = CONTENTS.map(content => {
      return {
        ...content,
        post_id: posts[0].id
      };
    });
    await queryInterface.bulkInsert('contents', contentData);

    const contents = await queryInterface.sequelize.query(
      `SELECT id FROM contents WHERE post_id = ${posts[0].id}`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const contentsPropsData = CONTENTS_PROPS.map((contentProps, idx) => {
      const content_id = contents[idx].id;

      return contentProps.map(contentProp => {
        const prop_name = Object.keys(contentProp)[0];
        const value = Object.values(contentProp)[0];

        return {
          content_id,
          prop_name,
          value,
        };
      });
    }).flat();
    await queryInterface.bulkInsert('contents_props', contentsPropsData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    const { date, ...obj } = POST;

    await queryInterface.bulkDelete('posts', obj);
  }
};
