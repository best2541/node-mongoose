const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id)
        res.json(posts)
    } catch (err) {
        res.send({ message: err })
    }
})
router.put('/', async (req, res) => {
    const post = new Post({
        id: req.body.id,
        title: req.body.title
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const update = await Post.updateOne({ _id: req.params.id },
            { $set: { title: req.body.title } })
        res.json(update)
    } catch (err) {
        res.send({ message: err })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Post.deleteOne({ _id: req.params.id })
        res.json(deleted)
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router