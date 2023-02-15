const express = require('express')
const router = express.Router()
const {
    getPost,
    getPosts,
    deletePost,
    changePost,
    addPost
} = require('../controllers/api-post-controller')

// Get all Posts

router.get('/api/posts', getPosts)
// Get post by id
router.get('/api/post/:id', getPost)
// Delete post by id
router.delete('/api/post/:id', deletePost)
// Update post by ID
router.put('/api/post/:id', changePost)
// Add new post
router.post('/api/post', addPost)

module.exports = router
