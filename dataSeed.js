const { faker, da} = require('@faker-js/faker');
const moment = require('moment');

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

exports.generateData = async (requestParams, context, ee, next) => {
        const lastLoginTime = moment().subtract(faker.number.int({ min: 0, max: 1000 }), 'days').format('yyyy-MM-DD HH:mm:ss');
        const lastSyncTime = moment().subtract(faker.number.int({ min: 0, max: 1000 }), 'days').format('yyyy-MM-DD HH:mm:ss');
        const tier = getRandomElement(['paid', 'non-paid']);
        const data = {
                org_id:Number(faker.number.int({ min: 0, max: 100 })),
                integration_id:Number(faker.number.int({ min: 0, max: 100 })),
                last_sync_time: lastSyncTime.toString(),
                last_login_time: lastLoginTime.toString(),
                tier: tier,
        }
        context['vars'].data = JSON.stringify(data);
        return next();
}

// require("./dataSeed.js").generateData({},null,()=>{console.log('done')});