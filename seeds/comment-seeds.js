const {Comment} = require("../models");

const commentdata = [
    {
        comment_text: 'This is very cool',
        user_id: 1,
        post_id: 1
      },
      {
        comment_text: 'That is very epic',
        user_id: 2,
        post_id: 2
      },
      {
        comment_text: 'Nice dude',
        user_id: 3,
        post_id: 3
      },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;