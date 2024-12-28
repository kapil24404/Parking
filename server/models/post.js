const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    num: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    fee: { type: Number, required: true },
    from: { type: String, required: true },
    user: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

// Define indexes explicitly
// postSchema.index({ num: 1 }); // Create an index on num field
// postSchema.index({ slug: 1 }); // Create an index on slug field

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
