const { faker, da} = require('@faker-js/faker');
const moment = require('moment');

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

exports.generateData = async (requestParams, context, ee, next) => {
    const integration_array = [];
    for (let i = 0; i < 10; i++) {
        integration_array.push(Number(faker.number.int({ min: 0, max: 10_000 })));
    }
    context['vars'].data = JSON.stringify(integration_array);
    return next();
}