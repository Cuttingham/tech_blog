const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'bofa',
    email: 'bofa@gmail.com',
    password: 'password123'
  },
  {
    username: 'Cuttingham',
    email: 'Cuttingham@gmail.com',
    password: 'password123'
  },
  {
    username: 'Jacob',
    email: 'jacob@gmail.com',
    password: 'password123'
  }

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;