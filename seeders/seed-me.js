'use strict';

const { faker } = require('@faker-js/faker');

const { Sequelize, DataTypes } = require('sequelize');

const { connection, sequelize, JWT_SECRET } = require('../mysqlconfig');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   logging: true,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

const queryInterface = sequelize.getQueryInterface();

let usersBuilt = 1;

// const buildUser = () => {
//   return {
//       id:                     faker.datatype.uuid(),
//       firstname:              faker.name.findName(),
//       lastname:               faker.name.lastName(),
//       username:               'a' + faker.word.noun() + faker.datatype.number(),
//       email:                  faker.internet.email(),
//       password:               faker.word.noun(6),
//       channelDescription:     faker.lorem.words(5),
//       createdAt:              new Date(),
//       updatedAt:              new Date()
//   };
// };

const imagePaths = [
    '27c7467d-143a-4662-a755-6516a38fb562.png',
    '2a817b97-980a-4868-8e33-2d3a11f890ca.jpeg',
    '4a3127b3-475d-4203-9bee-fe45b4c860d5.png',
    '830d1629-407d-4d7d-b081-18152473f293.jpeg',
    '9abd0157-9604-4b7e-861f-50218949af09.png',
    'd9ac4019-d8c2-423d-83fd-c27b5685d14f.png',
    'e039b6c7-3e54-4b9e-9944-968457716ee1.png',
    'e2333329-e52c-41c0-a532-ea919f724574.png',
    'eebaccd3-376e-4d38-a30b-5082e9066bbb.png',
]

const groupIDs = [1, 2, 3];

// +----+---------+-------------------------------------------+--------------------+---------------+---------------------+
// | id | user_id | filename                                  | title              | description   | created             |
// +----+---------+-------------------------------------------+--------------------+---------------+---------------------+
// |  1 |       1 | d9ac4019-d8c2-423d-83fd-c27b5685d14f.png  | a title            | a description | 2022-04-24 18:25:40 |
let imageIDs = 1;
const buildImage = () => {
    return {
        id : imageIDs++,
        user_id : 1,
        filename : faker.random.arrayElement(imagePaths),
        title : faker.random.words(3),
        description : faker.random.words(5),
        created : new Date()
    };
};

let relationshipIDs = 1;
const buildImageGroupRelationship = () => {
    return {
        id : relationshipIDs,
        image_id : relationshipIDs++,
        group_id : faker.random.arrayElement(groupIDs)
    };
};

const genThisTime = 1000; // 10, or 100, or 1000

queryInterface.bulkInsert('images', [...new Array(genThisTime)].map(buildImage));
queryInterface.bulkInsert('image_group_relationship', [...new Array(genThisTime)].map(buildImageGroupRelationship));
