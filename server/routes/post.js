const express = require('express');
const router = express.Router();

// Import Controllers
const { create, list, read, update, remove, count } = require('../controllers/post');

// Define routes
router.post('/post', create); // Create a new post
router.get('/posts', list); // List all posts
router.get('/post/:slug', read); // Read a single post by slug
router.put('/post/:slug', update); // Update a post by slug
router.delete('/post/:slug', remove); // Delete a post by slug
router.get('/post/count/:slug', count); // Get count of posts by slug

module.exports = router;
