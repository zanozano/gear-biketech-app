//import
const clients = require('../clients/list.json');

const getClient = (name) => {
    return clients.find(client => client.name === name);
}

const getValueAndDiscount = (value, discount) => {
    return (value * (100 - discount)) / 100;
}

module.exports = { getClient, getValueAndDiscount }