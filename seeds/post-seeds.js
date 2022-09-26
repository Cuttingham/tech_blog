const {Post }=require('../models');

const postdata = [
  {
    title: 'Epic Nice ',
    post_text: 'That is super epic ',
    user_id: 1
  },
  {
    title: 'Not epic Nice ',
    post_text: 'Kinda Lame ',
    user_id: 2
  },
  {
    title: 'I am outraged',
    post_text: 'How could you?',
    user_id: 3
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;