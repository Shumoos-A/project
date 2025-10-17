const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/auth");
const User = require("../models/user");

// Create new post - admin only
router.post("/", authMiddleware(["admin"]), upload.array("media", 10), async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id;
        const sharedAt = new Date();

        // تخزين المسارات كـ نص مفصول بفواصل
        const mediaPaths = req.files.map(file => file.path).join(',');

        const post = await Post.create({ title, content, userId, mediaPath: mediaPaths, sharedAt });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all posts - users and admins
router.get("/", authMiddleware(["admin", "user"]), async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{
                model: User,
                attributes: ['id', 'name', 'email']
            }],
            order: [['sharedAt', 'DESC']]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get post by ID
router.get("/:id", authMiddleware(["admin", "user"]), async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['id', 'name', 'email']
            }]
        });
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update post - admin only
router.put("/:id", authMiddleware(["admin"]), upload.array("media", 10), async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const { title, content } = req.body;
        const mediaPaths = req.files.length > 0
            ? req.files.map(file => file.path).join(',')
            : post.mediaPath;

        await post.update({ title, content, mediaPath: mediaPaths });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete post - admin only
router.delete("/:id", authMiddleware(["admin"]), async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        await post.destroy();
        res.json({ message: "Post deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
