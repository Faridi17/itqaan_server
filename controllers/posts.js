import Post from '../models/Post.js'

export const uploadPost = async (req, res) => {
    try {        
        await Post.create({
            image: req.file.originalname,
            description: req.body.description
        })

        res.status(201).json({ message: 'Image successfully upload '})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export const getPosts = async (req, res) => {
    try {
        let options = {
            order: [['createdAt', 'DESC']]
        }

        if(req.query.limit) {
            options.limit = parseInt(req.query.limit)
        }

        const posts = await Post.findAll(options)

        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        const post = await Post.findByPk(id)
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        await post.destroy()
        res.status(200).json({ message: 'Image successfully deleted'})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}