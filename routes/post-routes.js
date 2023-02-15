const express = require('express')
const router = express.Router()
const {
    getPost,
    getPosts,
    deletePost,
    getEditPost,
    changePost,
    getAddPost,
    addPost
} = require('../controllers/post-controller')

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.delete('/posts/:id', deletePost)

router.get('/edit/:id', getEditPost)
router.put('/edit/:id', changePost)

router.get('/add-post', getAddPost)
router.post('/add-post', addPost)

module.exports = router
