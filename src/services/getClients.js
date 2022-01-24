//import
const clients = require('../clients/list.json');

// client
const getClient = (name) => {
    return clients.find(client => client.name === name);
}

// discount
const getValueAndDiscount = (value, discount) => {
    return (value * (100 - discount)) / 100;
}

module.exports = { getClient, getValueAndDiscount }