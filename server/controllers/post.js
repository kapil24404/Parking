const Post = require('../models/post');
const slugify = require('slugify');

exports.create = (req, res) => {
    const { num, content, fee, from, user } = req.body;
    const slug = slugify(num);

    // Validate input
    if (!num) {
        return res.status(400).json({ error: 'Vehicle Number is Required' });
    }
    if (!content) {
        return res.status(400).json({ error: 'Type of vehicle is Required' });
    }
    if (!fee) {
        return res.status(400).json({ error: 'Fee is Required' });
    }
    if (!from) {
        return res.status(400).json({ error: 'Vehicle Came from is Required' });
    }

    // Check for duplicate slug
    Post.findOne({ slug }).exec((err, existingPost) => {
        if (err) {
            return res.status(500).json({ error: 'Server error' });
        }
        if (existingPost) {
            return res.status(400).json({
                error: 'Duplicate Vehicle Number. Please Delete the previous record of this vehicle number from the database to repark the vehicle',
            });
        }

        // Create the new post
        const newPost = new Post({ num, content, fee, from, user, slug });
        newPost.save((err, post) => {
            if (err) {
                return res.status(400).json({ error: 'Error creating post' });
            }
            res.json(post);
        });
    });
};

exports.list = (req, res) => {
    Post.find({})
        .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, posts) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error fetching posts' });
            }
            res.json(posts);
        });
};

exports.read = (req, res) => {
    const { slug } = req.params;
    Post.findOne({ slug })
        .exec((err, post) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error fetching post' });
            }
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json(post);
        });
};

exports.update = (req, res) => {
    const { slug } = req.params;
    const { num, content, fee, from, user } = req.body;

    // Validate input
    if (!num) {
        return res.status(400).json({ error: 'Vehicle Number is Required' });
    }
    if (!content) {
        return res.status(400).json({ error: 'Type of vehicle is Required' });
    }
    if (!fee) {
        return res.status(400).json({ error: 'Fee is Required' });
    }
    if (!from) {
        return res.status(400).json({ error: 'Vehicle Came from is Required' });
    }

    Post.findOneAndUpdate({ slug }, { num, content, fee, from, user }, { new: true })
        .exec((err, post) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error updating post' });
            }
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json(post);
        });
};

exports.remove = (req, res) => {
    const { slug } = req.params;
    Post.findOneAndRemove({ slug })
        .exec((err, post) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error deleting post' });
            }
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json({
                message: 'Post deleted successfully',
            });
        });
};

exports.count = (req, res) => {
    Post.countDocuments({}) // count all posts
        .exec((err, count) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Error counting posts' });
            }
            res.json({ count });
        });
};
