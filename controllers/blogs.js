import Blog from '../models/Blog.js'
import { Op } from 'sequelize'

export const uploadBlog = async (req, res) => {
    try {
        const image = req.file
        const { title, summary, content } = req.body;

        await Blog.create({
            title,
            summary,
            content,
            cover: image.originalname
        })

        res.status(201).json('Successfully created blog')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1
        const perPage = parseInt(req.query.limit) || 5

        const { count, rows: blogs } = await Blog.findAndCountAll({
            order: [['createdAt', 'DESC']],
            limit: req.query.limit ? perPage : undefined,
            offset: req.query.limit ? (currentPage - 1) * perPage : undefined
        })

        const totalPage = Math.ceil(count / perPage)
        res.status(200).json({ blogs, totalPage })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBlogByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const blog = await Blog.findOne({ where: { title } })

        if (!blog) return res.status(404).json({ message: 'Blog is not found ' })

        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findByPk(id)

        if (!blog) return res.status(404).json({ message: 'Blog is not found ' })

        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRelatedBlogs = async (req, res) => {
    try {
        const { title } = req.params;

        const relatedBlogs = await Blog.findAll({
            where: {
                title: {
                    [Op.ne]: title
                }
            },
            order: [['createdAt', 'DESC']], 
            limit: 3
        });

        if (relatedBlogs.length === 0) {
            return res.status(404).json({ message: 'Blog is not found' });
        }

        res.status(200).json(relatedBlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const editBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { title, summary, content } = req.body

        const blog = await Blog.findByPk(id)

        if (!blog) return res.status(404).json({ message: 'Blog is not found' })

        await blog.update({
            title,
            summary,
            content,
            cover: req.body?.image || blog.cover
        })

        res.status(200).json('Successfully updated blog')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id)

        if (!blog) return res.status(404).json({ message: 'Blog is not found' })

        await blog.destroy()

        res.status(200).json('Successfully deleted blog')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}